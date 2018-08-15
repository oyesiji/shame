function shout(){
	alert("it works"+$( "#hello" ).val());
	
	 var n = $( "#hello" ).val().charCodeAt(0);
	 alert(n);
}