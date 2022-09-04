		alert ("Iniciaremos o investigatório sobre o terrível assassinato ocorrido em Twin Peaks. Responda apenas 'sim' ou 'não' para cada uma das perguntas.");

var pergunta1;

var pergunta2; 
			
var pergunta3;
			
var pergunta4;
			
var pergunta5;
			

pergunta1 = prompt("Você conhecia a vítima?");
	
pergunta2 = prompt("Você estava nos arredores do local do crime?");
	
pergunta3 = prompt("Você tem algum álibi?");

pergunta4 = prompt("Você já brigou por qualquer motivo com a vítima?");		

pergunta5 = prompt("Você já havia cometido algum crime semelhante antes?");
  
    if(pergunta3 == "sim"){
      	alert("Você foi considerado inocente.");
  }
  	else if ((pergunta1=="sim")&&(pergunta2=="sim")&&(pergunta4=="sim")&&(pergunta3=="não")){
  		alert("Você foi considerado culpado.");
  }
 	else if ((pergunta2=="sim")&&(pergunta5=="sim")&&(pergunta3=="não")){
  		alert("Você foi considerado culpado.");
  }
  	else if ((pergunta1=="sim")&&(pergunta2=="sim")&&(pergunta3=="não")&&(pergunta4=="não")&&(pergunta5=="não")){
  		alert("Você foi considerado muito suspeito.");
  }
    else if ((pergunta1=="não")&&(pergunta2=="não")&&(pergunta3=="não")&&(pergunta5=="sim")){
  		alert("Você foi considerado muito suspeito.");
  }
    else if ((pergunta1=="sim")&&(pergunta2=="sim")||(pergunta1=="sim")&&(pergunta4=="sim")){
  		alert("Você foi considerado muito suspeito.");
  }
 	else{
  	alert("Você foi considerado pouco suspeito.")
  } 