function changeBg(){
  var header = document.getElementById('header');
  var scrollValue = window.scrollY;
  if(scrollValue < 150){
    header.classList.remove('bgColor');
  }else{
    header.classList.add('bgColor')
  }
}

window.addEventListener('scroll', changeBg);
