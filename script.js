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

function sendEmail() {
    const subject = document.getElementById("subjectInput").value;
    const email = "nver9383@gmail.com"; 
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_blank');
}
