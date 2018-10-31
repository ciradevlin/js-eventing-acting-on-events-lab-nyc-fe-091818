const dodger = document.getElementById('dodger')

console.log('i am woking')

let dodgerPosition = 0 

//dodger.style.left = '380px'

function moveDodger() {
  const keycode = event.which
  console.log(keycode)
  if (keycode === 37) {
    let oldLeft = dodger.style.left
    
    if (oldLeft === '0px') { 
      return
    }
    
     oldLeft = parseInt(oldLeft, 10)
    dodger.style.left = (oldLeft - 10) +'px'
}
}

function moveDodgerRight(event) { 
  if (event.which === 39) {
    let oldLocation = dodger.style.left
    
    
    oldLocation = parseInt(oldLocation, 10) 
    
  dodger.style.left = (oldLocation + 10) + 'px'

  }
}
  

document.addEventListener('keydown', moveDodger)

