function login(){
	var userName=document.getElementById("username1").value;
	var passWord=document.getElementById("password1").value;

	for(i=0;i<player.length;i++){
		if(userName==player[i].username && passWord==player[i].password){
			window.open("index.html");
			return;

	}

}

alert("Username ili password nije tacan. Pokušajte ponovo.");

}