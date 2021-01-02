function bgMuda (){
    if(this.scrollY > this.innerHeight/2) {
    document.body.classList.add('bg-ativado');
}else{
    document.body.classList.remove('bg-ativado');
}
}

window.addEventListener('scroll', bgMuda);
