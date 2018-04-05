//clicking a 'now' choice button will be redirected to start.html
$(document).ready(function(){
    $("#redirectNow").click(function(){
        location.href = "start.html";
    });

    window.setTimeout(function () {		//Redirects to start.html after 5 seconds if 'now' not selected
        location.href = "start.html";
    }, 5000);
});