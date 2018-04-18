//click back button to get redirected to previous page
$(document).ready(function(){
    $("#backButton").click(function(){
        location.href = "real1.html";
    });
});

$(document).ready(function(){
    $("#sendRealVia").click(function(){
        location.href = "sendRealVia.html";
    });
});

$(document).ready(function(){
    $("#cancel").click(function(){
        location.href = "redirectToStart.html";
    });
});

