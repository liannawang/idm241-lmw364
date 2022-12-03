// function launch_toast() {
//     var x = document.getElementById("toast")
//     x.className = "show";
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
    
// }

// function launch_removetoast() {
//     var removetoast = document.getElementById("removetoast")
//     removetoast.className = "show";
//     setTimeout(function(){ removetoast.className = removetoast.className.replace("show", ""); }, 5000);
    
// }

// function show_modal() {
//     var y = document.getElementById("test")
//     // y.className = "show";
//     document.getElementById("overlay").style.display = "block";
//     // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
// }

// function close_modal() {
//     // var y = document.getElementById("test")
//     // y.className = "show";
//     document.getElementById("overlay").style.display = "none";
   
//     // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
// }




// function handleAction() {
//     var state = document.getElementById("liked")
//     if (state == "liked") {
//         launch_toast();
//         // stuff for 'playnow' action

//         state = true;
//         return;
//     } else{
        
//     }

//     if (state == true) {
//         // stuff for 'stop' action
//         launch_removetoast();
//         state = false;
//         return;
//     }
// }


function launch_toast() {
    document.getElementById("toast").style.display = "block";
    var x = document.getElementById("toast")
    x.className = "show";
    console.log("working");
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 62000);
}

function close_toast() {
    document.getElementById("toast").className = "fade-out";
    console.log(b.className);
}

function close_removetoast() {
    document.getElementById("removetoast").className = "fade-out";
}

function remove_toast() {
    document.getElementById("removetoast").style.display = "block";
    var z = document.getElementById("removetoast")
    z.className = "show";
    setTimeout(function(){ z.className = z.className.replace("show", ""); }, 5000);
}

function show_modal() {
    document.getElementById("overlay").className = "fade-in";

    // document.getElementById("overlay").style.display = "block";
    // // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function close_modal() {
    // var y = document.getElementById("test")
    // y.className = "show";
    document.getElementById("overlay").className = "fade-out";
   
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function buttonPress(){
    var state = document.querySelector('#liked');
    // console.log (state.checked);
    if(state.checked){
        launch_toast();
        
    }else{
        console.log('dislike');
        remove_toast();
    }
}


// var x = false;

// function handleAction() {
//     if (state == false) {
//         // stuff for 'playnow' action

//         state = true;
//         return;
//     }

//     if (state == true) {
//         // stuff for 'stop' action

//         state = false;
//         return;
//     }


cancelX.addEventListener ('click', () => {
    pinned.classList.add ('exitAnim');
    pinnedContent.classList.add ('exitAnim-content');
    
    setTimeout(() => {
      pinned.style.display="none";
      pinned.classList.remove ('exitAnim');
      pinnedContent.classList.remove ('exitAnim-content');
  
  }, 500);
  
  })
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }