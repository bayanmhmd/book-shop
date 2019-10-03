var name=prompt("WHAT IS YOUR NAME?");
alert("Thank you for visit us"+name);
function myFunction() {
  // confirm("Press a button!");
}
// myFunction();
var month =prompt("Enter the month of the year") ;
var result ;
if (month==='december' || month=== 'janyary'||month ==='february'){
  result = 'nice winter';
}else if( month=== 'march'|| month=== 'april'|| month==='may'){
  result = 'nice spring';
}else if ( month=== 'june'|| month=== 'august'|| month==='july'){
  result='nice summer';
}else if ( month=== 'november'|| month==='october' || month=== 'august'){
  result= 'nice autnum';}
  else{
   result='nice year';
  }
document .write( ' <h3>' +result + '</h3>');
console.log('hi');
var calculate=prompt ("3*4=");
while (calculate!= 12) {
  calculate = prompt ("Sorry incorrect awnswer");
}
if (calculate == 12) {
alert ("this is true");
}
var hello="hello";
var i;
for (i= 1; i<5 ; i=i+1 ){
  // console.log (i++);
  document.write('<p>'+ hello +'</p>');}
