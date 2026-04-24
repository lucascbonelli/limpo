import { useEffect, useRef, useState } from 'react'

function TransparentLogo({ src, alt, className, width, height }) {
  const canvasRef = useRef(null)
  const [dataUrl, setDataUrl] = useState(null)

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

        // If pixel is close to white, make it transparent
        if (r > 200 && g > 200 && b > 200) {
          const brightness = (r + g + b) / 3
          // Gradual transparency: whiter = more transparent
          const alpha = Math.max(0, (255 - brightness) * 4)
          data[i + 3] = Math.min(alpha, data[i + 3])
        }
      }

      ctx.putImageData(imageData, 0, 0)
      setDataUrl(canvas.toDataURL('image/png'))
    }
    img.src = src
  }, [src])

  if (!dataUrl) {
    return <div className={className} style={{ width, height }} />
  }

  return <img src={dataUrl} alt={alt} className={className} />
}

export default TransparentLogo
