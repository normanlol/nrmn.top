document.getElementById("main").style = "opacity:1.0";

function playSound(file) {
	if (file) {
		document.getElementById("sfx").src = file;
		document.getElementById("sfx").play();
	}
}

function remove() {
	document.getElementById("abButton").removeAttribute("onmouseout");
	document.getElementById("vpButton").removeAttribute("onmouseout");
	document.getElementById("rfButton").removeAttribute("onmouseout");
	document.getElementById("weButton").removeAttribute("onmouseout");
	document.getElementById("gtButton").removeAttribute("onmouseout");
	document.getElementById("twButton").removeAttribute("onmouseout");
	document.getElementById("siButton").removeAttribute("onmouseout");
	document.getElementById("yaButton").removeAttribute("onmouseout");
	document.getElementById("ytButton").removeAttribute("onmouseout");
	document.getElementById("msButton").removeAttribute("onmouseout");
	document.getElementById("arButton").removeAttribute("onmouseout");
}

function goTo(place) {
	if (!place) {
		return;
	} else if (place == 'vp') {
		playSound("4.mp3");
		document.getElementById("main").style = "opacity:0.0";
		remove();
		setTimeout(function() {
			document.getElementById("main").style.display = "none";
			setTimeout(function() {
				window.open("https://n0rmancodes.github.io/vidpolaris", "_self");
			},1140)
		}, 300)
	} else if (place == 'rf') {
		playSound("4.mp3");
		document.getElementById("main").style = "opacity:0.0";
		remove();
		setTimeout(function() {
			document.getElementById("main").style.display = "none";
			window.open("https://n0rmancodes.github.io/riftify", "_self");
		}, 300)
	} else if (place == 'we') {
		playSound("4.mp3");
		remove();
		setTimeout(function() {
			document.getElementById("main").style.display = "none";
			window.open("https://n0rmancodes.github.io/webedit", "_self");
		}, 300)
	} else if (place == 'yv') {
		playSound("4.mp3");
		remove();
		setTimeout(function() {
			document.getElementById("main").style.display = "none";
			window.open("https://n0rmancodes.github.io/yviewer", "_self");
		}, 300)
	} else if (place == 'gt') {
		playSound("4.mp3");
		document.getElementById("main").style = "opacity:0.0";
		remove();
		setTimeout(function() {
			document.getElementById("main").style = "none";
			window.open("https://github.com/n0rmancodes", "_self");
		},1140)
	} else if (place == 'tw') {
		playSound("4.mp3");
		document.getElementById("main").style = "opacity:0.0";
		remove();
		setTimeout(function() {
			document.getElementById("main").style = "none";
			window.open("https://twitter.com/soyboynorman", "_self");
		},1140)
	} else if (place == 'si') {
		playSound("4.mp3");
		document.getElementById("main").style = "opacity:0.0";
		remove();
		setTimeout(function() {
			document.getElementById("main").style = "none";
			window.open("https://n0rmancodes.github.io/simplesearch", "_self");
		},1140)
	} else if (place == 'yt') {
		playSound("4.mp3");
		remove();
		setTimeout(function() {
			document.getElementById("main").style = "none";
			window.open("https://www.youtube.com/channel/UCSDRPx3FX6Va7XkpvNoqY6w", "_self");
		},1140)
	} else if (place == 'ya') {
		playSound("4.mp3");
		document.getElementById("main").style = "opacity:0.0";
		remove();
		setTimeout(function() {
			document.getElementById("main").style = "none";
			window.open("https://www.youtube.com/channel/UCK29JJpL2x-7PezLvNHov8g", "_self");
		},1140)
	} else if (place == 'ar') {
		playSound("4.mp3");
		remove();
		setTimeout(function() {
			document.getElementById("main").style = "none";
			window.open("https://drive.google.com/drive/folders/1WTreyZo-XVTZanJB_sKsx1d6Nji154jw?usp=sharing", "_self");
		},1140)
	} else if (place == 'ms') {
		playSound("4.mp3");
		remove();
		setTimeout(function() {
			document.getElementById("main").style = "none";
			window.open("https://mastodon.online/@norman", "_self");
		},1140)
	} else if (place == 'ab') {
		playSound("3.mp3");
		document.getElementById("main").style = "opacity:0.0";
		remove();
		setTimeout(function() {
			document.getElementById("main").style.display = "none";
			document.getElementById("aboutPage").style.display = "";
			document.getElementById("aboutPage").style = "opacity:1.0";
		},720)
	} else if (place == 'home') {
		playSound("4.mp3");
		document.getElementById("aboutPage").style = "opacity:0.0";
		setTimeout(function() {
			location.reload();
		},1440)
	}
}