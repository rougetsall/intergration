    var content_box= document.querySelector("#content_box");
    var adm_table= document.querySelector("#content .adm_table th");
  var w=window.innerWidth;
    
	var div =document.createElement("div");
	var img=document.createElement("img");
	content_box.appendChild(div);
if(window.location.href=="http://intranet.supinternet.fr/?action=board&mfrom=ecole" || 
     window.location.href=="http://intranet.supinternet.fr/?action=board" ||
      window.location.href=="http://intranet.supinternet.fr/"){
	document.body.style.backgroundColor="#fff";
    adm_table.style.display="none";
	document.body.style.backgroundImage="none";
	div.className="images";
	div.style.width="300px";
	div.style.height="200px";	
	div.style.marginTop="-700px";
	div.style.marginLeft="90px";
	div.style.borderRadius="15px";
	img.style.width="300px";
	img.style.height="200px";
	img.style.borderRadius="15px";
	img.src ="https://cdn.discordapp.com/attachments/534305227050844160/540521998481358848/corinne-kutz-211251-unsplash.jpg";
	div.appendChild(img);
	
	var planning =document.createElement("div");
	planning.style.width="250px";
	planning.style.height="30px";
	planning.style.backgroundColor="#F6B62E";
	 planning.style.position= "absolute";
	planning.style.marginTop="-120px";
	planning.style.marginLeft="20px";
	planning.style.borderRadius="15px";
	var a = document.createElement('a');
	a.innerHTML="Planning Hebdomadaire";
	a.style.color="#fff";
	a.style.marginLeft="30px";
	a.style.marginTop="5px";
	a.setAttribute('href', '?action=planning_hebdo');
	planning.appendChild(a);
	div.appendChild(planning);
setInterval(function(){
	if (window.innerWidth <= 680) {
		div.style.display="none";
	}
},100)
	
}
if(window.location.href=="http://intranet.supinternet.fr/?action=presence" || 
 window.location.href=="http://intranet.supinternet.fr/?action=qcm"){
	document.body.style.backgroundColor="#fff";
    
	document.body.style.backgroundImage="none";
}


