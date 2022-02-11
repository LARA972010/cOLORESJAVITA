function cambiarEstado()
{
	let lista_parrafos=document.getElementsByTagName("p");
	for(i=0;i<lista_parrafos.length; i++){

		lista_parrafos[i].innerHTML="ROJO";
		lista_parrafos[i].style.color="red";

	}

	let lista_div=document.getElementsByTagName("div");
	for (let i = 0; i < lista_div.length; i++) {

		lista_div[i].innerHTML="VERDE";
		lista_div[i].style.color="green";
		
	}
}
