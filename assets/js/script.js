   var realizacje = document.getElementById('container-realizacje'),
    realizacjeLists = realizacje.children,
    realizacjeLength = realizacjeLists.length;


    
function showRealizacje() {
 
    
    // function to check exists class
    var tab = [];

    for(var i=0; i<realizacjeLength; i++) {
        var los = Math.floor(1+Math.random()*9);
        
        if(tab.indexOf(los) == -1) {
            tab.push(los);
           realizacjeLists[i].innerHTML = '<img src="img/realizacje/'+los+'.png" class="img-responsive show-anime" alt="">'; 
        } else {
            i--;
        }   
    }  
}

function hideRealizacje() {
    for(var j=0; j<realizacjeLength; j++) {

    realizacjeLists[j].children[0].classList.remove("show-anime");
    realizacjeLists[j].children[0].classList.add("hide-anime");
}  
} 
showRealizacje();


setInterval(function() {
    setTimeout(hideRealizacje, 1000);
    setTimeout(showRealizacje, 2100);
},5000);






// funkcja do napisania na jutro
//var cialo = document.querySelector('.menu-bg');
//window.addEventListener('scroll', function() {
//    console.log(document.body.scrollTop);
//    
//    var licz = document.body.scrollTop / 3;
//    cialo.style.marginTop = ''+licz+'px';
//    
//})






