
function Inicio()
{
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/Inicio.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
}


function Descripcion()
{
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/descripcion.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
}

function Documentos()
{
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/documentacion.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
}

function Descargar()
{
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/descargar.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
}

function Contacto()
{
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/contacto.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
}

function buscador()
{
	var xmlhttp=false;
	try
	{
		xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e1)
	{
		try
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e2)
		{
			xmlhttp=false;
		}
	}
	
	if(!xmlhttp & typeof XMLHttpRequest!='undefined')
	{
		xmlhttp=new XMLHttpRequest();
	}
	return xmlhttp;
}


function interface_contador(){ 

   	$archivo = "contador.txt"; 
   	$info = array(); 

   	//comprobar si existe el archivo 
   	if (file_exists($archivo)){ 
      	 // abrir archivo de texto y introducir los datos en el array $info 
      	 $fp = fopen($archivo,"r"); 
      	 $contador = fgets($fp, 26); 
      	 $info = explode(" ",$contador); 
      	 fclose($fp); 

      	 // poner nombre a cada dato 
      	 $mes_actual = date("m"); 
      	 $mes_ultimo = $info[0]; 
      	 $visitas_mes = $info[1]; 
      	 $visitas_totales = $info[2]; 
   	}else{ 
      	 // inicializar valores 
      	 $mes_actual = date("m"); 
      	 $mes_ultimo = "0"; 
      	 $visitas_mes = 0; 
      	 $visitas_totales = 0; 
   	} 

   	// incrementar las visitas del mes según si estamos en el mismo 
   	// mes o no que el de la ultima visita, o ponerlas a cero 
   	if ($mes_actual==$mes_ultimo){ 
      	 $visitas_mes++; 
   	}else{ 
      	 $visitas_mes=1; 
   	} 
   	$visitas_totales++; 

   	// reconstruir el array con los nuevos valores 
   	$info[0] = $mes_actual; 
   	$info[1] = $visitas_mes; 
   	$info[2] = $visitas_totales; 

   	// grabar los valores en el archivo de nuevo 
   	$info_nueva = implode(" ",$info); 
   	$fp = fopen($archivo,"w+"); 
   	fwrite($fp, $info_nueva, 26); 
   	fclose($fp); 

   	// devolver el array 
   	return $info; 
}


function mueveReloj(){ 
   	momentoActual = new Date() 
   	hora = momentoActual.getHours() 
   	minuto = momentoActual.getMinutes() 
   	segundo = momentoActual.getSeconds() 

   	str_segundo = new String (segundo) 
   	if (str_segundo.length == 1) 
      	 segundo = "0" + segundo 

   	str_minuto = new String (minuto) 
   	if (str_minuto.length == 1) 
      	 minuto = "0" + minuto 

   	str_hora = new String (hora) 
   	if (str_hora.length == 1) 
      	 hora = "0" + hora 

   	horaImprimible = hora + " : " + minuto + " : " + segundo 

   	document.form_reloj.reloj.value = horaImprimible 

   	setTimeout("mueveReloj()",1000) 
} 


function noencontrado(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/noencontrado.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
	
function simulacion(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz1.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
	function interfaz2(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz2.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
		function interfaz3(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz3.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
		function interfaz4(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz4.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
		function interfaz5(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz5.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
		function interfaz6(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz6.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
		function interfaz7(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz7.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
		function interfaz8(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz8.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
		function interfaz9(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz9.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
		function interfaz10(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz10.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	
	function interfaz11(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz11.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}
	function interfaz12(){
	
	c=document.getElementById('principal2');
	ajax=buscador();
	ajax.open("GET","paginas/interfaz12.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
	}