// const glImage = document.getElementsByClassName('gl-image')
const closeBtn = document.getElementById('gl-close')
const gallery = document.getElementById('gallery')
const prevBtn = document.getElementById('gl-prev')
const nextBtn = document.getElementById('gl-next')
const images = document.getElementsByClassName('gl-imagesrc')
const galleryImg = document.getElementById('gl-imagezoom')
var current = 0

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    current = i
    galleryImg.src = this.src
    gallery.classList.add('show')
  })
}

closeBtn.addEventListener('click', function () {
  gallery.classList.remove('show')
})

prevBtn.addEventListener('click', function () {
  nextBtn.classList.remove('hide')
if (current > 0){
  current--;
  if (current == 0){
    prevBtn.classList.add('hide')
  }else if (current!=0){
    prevBtn.classList.remove('hide')
  }// Thay src anh vao
  galleryImg.src = images[current].src
  gallery.classList.add('show')
}
})

nextBtn.addEventListener('click', function () {
  prevBtn.classList.remove('hide')
  if (current < images.length - 1){
    current++;
    if (current == images.length - 1){
      nextBtn.classList.add('hide')
    }else if (current != images.length - 1){
      nextBtn.classList.remove('hide')
    }// Thay src anh vao
    galleryImg.src = images[current].src
    gallery.classList.add('show')
  }
})
