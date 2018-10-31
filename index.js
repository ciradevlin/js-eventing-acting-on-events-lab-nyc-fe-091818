const dodger = document.getElementById('dodger')

console.log('i am woking')

let dodgerPosition = 0 

//dodger.style.left = '380px'

function moveDodger() {
  const keycode = event.which
  console.log(keycode)
  if (keycode === 37) {
    dodger.style.right = '360px'
} else if (keycode === 39) {
  
} else if (keycode === 38) {
  
} else if (keycode === 40) {
  

}
}

document.addEventListener('keydown', moveDodger)

