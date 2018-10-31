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
} else if (keycode === 39) {
  
} else if (keycode === 38) {
  
} else if (keycode === 40) {
  

}
}

document.addEventListener('keydown', moveDodger)

