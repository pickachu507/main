var sudden_sound = new Audio("sounds/sudden_sound.mp3");
document.getElementById("logo").addEventListener("click",function() {
	sudden_sound.play();
});


var ben_brode_1 = new Audio('sounds/ben_brode_1.mp3');
document.getElementById("ben_brode_1").addEventListener("mouseover", function() {
	this.style.background = 'url("images/ben_brode_background.png")';
});
document.getElementById("ben_brode_1").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("ben_brode_1").addEventListener("click",function() {
	ben_brode_1.play();
});


var ben_brode_2 = new Audio('sounds/ben_brode_2.mp3');
document.getElementById("ben_brode_2").addEventListener("mouseover", function() {
	this.style.background = 'url("images/ben_brode_background.png")';
});
document.getElementById("ben_brode_2").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("ben_brode_2").addEventListener("click",function() {
	ben_brode_2.play();
});


var ben_brode_3 = new Audio('sounds/ben_brode_3.mp3');
document.getElementById("ben_brode_3").addEventListener("mouseover", function() {
	this.style.background = 'url("images/ben_brode_background.png")';
});
document.getElementById("ben_brode_3").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("ben_brode_3").addEventListener("click",function() {
	ben_brode_3.play();
});


var range_beam = new Audio('sounds/range_beam.mp3');
document.getElementById("range_beam").addEventListener("mouseover", function() {
	this.style.background = 'url("images/jeph_background.png")';
});
document.getElementById("range_beam").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("range_beam").addEventListener("click",function() {
	range_beam.play();
});


var genji_gachi = new Audio("sounds/genji_gachi.mp3");
document.getElementById("genji").addEventListener("mouseover", function() {
	this.style.background = 'url("images/genji_background.png")';
});
document.getElementById("genji").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("genji").addEventListener("click",function() {
	genji_gachi.play();
});

var mei = new Audio('sounds/a-mei-zing.mp3');
document.getElementById("mei").addEventListener("mouseover", function() {
	this.style.background = 'url("images/mei_background.png")';
});
document.getElementById("mei").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("mei").addEventListener("click",function() {
	mei.play();
});


var leeroy = new Audio("sounds/leeroy.mp3");
document.getElementById("leeroy").addEventListener("mouseover", function() {
	this.style.background = 'url("images/leeroy_background.png")';
});
document.getElementById("leeroy").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("leeroy").addEventListener("click",function() {
	leeroy.play();
});


var pretty_good = new Audio("sounds/pretty_good.mp3");
document.getElementById("pretty_good").addEventListener("mouseover", function() {
	this.style.background = 'url("images/idubbbz_background.png")';
});
document.getElementById("pretty_good").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("pretty_good").addEventListener("click",function() {
	pretty_good.play();
});


var dr_boom = new Audio("sounds/dr_boom.mp3");
document.getElementById("dr_boom").addEventListener("mouseover", function() {
	this.style.background = 'url("images/boom_background.png")';
});
document.getElementById("dr_boom").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("dr_boom").addEventListener("click",function() {
	dr_boom.play();
});


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
    if(getCookie("credits") == "NaN")
	{
		setCookie("credits", 0,60);
	}
	if(getCookie("bastions") == "NaN")
	{
		setCookie("bastions",0,60);
    }
	if(getCookie("genjis") == "NaN")
	{
		setCookie("genjis", 0, 60);
	}
	if(getCookie("meis") == "NaN")
	{
		setCookie("meis", 0, 60);
	}
	if(getCookie("meis") == "undefined")
	{
		setCookie("meis", 0, 60);
	}
	if(getCookie("genjis") == "undefined")
	{
		setCookie("genjis", 0, 60);
	}
	if(getCookie("bastions") == "undefined")
	{
		setCookie("bastions",0,60);
    }
	credits = parseInt(getCookie("credits"));
	bastions = parseInt(getCookie("bastions"));
	genjis = parseInt(getCookie("genjis"));
	meis = parseInt(getCookie("meis"));
	update();
}

function refresh(){
	setCookie("credits",0,60);
	setCookie("bastions",0,60);
	setCookie("genjis", 0, 60);
	setCookie("meis", 0, 60);
	credits = parseInt(getCookie("credits"));
	bastions = parseInt(getCookie("bastions"));
	genjis = parseInt(getCookie("genjis"));
	meis = parseInt(getCookie("meis"));
	update();
}

document.getElementById("click").addEventListener("click", function() {
	if (getCookie("credits") == "NaN")
	{
		refresh();
    }
	credits = credits - -1 - -1*bastions - -2*genjis - -3*meis;
	update();
	setCookie("credits", credits, 60);
});

document.getElementById("buy_bastion").addEventListener("click", function() {
	if(credits >= 20*bastions;
	{
		credits = credits - 20*bastions;
		bastions++;	
		setCookie("credits", credits, 60);
	    setCookie("bastions",bastions,60);
		update();		
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
	setCookie("credits", credits, 60);
	setCookie("bastions",bastions,60);
	setCookie("genjis",genjis,60);
	setCookie("meis",meis,60);	
	document.getElementById('credits').innerHTML = "credits: " + credits;
	document.getElementById('have_bastion').innerHTML = bastions;
	document.getElementById('have_genji').innerHTML = genjis;
	document.getElementById('have_mei_help').innerHTML = meis;
	document.getElementById('buy_bastion').innerHTML = 20*bastions + "  C";
	document.getElementById('buy_genji').innerHTML = genji_cost + "  C";
	document.getElementById('buy_mei_help').innerHTML = mei_cost + "  C";
}

