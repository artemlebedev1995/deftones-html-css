document.querySelector('.sections')
     .forEach( el => el.addEventListener('click', imageshow) )
	
function imageshow() {
	document.querySelector('.images').style.animation = 'images 1s 1 forwards';
	document.querySelector('.music').style.animation = 'gomusic 1s 1 forwards linear';
	document.querySelector('.music').style.display = 'block';
}