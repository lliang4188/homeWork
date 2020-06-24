export default (png) => {
  let img = document.createElement('img')
  img.setAttribute('src', png)
  return img
}
