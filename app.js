const openbtn = document.querySelector('.open-btn')
const closebtn = document.querySelector('.close-btn')

const wrap=document.querySelectorAll('.wrap')

openbtn.addEventListener('click', function(){
    for(let i=0; i<wrap.length;i++ ){
        wrap[i].classList.add('visible');
    }
})


closebtn.addEventListener('click', function(){
    for(let i=0; i<wrap.length;i++ ){
        wrap[i].classList.remove('visible');
    }
})




















