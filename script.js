document.getElementById('openmenu').onclick = function() {
  document.getElementById('menu').style='display: flex;'
}
document.getElementById('x').onclick = function() {
  document.getElementById('menu').style='display: none;'
}


var images = 0
document.getElementById('next').onclick = function() {
  images++
 
    
    document.getElementById('image').style='background-image: url(image'+images+'.jpg);'
    if (images == 28) {
      images = 0
    }

}
document.getElementById('past').onclick = function() {
  images--
    if (images < 1) {
      images = 28
    } 
    document.getElementById('image').style='background-image: url(image'+images+'.jpg);'

}

