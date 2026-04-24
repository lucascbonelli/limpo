import { useEffect, useState } from 'react'

function TransparentLogo({ src, alt, className, width, height }) {
  const [dataUrl, setDataUrl] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        if (r > 200 && g > 200 && b > 200) {
          const brightness = (r + g + b) / 3
          const alpha = Math.max(0, (255 - brightness) * 4)
          data[i + 3] = Math.min(alpha, data[i + 3])
        }
      }

      ctx.putImageData(imageData, 0, 0)
      setDataUrl(canvas.toDataURL('image/png'))
      setTimeout(() => setLoaded(true), 50)
    }
    img.src = src
  }, [src])

  if (!dataUrl) {
    return <div className={className} style={{ width, height }} />
  }

  return (
    <img
      src={dataUrl}
      alt={alt}
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'scale(1)' : 'scale(0.9)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    />
  )
}

export default TransparentLogo
