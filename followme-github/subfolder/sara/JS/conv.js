$("#hej").click(() => {
    $("audio")[0].play()
})
$("#hejj").click(() => {
    $("audio")[1].play()
})
$("#kr").click(() => {
    $("audio")[2].play()
})
$("#jatak").click(() => {
    $("audio")[3].play()
})
$("#ellersandet").click(() => {
    $("audio")[4].play()
})
$("#janej").click(() => {
    $("audio")[5].play()
})
$("#kvittering").click(() => {
    $("audio")[6].play()
})
$("#undskyld").click(() => {
    $("audio")[7].play()
})
$("#bon").click(() => {
    $("audio")[8].play()
})
$("#janejj").click(() => {
    $("audio")[9].play()
})
$("#pose").click(() => {
    $("audio")[10].play()
})
$("#minpose").click(() => {
    $("audio")[11].play()
})
$("#hejhej").click(() => {
    $("audio")[12].play()
})
$("#ilige").click(() => {
    $("audio")[13].play()
})
$("#kanjeg").click(() => {
    $("audio")[14].play()
})
$("#persze").click(() => {
    $("audio")[15].play()
})

$(".open").click(() => {
	console.log("open")
	$("#nav").addClass("showMeTheMenu");
	$(".close").css("display", "inline-block")
})

$(".close").click(() => {
	$("#nav").removeClass("showMeTheMenu");
	$(".close").css("display", "none")
})
	