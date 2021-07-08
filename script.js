// Boxes

const boxes = document.querySelectorAll ('.box')
const werkervaring = document.getElementById ('werk') 
const opleiding = document.getElementById ('opl')
const cursus = document.getElementById('cursus')
const arrow = document.querySelector('.footer')



werkervaring.addEventListener('click', function () {
  window.scrollTo(0,0)
  werkervaring.classList.add('.active')
})
opleiding.addEventListener('click', function () {
  window.scrollTo(0,1400)
  opleiding.classList.add('.active')
})
cursus.addEventListener('click', function () {
  window.scrollTo(0,2400)
  cursus.classList.add('.active')
})



document.onscroll = function() {
  if (window.innerHeight + window.scrollY + 20 > document.body.clientHeight) {
    arrow.style.display='none'
      // document.getElementById('').style.display='none';
  } else {
    arrow.style.display=''
  }
}


window.addEventListener('scroll', checkBoxes)

checkBoxes()


function checkBoxes () {
  const triggerBottom = window.innerHeight / 5 * 4
  
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    
    if (boxTop < triggerBottom) {
      box.classList.add('show')

    }else {
      box.classList.remove('show')
    }
  })
}




