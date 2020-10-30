// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorElement = document.querySelector("#modal")
const errorMessage = document.querySelector("#modal-message")

const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach( function(element){
  element.addEventListener("click", function(){
    
    mimicServerCall()
      .then(response => {
        if (element.innerText === EMPTY_HEART) {
          element.innerText = FULL_HEART
          element.classList.toggle("activated-heart")
        } else if (element.innerText === FULL_HEART) {
          element.classList.toggle("activated-heart")
          element.innerText = EMPTY_HEART
        }
      }).catch(error => {
        console.log(error)
        errorElement.classList.toggle("hidden")
        errorMessage.innerText = error
        setTimeout(function(){
          errorElement.classList.toggle("hidden")
        }, 5000)
      })
    
    
  })
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
