var fireplaceVideo;
var rainAudio;
var musicAudio;
var isiPad;

function setupAssets() {
	fireplaceVideo = document.getElementById("fireplace");
	rainAudio = document.getElementById("rain");
	musicAudio = document.getElementById("music");
}

function toggleMedia(media) {
	if (media.paused) {
		media.play();
	} else {
		media.pause();
	}
}

function playMusic() {
	musicAudio.play();
}

function startShow() {
	// fireplaceVideo.play();
	rainAudio.play();
	setTimeout("playMusic()", 10000);
}

window.onload = function() {
	isiPad = navigator.userAgent.match(/iPad/i) != null;
	setupAssets();
	if (isiPad) {
		// document.getElementById("togglerain").onclick = function() {
		// 	toggleMedia(rainAudio);
		// };
		// document.getElementById("togglemusic").onclick = function() {
		// 	toggleMedia(musicAudio);
		// };
	} else {
		if (fireplaceVideo.webkitEnterFullScreen != undefined) {
			fireplaceVideo.onclick = function(){
					this.webkitEnterFullScreen();
			}
		}
		startShow();
	}
}
