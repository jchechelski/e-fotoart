

function randomRealizacje() {
  var realizacje = document.getElementById('container-realizacje'),
    realizacjeLists = realizacje.children,
    realizacjeLength = realizacjeLists.length;

var tab = [];

for(var i=0; i<realizacjeLength; i++) {
    los = Math.floor(1+Math.random()*6);

    if(tab.indexOf(los) == -1) {
        tab.push(los);
       realizacjeLists[i].innerHTML = '<img src="img/realizacje/'+los+'.png" class="img-responsive" alt="">'; 
    } else {
        i--;
    }   
}  
}

randomRealizacje();

setInterval(randomRealizacje, 2000);



// funkcja do napisania na jutro
//var cialo = document.querySelector('.menu-bg');
//window.addEventListener('scroll', function() {
//    console.log(document.body.scrollTop);
//    
//    var licz = document.body.scrollTop / 3;
//    cialo.style.marginTop = ''+licz+'px';
//    
//})






