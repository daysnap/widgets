
export const getImageInfo: (options: { src: string }) => Promise<HTMLImageElement> = ({ src }) => new Promise<HTMLImageElement>((resolve, reject) => {
  const image = new Image()
  image.setAttribute('crossOrigin', 'Anonymous')
  image.onload = () => resolve(image)
  image.onerror = reject
  image.src = src
})
