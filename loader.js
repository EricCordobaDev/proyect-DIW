window.onload = load;

function load(){
     let progress = document.getElementById('progreso');
     let value = 10;
     setInterval(() => {
       if (value < 100) {
         value += 1;
         progress.value = value;
       } else {
         window.location.href = 'news.html';
       }
     }, 100);
}
