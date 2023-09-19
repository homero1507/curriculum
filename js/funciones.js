
var initTemas = new function(){ 
	var tema1 = document.body.childNodes[1].childNodes[1].childNodes[1]; //se obtiene el link de tema 1 del DOM
	var t1text=document.createTextNode("arena");
	tema1.appendChild(t1text);

	var tema2 = document.body.childNodes[1].childNodes[1].childNodes[3]; //se obtiene el link de tema 2 del DOM
	var t2text=document.createTextNode("cielo");
	tema2.appendChild(t2text);

	var tema3 = document.body.childNodes[1].childNodes[1].childNodes[5]; //se obtiene el link de tema 3 del DOM
	var t3text=document.createTextNode("espacio");
	tema3.appendChild(t3text);

	var tema4 = document.body.childNodes[1].childNodes[1].childNodes[7]; //se obtiene el link de tema 4 del DOM
	var t4text=document.createTextNode("madera");
	tema4.appendChild(t4text);
}

//funciones usando jquery
$(document).ready(function(){ 
	$("thead").css("cursor","pointer"); //asigna cursor de mano a lo titulos secundarios
	$("thead").css("border","1px solid blue"); //coloca borde sobre los tituoos secundarios
	$("tbody:not(:first)").toggleClass('ocultar');	//oculta los cuerpos de las tablas donde esta la información
	$("thead").click(function(){
		$(this).parent().children('tbody').toggleClass('ocultar');}); //funcion que se activa al cliquear sobre los titulos 
	
	$("#tema3").toggleClass('temasSeleccion'); //tema por defecto
																	
	$("#tema1").click(function(){
		$("#linkestilo").attr("href", "css/estiloArena.css");
		$(this).toggleClass('temasSeleccion');
		$("a:not(#tema1)").removeClass('temasSeleccion');
		}); //funcion que se activa al cliquear sobre los temas para cambiar la hoja de estilo.

	$("#tema2").click(function(){
		$("#linkestilo").attr("href", "css/estiloCielo.css");
		$(this).toggleClass('temasSeleccion');
		$("a:not(#tema2)").removeClass('temasSeleccion');
		}); //funcion que se activa al cliquear sobre los temas para cambiar la hoja de estilo.

	$("#tema3").click(function(){
		$("#linkestilo").attr("href", "css/estiloEspacio.css");
		$(this).toggleClass('temasSeleccion');
		$("a:not(#tema3)").removeClass('temasSeleccion');
		}); //funcion que se activa al cliquear sobre los temas para cambiar la hoja de estilo.

	$("#tema4").click(function(){
		$("#linkestilo").attr("href", "css/estiloMadera.css");
		$(this).toggleClass('temasSeleccion');
		$("a:not(#tema4)").removeClass('temasSeleccion');
		}); //funcion que se activa al cliquear sobre los temas para cambiar la hoja de estilo.
																

});   
