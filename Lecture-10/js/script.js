function slice(){
        var originalText=document.getElementById('slicedText').innerHTML;
        var newText=originalText.slice(1,5);
        document.getElementById('slicedText').innerHTML=newText;
    }
    function subString(){
        var originalText=document.getElementById('subText').innerHTML;
        var newText=originalText.substring(2,6);
        document.getElementById('subText').innerHTML=newText;
    }
    //error
    function subStr(){
        var originalText=document.getElementById('subStrText').innerHTML;
        var newText=originalText.subStr(1,5);
        document.getElementById('subStrText').innerHTML=newText;
    }
    //end error
    function replaceStr(){
        var originalText=document.getElementById('replaceText').innerHTML;
        var newText=originalText.replace("Hello","Welcome");
        document.getElementById('replaceText').innerHTML=newText;
    }
    function searchStr(){
        var originalText=document.getElementById('originalSearchText').innerHTML;
        var position=originalText.search("Is");
        document.getElementById('searchText').innerHTML=position;
    }
    function matchStr(){
        var originalText=document.getElementById('originalMatchText').innerHTML;
        var position=originalText.match("Programming");
        document.getElementById('matchText').innerHTML=position;
    }
    function lastIndexStr(){
        var originalText=document.getElementById('originalLastIndexText').innerHTML;
        var position=originalText.lastIndexOf("Language!");
        document.getElementById('lastIndexText').innerHTML=position;
    }
    function printVariable(){
        var text="Hollo Worls";
        text.pri
    }
    function printVar(){
        var text="Hollo World";
        console.log(text)
    }
    function checkNumber(){
    var number=document.getElementById('number').innerHTML;
if (number > 0) {
    alert("The number is positive");
}
else if (number == 0) {
    alert("The number is 0");
}
else {
    alert("The number is negative");
}
    }
    function checkFruit(){
// multiple case switch program
var fruit=document.getElementById('fruit').innerHTML;
switch(fruit) {
    case 'apple':
        alert('fruit is apple');
        break;
    case 'mango':
        alert('fruit is mango');
        break;
    case 'pineapple':
        alert('fruit is pineapple');
        break;
    default:
        alert('not found');
        break;
}
        }
        function displayArrayOfStudents(){
            const students=['doaa','ahmed','hala','mohamed']
            for(var i=0;i<students.length;i++) 
                document.getElementById('stdText').innerHTML += students[i]+' , ';
        }
        function displaySetOfStudents(){

        const stds = new Set();

// Add Values to the Set
stds.add("alaa");
stds.add("fahmy");
stds.add("hatem");
for (const std of stds) {
    document.getElementById('studentText').innerHTML += std+' , ';
}
        }