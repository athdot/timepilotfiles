function playAudio(src){
	var audio = new Audio(src);
	audio.play();
}

function bullet(x,y,speedX,speedY,col){
	var speedX = speedX/100;
	var speedY = speedY/100;
	var game = document.getElementById("gameframe");
	var gamectx = game.getContext("2d");
	gamectx.fillStyle = col;
	gamectx.fillRect(x,y,5,5);
}

function shoot(one,two,three,four,five){
	var innergame = document.getElementById("innergame");
	var innergamectx = innergame.getContext("2d");
    //clear gameScreen
  innergamectx.fillStyle = gameback;
  innergamectx.fillRect(0,0,innergame.width,innergame.height);
  
	innergamectx.fillStyle = five;
	innergamectx.fillRect(one,two,5,5);
  var six = one+three;
  var seven = two+four;
	return {six, seven};
}

function changeCookie(strng){
  setCookie("highscore", strng, 30);

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
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
    var user = getCookie("highscore");
    if (user != "") {
        //insert highscore
        user = user;
    } else {
        //Insert hiscore
       user = "none";
if (user != "" && user != null) {
           setCookie("highscore", user, 30);
       }
    }
		return user;
}

function write(inp,x,y,color) {
	var gamectx = game.getContext("2d");
	gamectx.font = "30px ArcadeClassic";
	gamectx.fillStyle = color;
	gamectx.fillText(inp,x,y);
}
