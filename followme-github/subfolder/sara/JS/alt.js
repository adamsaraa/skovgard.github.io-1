
$(".open").click(() => {
	console.log("open")
	$("#nav").addClass("showMeTheMenu");
	$(".close").css("display", "inline-block")
})

$(".close").click(() => {
	$("#nav").removeClass("showMeTheMenu");
	$(".close").css("display", "none")
})
	