let acc = document.getElementsByClassName("acc");

for (let i=0; i<acc.length; i++)
{
	acc[i].onclick=function(){
	this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  };
}

