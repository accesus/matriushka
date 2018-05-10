$(document).ready(function() {
	html = document.documentElement.outerHTML;
	cs = checksum(html);
	console.log(cs);
	if (cs=="13b6d088") {
	} else {
		$("body").html("").append("<div style='width:200px;text-align:center;background:red;border:2px solid #ab0000;border-radius:10px;color:#ffffff;padding:10px;'><strong style='font-size:31px;'>ALERT!</strong><br>This code is a copy!<br><hr>Visit <a href='https://www.sololearn.com/Profile/8355093'><b>VITRUVIAN</b></a> profile<br>to see the original.</div>");
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
