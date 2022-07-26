console.log("scrooll inicio ")


//animação no scrooll da pagina
function scrooll() {
	console.log(" função scrool")
	
	 const observer = new IntersectionObserver(itens=>{
	  	
	 Array.from(itens).forEach(item =>{
	 	if(item.intersectionRatio >=0.5){
	 		
	 		item.target.classList.add("anima")
	 	}
	     
	  })
	})
		
	Array.from(document.querySelectorAll("#animado")).forEach((img,index)=>{
	  		observer.observe(img)
		
	})
}

document.addEventListener("scroll", ()=>{
		scrooll()
})








