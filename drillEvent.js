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

    location.href = "selectedDrillAlarm.html";
}

// for LANDSLIDE
function myFunction2() {
    var warnButton = document.getElementById("warnButton2").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

// for TSUNAMI
function myFunction3() {
    var warnButton = document.getElementById("warnButton3").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

// for PACOM CDW
function myFunction4() {
    var warnButton = document.getElementById("warnButton4").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

// for HIGH SURF
function myFunction5() {
    var warnButton = document.getElementById("warnButton5").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

// //click alarm choice button to get redirected to selectedDrillAlarm.html
// $(document).ready(function(){
//     $("#warnTable").click(function(){
//         location.href = "selectedDrillAlarm.html";
//     });
// });

$(document).ready(function(){
    $("#sendDrillVia").click(function(){
        location.href = "sendDrillVia.html";
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

            if (items[i].value == 'SIREN') {
                playSiren = true;
            } else if (items[i].value == 'RADIO') {
                playRadio = true;
            }
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

    location.href = "reviewDrillAlarm.html";
}

// $(document).ready(function(){
//     $("#reviewDrillAlarm").click(function(){
//         location.href = "reviewDrillAlarm.html";
//     });
// });

$(document).ready(function(){
    $("#confirmDrill").click(function(){
        location.href = "drillAlarmSent.html";

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
        window.open("drillRadioPlayer.html");
    }
}
