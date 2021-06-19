let image = document.getElementsByClassName("image");
let imagecount = image.length;
let imagenumber = 0;

images(imagenumber);

function Geri(){
	imagenumber--;
	images(imagenumber);
}
function Ireli(){
	imagenumber++;
	images(imagenumber);
}

function images(imagenum){
	imagenumber = imagenum;
	if(imagenum >= imagecount){
		imagenumber = 0;
	}
	if(imagenum < 0){
		imagenumber = imagecount - 1;

	}
	for(i=0; i<imagecount;i++){
		image[i].style.display="none";
	}
	image[imagenumber].style.display="block";
}