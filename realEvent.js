var playSiren = false;
var playRadio = false;

//click home button to get redirected to start.html
$(document).ready(function(){
    $("#homeButton").click(function(){
        location.href = "start.html";
    });
});

//click black button to get redirected to previous page
// $(document).ready(function(){
//     $("#backButton").click(function(){
//         location.href = "start.html";
//     });
// });

// for AMBER ALERT
function myFunction1() {
    var warnButton = document.getElementById("warnButton1").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedRealAlarm.html";
}

// for LANDSLIDE
function myFunction2() {
    var warnButton = document.getElementById("warnButton2").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedRealAlarm.html";
}

// for TSUNAMI
function myFunction3() {
    var warnButton = document.getElementById("warnButton3").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedRealAlarm.html";
}

// for PACOM CDW
function myFunction4() {
    var warnButton = document.getElementById("warnButton4").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedRealAlarm.html";
}

// for HIGH SURF
function myFunction5() {
    var warnButton = document.getElementById("warnButton5").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedRealAlarm.html";
}

// $(document).ready(function(){
//     $("#warnTable").click(function(){
//         location.href = "selectedRealAlarm.html";
//     });
// });

$(document).ready(function(){
    $("#sendRealVia").click(function(){
        location.href = "sendRealVia.html";
    });
});


function printCheckedViaChoices() {
    var items = document.getElementsByName('notification');
    var selectedItems = "| ";
    var printItems; 
    var i;

    for (i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox' && items[i].checked == true) {
            selectedItems += items[i].value + " | ";
        }

        if (items[i].value == 'SIREN' && items[i].checked == true) {
            playSiren = true;
        } 
            
        if (items[i].value == 'RADIO' && items[i].checked == true) {
            playRadio = true;
        }
    }

    var islanditems = document.getElementsByName('island');
    var selectedislands = "| ";
    var printIslands; 
    var j;

    for (j = 0; j < islanditems.length; j++) {
        if (islanditems[j].type == 'checkbox' && islanditems[j].checked == true) {
            selectedislands += islanditems[j].value + " | ";
        }
    }
    localStorage.selectedItems = selectedItems;
    localStorage.selectedislands = selectedislands;

    location.href = "reviewRealAlarm.html";
}


$(document).ready(function(){
    $("#reviewRealAlarm").click(function(){
        location.href = "reviewRealAlarm.html";
    });
});

$(document).ready(function(){
    $("#cancel").click(function(){
        location.href = "redirectToStart.html";
    });
});

$(document).ready(function(){
    $("#confirm").click(function(){
        location.href = "sendToSupervisor.html";

        sirensound();
        radiomsg();
    });
});


// Plays siren if siren option is checked.
function sirensound(){
    if (playSiren = true) {
        window.open("sirenPlayer.html");
    }
}

// Plays radio message if radio option is checked.
function radiomsg(){
    if (playRadio = true) {
        window.open("realRadioPlayer.html");
    }
}

$("input").click(function() {
    var alarm_button = $(this).val();
    alert(alarm_button);
});