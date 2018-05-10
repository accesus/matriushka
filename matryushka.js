$(document).ready(function() {
	html = document.documentElement.outerHTML;
	cs = checksum(html);
	console.log(cs);
	if (cs=="37fc4a7d") {
	} else {
		$("body").html("").append("<div style='font-family:arial,helvetica;font-size:16px;width:200px;text-align:center;background:red;border:2px solid #ab0000;border-radius:10px;color:#ffffff;padding:10px;'><strong style='font-size:31px;'>ALERTA!</strong><br>This code is a copy!<br><hr>Visit <a href='https://www.sololearn.com/Profile/8355093'><b>VITRUVIAN</b></a> profile<br>to see the original.</div>");
	}
});
function checksum(s) {
	var chk = 0x12345678;
	var len = s.length;
	for (var i = 0; i < len; i++) {
		chk += (s.charCodeAt(i) * (i + 1));
	}
	return (chk & 0xffffffff).toString(16);
}
function create() {
	for (var i=9;i>0;i--) {
		var bg_posX = (i-1)*252;
		var html = "<div class='matryoshkas "+(i==1?"":"inside")+"' id='m_"+i+"' style='display:"+(i>2?"none":"")+";'><div class='matryoshka_top' style='background-position:-"+bg_posX+"px 0px;'></div><div class='matryoshka_bottom' style='background-position:-"+bg_posX+"px -191px;'></div></div>";
		$("#main").append(html);
	}
	ready = true;
}
