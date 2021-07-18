let buttonid = document.getElementById('buttonid');
let inputid = document.getElementById('inputid');
let pclass = document.getElementById('pclass');

buttonid.addEventListener('click',function(){
console.log(inputid.value);
inputid.value = "";

for(i=0; i<5;i++){
	let create = document.createElement("button");
	create.innerHTML="click";
	document.body.appendChild(create);
}
})

