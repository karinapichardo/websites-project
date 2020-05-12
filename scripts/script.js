 var color = ['#202722', '#e9ffd5', '#8577F5', '#F98E17', '#37c8ae', '#edfd00', '#ffddee', '#37c8ae', '#ffa500', '#ff7373'];
 var i = 0;

 function myButton() {
     var button = document.querySelector("button")
     var body = document.getElementById("random-color")

     button.addEventListener('click', function () {
         i = i < color.length ? ++i : 0;
         body.style.background = color[i];
     })
 }
