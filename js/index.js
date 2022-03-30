
window.onscroll = function () {
    if(scrollY > 150) {
        document.getElementById("top").style.display = "block"; 
    }else{
        document.getElementById("top").style.display = "none"; 
    }

}
document.getElementById("top").onclick = function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
