// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const promiseResp = mimicServerCall();  

let likes = document.getElementsByClassName("like-glyph")
for(const like of likes) {
  like.addEventListener("click", function(e) {  
  processLikes(e);
})
}



function processLikes(e) {
   mimicServerCall()
   .then(function(serverMsg) {
    console.log(serverMsg)
    activateHeart(e);
  })
   .catch(function(serverErr) { 
    console.log(serverErr)
    showErrorMsg(serverErr) 
});
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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

function showErrorMsg(msg) {

  let modal = document.getElementById("modal");
  modal.querySelector("h2").innerText = msg;
    if (modal.classList.value === "hidden") {
      modal.classList.value = "";
      setTimeout(function(){ modal.classList.value = "hidden"; }, 3000); 
    } else {
      modal.classList.value = "hidden";
    }
}

function activateHeart(e) {

  if (e.path[1].children[0].innerText === EMPTY_HEART) {
    e.path[1].children[0].innerText = FULL_HEART;
    e.path[1].children[0].classList.value = "activated-heart";
  }else {
    e.path[1].children[0].innerText = EMPTY_HEART;
    e.path[1].children[0].classList.value = "";
  }
}