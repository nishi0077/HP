# 背景パッチを削除して Cursor を元に戻す
$ErrorActionPreference = "Stop"

$workbenchPath = $null
$cursorExe = (Get-Command cursor -ErrorAction SilentlyContinue).Source
if ($cursorExe) {
    $appDir = Split-Path (Split-Path $cursorExe)
    $workbenchPath = Join-Path $appDir "out\vs\workbench\workbench.desktop.main.js"
}
if (-not $workbenchPath -or -not (Test-Path $workbenchPath)) {
    $possiblePaths = @(
        "D:\アプリケーション\cursor\resources\app\out\vs\workbench\workbench.desktop.main.js",
        "$env:LOCALAPPDATA\Programs\cursor\resources\app\out\vs\workbench\workbench.desktop.main.js"
    )
    foreach ($p in $possiblePaths) {
        if (Test-Path $p) { $workbenchPath = $p; break }
    }
}

if (-not (Test-Path $workbenchPath)) {
    Write-Host "ERROR: Workbench not found."
    exit 1
}

$content = Get-Content $workbenchPath -Raw -Encoding UTF8
$newContent = $content -replace '\n// vscode-background-start[\s\S]*// vscode-background-end', ''

if ($content -eq $newContent) {
    Write-Host "No patch found. Already clean."
} else {
    Set-Content $workbenchPath $newContent -Encoding UTF8 -NoNewline
    Write-Host "SUCCESS: Background patch removed. Restart Cursor."
}
