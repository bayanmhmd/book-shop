var name=prompt("WHAT IS YOUR NAME?")
alert("Thank you for visit us "+name);
function myFunction() {
  confirm("Press a button!");
}
myFunction()
var job =prompt("Enter your job") ;
var result ;
if (job==='doctor'|job=== 'pharmacist'|job ==='engineer'){
  result = ' your salary more than 500 Jd';
}else if( job=== 'teacher'| job=== 'coach'| job==='government employee'){
  result = 'your salary equil at least 500 Jd';
}else if ( job=== 'factory worker'|job=== 'accountant'| job==='supervisor'){
  result='your salary least than 500 Jd';
}else if ( job=== 'clean worker'|job==='bulit worker' | job=== 'smith'){
  result= 'your salary least than 200 Jd';}
  else{
   result='you are dont have job';
  }
document .write( ' <h3>' +result + '</h3>');
console.log('hi');
var calculate=prompt ("5*7=");
while (calculate!= 35) {
  calculate = prompt ("Sorry incorrect awnswer , 5*7");
}
if (calculate == 35) {
alert ("this is true");
}
    
