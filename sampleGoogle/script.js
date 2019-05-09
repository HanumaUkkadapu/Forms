
const root = document.documentElement;
const themeBtns = document.querySelectorAll('.colorlist button');

themeBtns.forEach((btn) => {
  btn.addEventListener('click', handleThemeUpdate);
});

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'purple': 
      root.style.setProperty('--header--backgroundcolor', 'hsl(263, 55%, 47%)');
			root.style.setProperty('--form--bordertop--color', 'hsl(262, 70%, 32%)');
      break;
    case 'green':
    	root.style.setProperty('--header--backgroundcolor', 'hsl(150, 74%, 35%)');
			root.style.setProperty('--form--bordertop--color', 'hsl(150, 100%, 25%)');
      break;
    case 'orange':
      root.style.setProperty('--header--backgroundcolor', 'hsl(35, 97%, 51%)');
			root.style.setProperty('--form--bordertop--color', 'hsl(34, 100%, 40%)');
      break;
  }
}

function coloritems(){
	var x = document.getElementById('colorlist');
	var y = document.getElementById('fabicon');
	if(x.style.display === 'none'){
		x.style.display = 'block';
		y.classList.remove('fa-palette');
		y.classList.add('fa-times');
	}
	else{
		x.style.display = 'none';
		y.classList.remove('fa-times');
		y.classList.add('fa-palette');
		defaultHeaderColor();
	}
}

function defaultHeaderColor(){
	root.style.setProperty('--header--backgroundcolor', '#673A');
	root.style.setProperty('--form--bordertop--color', '#674');
}

var s = [root.clientWidth, root.clientHeight];
var foot1 = document.getElementById('footer-element');
foot1.innerHTML = s[0]; //for printing for the first time
function sizeCheck(){
	var snew = [root.clientWidth, root.clientHeight];
	if(s[0] != snew[0]){
		foot1.innerHTML = snew[0];
	}
}
setInterval(sizeCheck,10);

