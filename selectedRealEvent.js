//click home button to get redirected to start.html
$(document).ready(function(){
    $("#homeButton").click(function(){
        location.href = "start.html";
    });
});

//click back button to get redirected to previous page
$(document).ready(function(){
    $("#backButton").click(function(){
        location.href = "real1.html";
    });
});

$(document).ready(function(){
    $("#sendVia").click(function(){
        location.href = "sendRealVia.html";
    });
});

$(document).ready(function(){
    $("#cancel").click(function(){
        location.href = "redirectToStart.html";
    });
});