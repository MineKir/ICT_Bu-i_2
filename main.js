const icon = document.getElementById('icon');
const sidebar = document.getElementById('sidebar')
document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'icon'){
        icon.classList.remove('active');
        sidebar.classList.remove('active');
    }
}

icon.onclick = function(){
    icon.classList.toggle('active');
    sidebar.classList.toggle('active');

}
let sildes = document.querySelectorAll('.slide');
let index = 0;

function next(){
    sildes[index].classList.remove('active');
    index = (index+1) %sildes.length;
    sildes[index].classList.add('active');
}

function pre(){
    sildes[index].classList.remove('active');
    index = (index-1 + sildes.length) %sildes.length;
    sildes[index].classList.add('active');
}
setInterval(next, 3000);