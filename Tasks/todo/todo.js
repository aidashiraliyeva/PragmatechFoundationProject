let submitAdd = document.getElementById('submitA');
let ptag = document.getElementById('ptag');
let inputT = document.getElementById('inputT');
let submitC = document.getElementById('submitC');

submitAdd.addEventListener('click',function(){
	let par = document.createElement('p');
	ptag.appendChild(par);
	par.innerHTML = inputT.value;
	inputT.value = "";
});

submitC.addEventListener('click',function(){
	par.remove();
})

