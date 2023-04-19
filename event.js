// var body = document.getElementById('body')
// var button =document.getElementById('button')
// button.onclick =function(){
//     if (body.className=='black'){
//         body.className='white';
//         button.className='black'
//     }
//     else{
//         body.className='black';
//         button.className='white'
//         }
// }

// var study = document.getElementById('study')
// var practice =document.getElementById('practice')
// practice.onclick =function(){
//     if (study.className=='blue'){
//         study.className='blueviolet';
//         practice.className='blue'
//     }
//     else{
//         study.className='blue';
//         practice.className='blueviolet'
//     }

// }


//This code is used for eventlistener code inside a eventlistner.html
document.getElementById('data').addEventListener('click',abc)
function abc(){
    document.getElementById('data').style.background='yellow'
}