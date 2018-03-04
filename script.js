function changeImage() {
	
	console.log(document.getElementById("characters").src);
	
	if (document.getElementById("characters").getAttribute("src") === 
	"images/Characters-01.png")
		{
			document.getElementById("characters").src = "images/Characters-02.png"
		}
	else if 
		(document.getElementById("characters").getAttribute("src") === "images/Characters-02.png") 
	{
		document.getElementById("characters").src = "images/Characters-03.png"
			
		}
	
 else if 
		(document.getElementById("characters").getAttribute("src") === "images/Characters-03.png") 
	{
		document.getElementById("characters").src = "images/Characters-04.png"
			
		}
	
	else if 
		(document.getElementById("characters").getAttribute("src") === "images/Characters-04.png") 
	{
		document.getElementById("characters").src = "images/Characters-05.png"
			
		}
	
	else if 
		(document.getElementById("characters").getAttribute("src") === "images/Characters-05.png") 
	{
		document.getElementById("characters").src = "images/Characters-06.png"
			
		}
	
	
		else if 
		(document.getElementById("characters").getAttribute("src") === "images/Characters-06.png") 
	{
		document.getElementById("characters").src = "images/Characters-01.png"
			
		}
	
}
