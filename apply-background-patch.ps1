# Cursor 背景画像 手動パッチスクリプト
# 管理者として実行するか、Cursorを終了してから実行してください

$ErrorActionPreference = "Stop"
$imgPath = "file:///D:/HP/next-sociality/cursor-bg.png"
$opacity = 0.3

# Cursorのworkbenchパスを取得
$workbenchPath = $null
$cursorExe = (Get-Command cursor -ErrorAction SilentlyContinue).Source
if ($cursorExe) {
    $appDir = Split-Path (Split-Path $cursorExe)
    $workbenchPath = Join-Path $appDir "out\vs\workbench\workbench.desktop.main.js"
}
if (-not $workbenchPath -or -not (Test-Path $workbenchPath)) {
    # 代替パスを検索
    $possiblePaths = @(
        "D:\アプリケーション\cursor\resources\app\out\vs\workbench\workbench.desktop.main.js",
        "$env:LOCALAPPDATA\Programs\cursor\resources\app\out\vs\workbench\workbench.desktop.main.js"
    )
    foreach ($p in $possiblePaths) {
        if (Test-Path $p) { $workbenchPath = $p; break }
    }
}
if (-not $workbenchPath -or -not (Test-Path $workbenchPath)) {
    Write-Host "ERROR: Workbench not found. Please close Cursor and run as Administrator."
    exit 1
}

# 既存パッチを削除
$content = Get-Content $workbenchPath -Raw -Encoding UTF8
$content = $content -replace '\n// vscode-background-start[\s\S]*// vscode-background-end', ''

# 新規パッチ（エディタ・パネルに背景を追加 + 破損警告を非表示）
$patch = @"
// vscode-background-start background.ver.2.0.0
;(function(){
var img="$imgPath".replace(/\\/g,'/');
var o=$opacity;
var s=document.createElement('style');
s.textContent='.notification-toast-container:has([aria-label*="corrupt"]),.notification-toast-container:has([aria-label*="壊れ"]){display:none!important}body{--bg-mode:unset}body:has(> .monaco-workbench.vs-dark){--bg-mode:screen}.minimap{opacity:.8}[id="workbench.parts.editor"] .split-view-view .editor-container .overflow-guard>.monaco-scrollable-element>.monaco-editor-background{background:none}[id="workbench.parts.editor"] .split-view-view .editor-instance>.monaco-editor>.overflow-guard>.monaco-scrollable-element::after{content:"";width:100%;height:100%;position:absolute;z-index:99;pointer-events:none;background:url("'+img+'") center/cover no-repeat;opacity:'+o+';mix-blend-mode:var(--bg-mode)}.split-view-view>.part.panel::after{content:"";position:absolute;width:100%;height:100%;top:0;left:0;background:url("'+img+'") center/cover no-repeat;pointer-events:none;opacity:'+o+';mix-blend-mode:var(--bg-mode)}';
document.head.appendChild(s);
})();
// vscode-background-end
"@

$newContent = $content + "`n" + $patch

try {
    Set-Content $workbenchPath $newContent -Encoding UTF8 -NoNewline
    Write-Host "SUCCESS: Background patch applied to $workbenchPath"
    Write-Host "Please restart Cursor to see the background."
} catch {
    Write-Host "ERROR: $_"
    Write-Host "Try running this script as Administrator."
    exit 1
}
