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


var psychopath = new Audio("sounds/psychopath.mp3");
document.getElementById("psychopath").addEventListener("mouseover", function() {
	this.style.background = 'url("images/reaper_background.png")';
});
document.getElementById("psychopath").addEventListener("mouseout", function() {
	this.style.background = '#0069c0';
});
document.getElementById("psychopath").addEventListener("click",function() {
	psychopath.play();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function spinner(flag = false) {
	if(flag)
	{
		document.getElementById("banner").innerHTML = '<iframe width="700" height="393" src="https://www.youtube.com/embed/fTiV44lff2s" frameborder="0" allowfullscreen></iframe>';
	}
	else
	{
		location.href = 'https://www.youtube.com/watch?v=fTiV44lff2s';
		
	}
}

function any_link(flag = false) {
	if(flag)
	{
		document.getElementById("banner").innerHTML = '<iframe width="700" height="393" src="https://www.youtube.com/embed/' +flag+'" frameborder="0" allowfullscreen></iframe>';
	}
	else
	{
		alert("TYPE A CODE OF A VIDEO. Example - fTiV44lff2s");
		
	}
}

function dinoflask(flag = false) {
	if(flag)
	{
		document.getElementById("banner").innerHTML = '<iframe width="700" height="393" src="https://www.youtube.com/embed/RMDItOwN_SU" frameborder="0" allowfullscreen></iframe>';
	}
	else
	{
		location.href = 'https://www.youtube.com/watch?v=RMDItOwN_SU';
	}
}



function twitch(name = "perewodcik") {
	document.getElementById("banner").innerHTML = '<iframe  src="https://player.twitch.tv/?channel=' + name + '" frameborder="0" allowfullscreen="true" scrolling="no" height="426" width="700"></iframe>';
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var credits;
var bastions;
var genjis;
var meis;
var bastion_cost = 20;
var genji_cost = 100;
var mei_cost = 250;
var bastion_sound = new  Audio("sounds/bastion.mp3");
var genji_sound = new Audio("sounds/genji.ogg");
var mei_sound = new Audio("sounds/mei.mp3");

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
	if(credits >= bastion_cost + bastion_cost * bastions)
	{
		bastion_sound.play();
		credits = credits - bastion_cost * (bastions - -1);
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
	if(credits >= genji_cost + genji_cost * genjis)
	{
		genji_sound.play();
		credits = credits - genji_cost * (genjis - -1);
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
	if(credits >= mei_cost + mei_cost * meis)
	{
		mei_sound.play();
		credits = credits - mei_cost * (meis - -1);
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
	document.getElementById('credits').innerHTML = "credits:  <br>" + credits;
	document.getElementById('have_bastion').innerHTML = bastions;
	document.getElementById('have_genji').innerHTML = genjis;
	document.getElementById('have_mei_help').innerHTML = meis;
	document.getElementById('buy_bastion').innerHTML = bastion_cost * (bastions - -1) + "  C";
	document.getElementById('buy_genji').innerHTML = genji_cost * (genjis - -1) + "  C";
	document.getElementById('buy_mei_help').innerHTML = mei_cost * (meis - -1) + "  C";
}

