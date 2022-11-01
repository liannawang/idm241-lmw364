function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function show_modal() {
    var y = document.getElementById("test")
    // y.className = "show";
    document.getElementById("overlay").style.display = "block";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function close_modal() {
    // var y = document.getElementById("test")
    // y.className = "show";
    document.getElementById("overlay").style.display = "none";
   
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
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