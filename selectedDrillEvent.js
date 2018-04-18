//click home button to get redirected to start.html
$(document).ready(function(){
    $("#homeButton").click(function(){
        location.href = "start.html";
    });
});

$(document).ready(function(){
    $("#sendDrillVia").click(function(){
        location.href = "sendDrillVia.html";
    });
});

//click back button to get redirected to previous page
$(document).ready(function(){
    $("#backButton").click(function(){
        location.href = "drill1.html";
    });
});
