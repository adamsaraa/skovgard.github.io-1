$("#sodmilk").click(()=> {
    $("audio")[0].play()
  })
  $("#letmilk").click(()=> {
    $("audio")[1].play()
  })
  $("#minimilk").click(()=> {
    $("audio")[2].play()
  })
  $("#skummetmilk").click(()=> {
    $("audio")[3].play()
  })
  $("#kaernemilk").click(()=> {
    $("audio")[4].play()
  })
  $("#koldskal").click(()=> {
    $("audio")[5].play()
  })
  $("#tykmilk").click(()=> {
    $("audio")[6].play()
  })
  $("#piskeflode").click(()=> {
    $("audio")[7].play()
  })
  $("#kaffeflode").click(()=> {
    $("audio")[8].play()
  })
  $("#madflode").click(()=> {
    $("audio")[9].play()
  })
  $("#skyr").click(()=> {
    $("audio")[10].play()
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
    