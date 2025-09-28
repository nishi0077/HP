"use client"

import Image from 'next/image'

export function TestImage() {
  return (
    <div className="p-4 border-2 border-red-500 m-4">
      <h3>画像テスト</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>AS IT IS</p>
          <Image
            src="/images/marketing/as-it-is.png"
            alt="AS IT IS test"
            width={200}
            height={150}
            className="border"
            onError={(e) => console.error('Test image error:', e)}
            onLoad={() => console.log('Test image loaded: as-it-is.png')}
          />
        </div>
        <div>
          <p>ReBORN GROUP</p>
          <Image
            src="/images/marketing/reborn-group.png"
            alt="ReBORN GROUP test"
            width={200}
            height={150}
            className="border"
            onError={(e) => console.error('Test image error:', e)}
            onLoad={() => console.log('Test image loaded: reborn-group.png')}
          />
        </div>
        <div>
          <p>XIAOMA</p>
          <Image
            src="/images/marketing/xiaoma.png"
            alt="XIAOMA test"
            width={200}
            height={150}
            className="border"
            onError={(e) => console.error('Test image error:', e)}
            onLoad={() => console.log('Test image loaded: xiaoma.png')}
          />
        </div>
        <div>
          <p>ACTLAND</p>
          <Image
            src="/images/marketing/actland.png"
            alt="ACTLAND test"
            width={200}
            height={150}
            className="border"
            onError={(e) => console.error('Test image error:', e)}
            onLoad={() => console.log('Test image loaded: actland.png')}
          />
        </div>
      </div>
    </div>
  )
}
