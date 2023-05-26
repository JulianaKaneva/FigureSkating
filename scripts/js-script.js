function superClick(el){
	el.style.background='yellow';
	el.style.color='black';
}

function changeDisplay(id){
	let el = document.getElementById(id);
	state = el.style.display; 
    if (state == '') el.style.display='none'; 
    else el.style.display = ''; 
}

