function registracija(){

	var regName= document.getElementById("username2").value;
	var regPass= document.getElementById("password2").value;
	var regMail= document.getElementById("email2").value;

	if(regName.length<=15 && regPass.length<=15){

	var user=new Object();
	user.username=regName;
	user.password=regPass;
	user.email=regMail;

	//pravimo objekat i dodjeljujemo .usernameu,.passwordu,.emailu vrijednosti varijabli regName,regPass,regMail

	player.push(user);
	console.log(player);

	}

}