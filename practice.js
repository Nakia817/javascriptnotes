var body = document.getElementById('practice')
var button = document.getElementById('Nakia')
button.onclick=function(){
    if(body.className=='black'){
    body.className='white';
    button.className='black'
}
else{
    body.className='black';
    button.className='white'
}
}