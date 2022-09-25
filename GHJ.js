 var prompt = require('prompt-sync')();
 function NegativeorPositive(){
    var x = prompt("Write number:")
    if (x<0){
        console.log ("Negative number:"+x)
    }
    if (x>0){
        console.log ("Positive number:"+x)
    }
 }

function NumberorLetter(){
var y = prompt ("Write Letter or Number:");{
    if (isNaN){
        console.log("Letter:"+y);
    }
    if (y<0){
        console.log ("Negative number:"+y)
    }
    if (y>0){
        console.log ("Positive number:"+y)
    }
}
}


var Gnom= prompt("Write in name of Function:")
    if(Gnom =='Triangel'){
     Yez.call(this, Yez)
    }
    if(Gnom == 'VokalorNot'){
      Vokal.call(this, Vokal)
    }
    if (Gnom == 'Grade'){
        Procent.call(this, Procent)
    }
    if (Gnom == 'Number'){
        NegativeorPositive.call(this, NegativeorPositive)
    }
    if (Gnom == 'Letter'){
        NumberorLetter.call (this, NumberorLetter)
    }
    if (Gnom == 'NumberGame'){
        UddaJämt.call(this,  UddaJämt)
    }
    if (Gnom == 'NumberorNot'){
        NumberorNot.call(this, NumberorNot)
    }
    if (Gnom == 'Days'){
        month.call(this, month)
    }
    if (Gnom == 'Biggest'){
        Biggest.call(this, Biggest)
    }
    if (Gnom == 'Sorting'){
        Sorting.call(this, Sorting)
    }

function Yez(){
var Katt = prompt("Enter Angle 1:");
var Kex = prompt("Enter Angle 2:");
var Mango= prompt("Enter Angle 3:");
if (Katt =="60",Kex =="60",Mango =="60"){
    console.log("Giltig triangle")
}
else if(Katt+Kex+Mango < 180 < Katt+Kex+Mango){
    console.log("Ogiltig triangle")
}
}

function Vokal(){
var Bear = prompt("Write Letter:")
if (Bear=="A"||Bear =="E"||Bear =="I"||Bear =="O"||Bear =="U"){
    console.log("Vokal:"+Bear)
}
else if (Bear == "B"||Bear =="C"||Bear =="D"||Bear =="F"||Bear =="G"||Bear =="H"||Bear =="J"||Bear =="K"||Bear =="L"||Bear =="M"||Bear =="N"||Bear =="P"||Bear =="Q"||Bear =="R"||Bear =="S"||Bear =="T"||Bear =="V"||Bear =="X"||Bear =='Z'){
    console.log("Konstant:"+Bear)
}else{
    console.log("Other:"+Bear)
}
}

function Procent(){
var Betyg = prompt("Write in Procent:");
if (Betyg<=90){
    console.log("Grade A")
}
if (Betyg<=80){
    console.log("Grade B")
}
if (Betyg<=70){
    console.log("Grade C")
}
if (Betyg<=60){
    console.log("Grade D")
}
if (Betyg<=40){
    console.log("Grade E")
}
if (Betyg<40){
    console.log("Grade F")
}
}
function UddaJämt(){
var tal =prompt("Write Number:");
if (tal % 2 == 0) {
    console.log('Jämnt tal:'+tal);
  } else {
    console.log('Udda tal:'+tal);
  }
}
function NumberorNot(){
    var Grizzly = prompt ("Write:")
    if (isNaN){
        console.log("Not a Number:"+Grizzly)
    }
    if (Grizzly<0<Grizzly){
        console.log("Number:"+Grizzly)
    }
}
function month(){
    var Year=prompt("Write in Year:")
    var Month=prompt("Write in Month:")
 if (Year %4==0){
 var January  = 31;
 var February = 29;
 var March  = 31;
 var April = 30;
 var May = 31;
 var June  = 30;
 var July = 31;
 var August = 31;
 var September = 30;
 var October = 31;
 var November = 30;
 var December = 31;
}else{
 var January  = 31;
 var February = 28;
 var March  = 31;
 var April = 30;
 var May = 31;
 var June  = 30;
 var July = 31;
 var August = 31;
 var September = 30;
 var October = 31;
 var November = 30;
 var December = 31;
}
if (Month=="January"){
var Month=January;
}
if (Month=="February"){
    var Month=February;
    }
     if (Month=="March"){
        var Month=March;
        }
         if (Month=="April"){
            var Month=April;
            }
            if (Month=="May"){
                var Month=May;
                }
                 if (Month=="June"){
                    var Month=June;
                    }
                     if (Month=="August"){
                        var Month=August;
                        }
                        if (Month=="September"){
                            var Month=September;
                            }
                            if (Month=="July"){
                                var Month=July;
                                }
                               if (Month=="October"){
                                    var Month=October;  
                                    }
                                   if (Month=="November"){
                                        var Month=November;
                                        }
                                        if (Month=="December"){
                                            var Month=December; 
                                            }

console.log("Days:"+Month)
       
                
}
function Biggest(){
    var num1=prompt("Write first number:");
    var num2=prompt("Write second number:");
    var num3=prompt("Write third number:");
    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }
    console.log("The largest number is " + largest);
}
function Sorting(){
    var num1=prompt("Write first number:");
    var num2=prompt("Write second number:");
    var num3=prompt("Write third number:");
    if (num1>=num2 && num3<=num1){
        var first=num1;
        var second=num2;
        var third=num3;
    }
    if (num2>=num1 && num2>=num3&& num3>=num1){
        var first=num2;
        var second=num3;
        var third=num1;
    }
    if(num3>=num1 && num3>=num2){
        var first=num3;
        var second=num2;
        var third=num1;
    }
    console.log("Sorted:"+first,+second,+third,)
}



