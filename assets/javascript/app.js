var answer1 = "Rajah";
var answer2 = "Left Hand";
var answer3 = "Pride Rock";
var answer4 = "Dinah";
var answer5 = "5 Dozen";
var userpicked;
var correctanswer = 0;
var incorrectanswer = 0;
var radioarray = $('.radioBtn')
var count;
var number = 30;
var intervalId;


$(document).ready(function () { 

    $("#startbutton").on("click",function (event) {

    $("#questionnaire").show();
    $("#startbutton").hide();
    $("#submitbutton").show();
    $("#thirdpart").hide();
    })


$(".radioBtn").on("click",function (event) {


if (event.target.name ==='optradio1') {
   userpicked= event.target.value
   console.log('userpicked',userpicked);

    if (userpicked === answer1) {
        correctanswer++;
     console.log('correctanswer',correctanswer);
    
        ;
    } else {
        incorrectanswer++; 
        console.log('incorrectanswer',incorrectanswer)
    }
}
if (event.target.name ==='optradio2') {
    userpicked= event.target.value
    console.log('userpicked',userpicked);
 
     if (userpicked === answer2) {
         correctanswer++;
      console.log('correctanswer',correctanswer);
     
         ;
     } else {
         incorrectanswer++; 
         console.log('incorrectanswer',incorrectanswer)
     }
 }

 if (event.target.name ==='optradio3') {
    userpicked= event.target.value
    console.log('userpicked',userpicked);
 
     if (userpicked === answer3) {
         correctanswer++;
      console.log('correctanswer',correctanswer);
     
         ;
     } else {
         incorrectanswer++; 
         console.log('incorrectanswer',incorrectanswer)
     }
 }
 if (event.target.name ==='optradio4') {
    userpicked= event.target.value
    console.log('userpicked',userpicked);
 
     if (userpicked === answer4) {
         correctanswer++;
      console.log('correctanswer',correctanswer);
     
         ;
     } else {
         incorrectanswer++; 
         console.log('incorrectanswer',incorrectanswer)
     }
 }

 if (event.target.name ==='optradio5') {
    userpicked= event.target.value
    console.log('userpicked',userpicked);
 
     if (userpicked === answer5) {
         correctanswer++;
      console.log('correctanswer',correctanswer);
     
         ;
     } else {
         incorrectanswer++; 
         console.log('incorrectanswer',incorrectanswer)
     }
 }

console.log('Radui BUTTON ELEMENT', $('.radioBtn'))
})


$("#submitbutton").click(function () {
    console.log("test");

$("#questionnaire").hide();
$("#submitbutton").hide();
$("#thirdpart").show();

console.log("array", radioarray);
radioarray.each((index, val) => {
if (val.check === true ){
count++
}
})
$("#submitbutton").hide();
$("#thirdpart").show();
var uncheckedvalue = 5 - count;
if(uncheckedvalue > 0)
{
$("#result3").html(uncheckedvalue);
}

$("#result1").html(correctanswer);
$("#result2").html(incorrectanswer);
clearInterval(intervalId);
});
});


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement () {
    // decrease number by 1 unit value
    number--;
    $("#timeout").text(number);
    if(number === 0){
        $("#questionnaire").hide();
    radioarray.each((index, val) => {
        if (val.check === true ){
        count++
        }
    })
    $("#submitbutton").hide();
    $("#thirdpart").show();
    var uncheckedvalue = 5 - count;
if(uncheckedvalue > 0)
{
$("#result3").html(uncheckedvalue);
}
console.log("unchecked radio button number",uncheckedvalue);
$("#result1").html(correctanswer);
$("#result2").html(incorrectanswer);

}
};
run();