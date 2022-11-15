function handleAction() {
    if (state == false) {
        // stuff for 'playnow' action
        launch_toast();
        var state = true;
        return;
    }

    if (state == true) {
        // stuff for 'stop' action
        remove_toast();
        var state = false;
        return;
    }
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function remove_toast() {
    var z = document.getElementById("removetoast")
    z.className = "show";
    setTimeout(function(){ z.className = z.className.replace("show", ""); }, 5000);
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



