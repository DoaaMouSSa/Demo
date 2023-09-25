function checkValues(){
    var height=document.getElementById("heightInput").value;
    var weight=document.getElementById("weightInput").value;
   // console.log(height);
    //console.log(weight);
    if(height=="" || weight=="")
    {
        document.getElementById("warningMsg").innerText="please,Fill all information"
    }else{
        if(height < 0 || weight <0)
        {
            document.getElementById("warningMsg").innerText="please,Fill all information with positve numbers"
        }else{
            calculate(height,weight);
        }
    }
}
function clearWarningMsg(){
    document.getElementById("warningMsg").innerText="";
}
function calculate(h,w){
    clearWarningMsg();
    //from m to cm
    h /=100;
   var bmi = (w/(h*h)).toFixed(2);
   document.getElementById('infoNumber').innerHTML=bmi;  
   printMsg(bmi);
}
function printMsg(bmi){
    var message="";
    if(bmi <= 18.5) { message="You are underweight";}
    else if(bmi >18.5 && bmi <= 25) {message="that's healthy weight";}
    else if(bmi >25 && bmi <= 30) {message="You are overweight";}
    else if(bmi > 30){ message="that's obesity weight";}
    else {message="the result is not in the range!!";}
    document.getElementById('infoMsg').innerHTML=message;  

}