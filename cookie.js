var credits;
var bastions;
var genjis;
var meis;

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    credits = getCookie("credits");
	bastions = getCookie("bastions");
	genjis = getCookie("genjis");
	meis = getCookie("meis");
    if (credits != "") {
		update();		
        alert("You have " + credits + " credits");
    } 

	update();
}

document.getElementById("click").addEventListener("click", function() {
	credits = credits - -1*bastions - -2*genjis - -3*meis;
	update();
	setCookie("credits", credits, 60);
});

document.getElementById("buy_bastion").addEventListener("click", function() {
	if(credits >= 20)
	{
		credits = credits - 20;
		bastions++;
		update();	
		setCookie("credits", credits, 60);
	    setCookie("bastions",bastions,60);
	}
	else
	{
		alert("You do not have enough credits");
	}
	
});

document.getElementById("buy_genji").addEventListener("click", function() {
	if(credits >= 100)
	{
		credits = credits - 100;
		genjis++;
		update();	
		setCookie("credits", credits, 60);
	    setCookie("genjis",genjis,60);
	}
	else
	{
		alert("You do not have enough credits");
	}
	
});

document.getElementById("buy_mei").addEventListener("click", function() {
	if(credits >= 250)
	{
		credits = credits - 250;
		meis++;
		update();	
		setCookie("credits", credits, 60);
	    setCookie("meis",meis,60);
	}
	else
	{
		alert("You do not have enough credits");
	}
	
});


function update(){
	document.getElementById('credits').innerHTML = "credits: " + credits;
	document.getElementById('have_bastion').innerHTML = bastions;
	document.getElementById('have_genji').innerHTML = genjis;
	document.getElementById('have_mei_help').innerHTML = meis;
}


