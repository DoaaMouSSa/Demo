function changeText(){
    let str='Proin quis rutrum eros. Quisque pellentesque elementum pellentesque. Aenean tincidunt turpis sed eleifend egestas. Mauris tristique porta ultricies. Mauris in turpis placerat, tempus eros sed, suscipit sem. Proin convallis, nulla in tempor rhoncus, magna risus laoreet metus, non rutrum nunc est luctus metus. Suspendisse eget massa elit. Duis sed leo eleifend, rutrum ex non, rhoncus orci. Praesent ac iaculis ante. Phasellus dapibus nunc maximus orci mollis lobortis. Nam lorem tellus, dictum commodo convallis non, fermentum quis magna. Sed facilisis quis ex eu imperdiet.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus sodales mauris. Praesent vel erat vel nisl convallis pulvinar. Nunc et efficitur nunc. Ut orci leo, bibendum id nunc in, faucibus vehicula risus. Integer at eros eget massa posuere pulvinar eu sit amet lectus. Curabitur imperdiet ultrices venenatis. Pellentesque tincidunt.';
    document.getElementById('text').innerHTML=str;}
function changeColor(){
    document.getElementById('text').style.color='red';
}
function changeFont(){
    document.getElementById('text').style.fontSize='25px';
}
function changeBorder(){
    document.getElementById('box').style.borderBlockColor='black';
}
function showText(){
    document.getElementById('text').style.display='block';
}
function hideText(){
    document.getElementById('text').style.display='none';
}
function writeHeading(){
    document.write('<h1>practise javascript</h1>')
}
function showAlert(){
alert('Welcome Javascript')}
function tryConsole(){
    console.log(9+10)}
    function calculate1(){
        var result=(2 * 10)/100;
        alert('= '+result)
    }
    function calculate2(){
        var result=(10/2 * 5 /12 + 20)
        document.write(result);
    }
    function calculate3(){
        var result=(5*45 /58 + 100 -10)
        document.getElementById('result').innerHTML=result;
    }
    function displayObject(){
        const obj={
            
            name :'Car',
             model:'12A' ,
              type:'Car15' ,
               year:1990,
               getInfo:function(){
                return "Name is: "+obj.name +"\nModel is: " +obj.model
               }
        }
        document.getElementById('object').innerHTML=obj.getInfo();
    }
    function slice(){
        var originalText=document.getElementById('slicedText').innerHTML;
        var newText=originalText.slice(11,15);
        document.getElementById('slicedText').innerHTML=newText;
    }
    function subString(){
        var originalText=document.getElementById('subText').innerHTML;
        var newText=originalText.slice(7,15);
        document.getElementById('subText').innerHTML=newText;
    }