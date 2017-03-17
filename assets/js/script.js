

function randomRealizacje() {
  
}

//randomRealizacje();


function showRealizacje() {
    var realizacje = document.getElementById('container-realizacje'),
    realizacjeLists = realizacje.children,
    realizacjeLength = realizacjeLists.length;

var tab = [];
    
    
    // function to check exists class
    

for(var i=0; i<realizacjeLength; i++) {
    los = Math.floor(1+Math.random()*6);

    if(tab.indexOf(los) == -1) {
        tab.push(los);
        
       realizacjeLists[i].innerHTML = '<img src="img/realizacje/'+los+'.png" class="img-responsive show-anime" alt="">'; 
    } else {
        i--;
    }   
}  
}

function hideRealizacje() {
      var realizacje = document.getElementById('container-realizacje'),
    realizacjeLists = realizacje.children,
    realizacjeLength = realizacjeLists.length;

var tab = [];
    
    
 

for(var i=0; i<realizacjeLength; i++) {
    los = Math.floor(1+Math.random()*6);

    if(tab.indexOf(los) == -1) {
        tab.push(los);

       realizacjeLists[i].innerHTML = '<img src="img/realizacje/'+los+'.png" class="img-responsive hide-anime" alt="">'; 
    } else {
        i--;
    }   
}  
} 
showRealizacje();
setInterval(function() {
    
    setTimeout(hideRealizacje, 3000);
    setTimeout(showRealizacje, 6000);
    
},15000)

//setInterval(hideRealizacje, 4000);
//setInterval(showRealizacje, 5000);



// funkcja do napisania na jutro
//var cialo = document.querySelector('.menu-bg');
//window.addEventListener('scroll', function() {
//    console.log(document.body.scrollTop);
//    
//    var licz = document.body.scrollTop / 3;
//    cialo.style.marginTop = ''+licz+'px';
//    
//})






