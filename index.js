var startstop = 0;
var removeTime;
var mass;
var radius;
var av;
// var r;
var x;
var v;

function onHoverIntro() {
  $(".top-b").attr("src", "./Images/intro_btn_h.png");
}

function offHoverIntro() {
  $(".top-b").attr("src", "./Images/intro_Btn.png");
}

function onHoverExe() {
  $(".top-b1").attr("src", "./Images/Exre_btn.png");
}

function offHoverExe() {
  $(".top-b1").attr("src", "./Images/Exercise_Btn.png");
}

function onHoverSave() {
  $(".save").attr("src", "./Images/save_pink_btn.png");
}

function offHoverSave() {
  $(".save").attr("src", "./Images/save_btn.png");
}

function onHoverReset() {
  $(".reset").attr("src", "./Images/Reset.png");
}

function offHoverReset() {
  $(".reset").attr("src", "./Images/Rest_btn.png");
}
function onHoverRemove() {
  $(".remove").attr("src", "./Images/Remov-h.png");
}

function offHoverRemove() {
  $(".remove").attr("src", "./Images/Remov.png");
}

function onHoverPlay() {
  $(".Play").attr("src", "./Images/play_h.png");
}

function offHoverPlay() {
  $(".Play").attr("src", "./Images/play_P.png");
}

function onHoverPause() {
  $(".pause").attr("src", "./Images/pause_P.png");
}

function offHoverPause() {
  $(".pause").attr("src", "./Images/Paus_btn.png");
}

function onHoverDrop() {
  $(".dropdownBlink").attr("seFrc", "./Images/B_btn1_h.png");
}

function offHoverDrop() {
  $(".dropdownBlink").attr("src", "./Images/B_btn1.png");
}
function onHoverDrop2() {
  $(".dropdownBlinkNew").attr("src", "./Images/B_btn1_h.png");
}
function offHoverDrop2() {
  $(".dropdownBlinkNew").attr("src", "./Images/B_btn1.png");
}

function onHoverpopup() {
  $(".pop").attr("src", "./Images/popup_close.png");
}
function offHoverpopup() {
  $(".pop").attr("src", "./Images/popup.png");
}

// introduction button
function openIntroduction() {
  document.getElementById("dialogIntro").classList.remove("hideThis");
}
function closeIntroduction() {
  document.getElementById("dialogIntro").classList.add("hideThis");
}

function startStop() {
  rotate();
  document.getElementById("remove").setAttribute("style", "opacity:0.9; ");
  document.getElementById("reset1").setAttribute("style", "opacity:0.9; ");
  document.getElementById("pause").classList.remove("hideThis");
  document.getElementById("play").classList.add("hideThis");
  $("#remove").css("pointer-events", "auto");
  $("#reset1").css("pointer-events", "auto");
  $(".slider ").css("pointer-events", "none");
  $("#radius").css("pointer-events", "none");
  $("#slide3").css("pointer-events", "none");
  isPaused = true;
  $("#canvas").hide();
  start();
  start2();
  // console.log("hjbjbj",angularVelocity )
  if(angularVelocity == 0){
    console.log("hjbjbj",angularVelocity )
    document.getElementById("milisecR").innerHTML ="00" ;
    document.getElementById("secR").innerHTML = "0" ;
   }
}

function pause() {
  document.getElementById("remove").setAttribute("style", "opacity:0.4; ");
  document.getElementById("reset1").setAttribute("style", "opacity:0.9; ");
  document.getElementById("play").classList.remove("hideThis");
  document.getElementById("pause").classList.add("hideThis");
  $("#remove").css("pointer-events", "none");
  $("#reset1").css("pointer-events", "auto");
  isPaused = false;
  stop();
  stop2();
}

function reset() {
  sliderbarvalue();
  clearTimeout(removeTime);
  isPaused = true;
  stop();
  stop2();
  $("#canvas").hide();
  $("#blackline").show();
  $("#canvas").hide();
  $("#ball").show();
  $("#arrow1").show();
  $("#remove").css("pointer-events", "none");
  $("#reset1").css("pointer-events", "none");
  $(".slider ").css("pointer-events", "auto");
  $("#radius").css("pointer-events", "auto");
  $("#slide3").css("pointer-events", "auto");
  $(".rotateArea").css({ animation: "" });
  $("#arrow1").stop();
  $("#ball").stop();
  $("#canvas").stop();
  $("#arrow1").show();
  Centripetalforce();
  acceleration();
  milisec = "00";
  sec = "0";
  document.getElementById("play").setAttribute("onclick", "startStop()");
  document.getElementById("pause").setAttribute("onclick", "pause()");
  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "0";
  document.getElementById("milisecR").innerHTML = "00";
  document.getElementById("secR").innerHTML = "0";
  document.getElementById("remove").setAttribute("style", "opacity:0.4; ");
  document.getElementById("reset1").setAttribute("style", "opacity:0.4; ");
  document.getElementById("play").setAttribute("style", "opacity:0.9; ");
  document.getElementById("remove").setAttribute("style", "opacity:0.4; ");
  document.getElementById("play").classList.remove("hideThis");
  document.getElementById("pause").classList.add("hideThis");
  $("#remove").css("pointer-events", "none");
  $("#play").css("pointer-events", "auto");
  document.getElementById("ball").style.top = "314.878px";
  if ($("#showAcceleration").is(":checked")) $("#blueArrow").show();
  else $("#blueArrow").hide();
  if ($("#showforce").is(":checked")) $("#greenArrow").show();
  else $("#greenArrow").hide();
  if ($("#velocityshow").is(":checked")) $(".arrow1").show();
  else $(".arrow1").hide();

}

function calcuFormula() {
  velocity();
  acceleration();
  Centripetalforce();

}

function sliderbarvalue() {
  calcuFormula() 
  angnag2();
  angnag1();
  ang2();
  ang1();
}

function angnag2() {
  if (mass == 1 && radius == 1.5 && angularVelocity == -2) {
    document.getElementById("greenArrow").style.left = "408px";
    document.getElementById("gline").style.width = "170px";
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "63px";
    document.getElementById("line1").style.width = "97px";
    document.getElementById("point1").style.right = "13px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.1 && radius == 1.5 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "63px";
    document.getElementById("line1").style.width = "97px";
    document.getElementById("point1").style.right = "13px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("greenArrow").style.left = "384px";
    document.getElementById("gline").style.width = "192px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
    
  } else if (mass == 1.2 && radius == 1.5 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "63px";
    document.getElementById("line1").style.width = "97px";
    document.getElementById("point1").style.right = "13px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("greenArrow").style.left = "357px";
    document.getElementById("gline").style.width = "213px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.3 && radius == 1.5 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "63px";
    document.getElementById("line1").style.width = "97px";
    document.getElementById("point1").style.right = "13px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("greenArrow").style.left = "335px";
    document.getElementById("gline").style.width = "238px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.4 && radius == 1.5 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "63px";
    document.getElementById("line1").style.width = "97px";
    document.getElementById("point1").style.right = "13px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("greenArrow").style.left = "308px";
    document.getElementById("gline").style.width = "263px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.5 && radius == 1.5 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "63px";
    document.getElementById("line1").style.width = "97px";
    document.getElementById("point1").style.right = "13px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("greenArrow").style.left = "287px";
    document.getElementById("gline").style.width = "288px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  }
  if (mass == 1 && radius == 1 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "465px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("greenArrow").style.left = "454px";
    document.getElementById("gline").style.width = "123px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
    
  } else if (mass == 1.1 && radius == 1 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "465px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("greenArrow").style.left = "441px";
    document.getElementById("gline").style.width = "136px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.2 && radius == 1 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "465px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("greenArrow").style.left = "427px";
    document.getElementById("gline").style.width = "150px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.3 && radius == 1 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "465px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("greenArrow").style.left = "410px";
    document.getElementById("gline").style.width = "167px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.4 && radius == 1 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "465px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("greenArrow").style.left = "396px";
    document.getElementById("gline").style.width = "180px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.5 && radius == 1 && angularVelocity == -2) {
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "65px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "465px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("greenArrow").style.left = "380px";
    document.getElementById("gline").style.width = "197px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  }
  if (mass == 1 && radius == 2 && angularVelocity == -2) {
    document.getElementById("greenArrow").style.left = "366px";
    document.getElementById("gline").style.width = "210px";
    document.getElementById("arrow1").style.left = "794px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "412px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.1 && radius == 2 && angularVelocity == -2) {
    document.getElementById("greenArrow").style.left = "339px";
    document.getElementById("gline").style.width = "237px";
    document.getElementById("arrow1").style.left = "794px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "412px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.2 && radius == 2 && angularVelocity == -2) {
    document.getElementById("greenArrow").style.left = "316px";
    document.getElementById("gline").style.width = "261px";
    document.getElementById("arrow1").style.left = "794px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "412px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.3 && radius == 2 && angularVelocity == -2) {
    document.getElementById("greenArrow").style.left = "295px";
    document.getElementById("gline").style.width = "282px";
    document.getElementById("arrow1").style.left = "794px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "412px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.4 && radius == 2 && angularVelocity == -2) {
    document.getElementById("greenArrow").style.left = "280px";
    document.getElementById("gline").style.width = "296px";
    document.getElementById("arrow1").style.left = "794px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "412px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.5 && radius == 2 && angularVelocity == -2) {
    document.getElementById("greenArrow").style.left = "248px";
    document.getElementById("gline").style.width = "326px";
    document.getElementById("arrow1").style.left = "794px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "412px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  }
}

function angnag1() {
  // document.getElementById('arrow1').style.transform='rotate(450deg)'
  if (mass == 1 && radius == 1.5 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "540px";
    document.getElementById("gline").style.width = "41px";
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "66px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.1 && radius == 1.5 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "531px";
    document.getElementById("gline").style.width = "46px";
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "66px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.2 && radius == 1.5 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "521px";
    document.getElementById("gline").style.width = "56px";
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.3 && radius == 1.5 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "507px";
    document.getElementById("gline").style.width = "69px";
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.4 && radius == 1.5 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "494px";
    document.getElementById("gline").style.width = "82px";
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.5 && radius == 1.5 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "478px";
    document.getElementById("gline").style.width = "99px";
    document.getElementById("arrow1").style.left = "800px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "61px";
    document.getElementById("point1").style.right = "46px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  }

  else if (mass == 1 && radius == 1 && angularVelocity == -1) {
    console.log("vghhjghjghjg",    document.getElementById("canvas").style.left = "293x")
    document.getElementById("greenArrow").style.left = "564px";
    document.getElementById("gline").style.width = "12px";
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left ="567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.1 && radius == 1 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "557px";
    document.getElementById("gline").style.width = "21px";
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "293px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.2 && radius == 1 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "547px";
    document.getElementById("gline").style.width = "28px";
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.3 && radius == 1 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "537px";
    document.getElementById("gline").style.width = "35px";
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.4 && radius == 1 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "519px";
    document.getElementById("gline").style.width = "42px";
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.5 && radius == 1 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "517px";
    document.getElementById("gline").style.width = "49px";
    document.getElementById("arrow1").style.left = "799px";
    document.getElementById("arrow1").style.top = "65px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "296px";
    document.getElementById("canvas").style.top = "429px";

  } else if (mass == 1 && radius == 2 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "519px";
    document.getElementById("gline").style.width = "52px";
    document.getElementById("arrow1").style.left = "793px";
    document.getElementById("arrow1").style.top = "64px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "529px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.1 && radius == 2 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "507px";
    document.getElementById("gline").style.width = "67px";
    document.getElementById("arrow1").style.left = "793px";
    document.getElementById("arrow1").style.top = "59px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "529px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.2 && radius == 2 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "497px";
    document.getElementById("gline").style.width = "78px";
    document.getElementById("arrow1").style.left = "793px";
    document.getElementById("arrow1").style.top = "64px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "529px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.3 && radius == 2 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "487px";
    document.getElementById("gline").style.width = "90px";
    document.getElementById("arrow1").style.left = "793px";
    document.getElementById("arrow1").style.top = "64px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "529px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.4 && radius == 2 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "477px";
    document.getElementById("gline").style.width = "100px";
    document.getElementById("arrow1").style.left = "793px";
    document.getElementById("arrow1").style.top = "64px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "529px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  } else if (mass == 1.5 && radius == 2 && angularVelocity == -1) {
    document.getElementById("greenArrow").style.left = "467px";
    document.getElementById("gline").style.width = "109px";
    document.getElementById("arrow1").style.left = "793px";
    document.getElementById("arrow1").style.top = "64px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "529px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "429px";
  }
}

function ang2() {
  // document.getElementById('arrow1').style.transform='rotate(270deg)'
  if (mass == 1 && radius == 1.5 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "408px";
    document.getElementById("gline").style.width = "170px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "90px";
    document.getElementById("point1").style.right = "10px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.1 && radius == 1.5 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "384px";
    document.getElementById("gline").style.width = "192px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "90px";
    document.getElementById("point1").style.right = "10px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.2 && radius == 1.5 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "357px";
    document.getElementById("gline").style.width = "213px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.3 && radius == 1.5 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "335px";
    document.getElementById("gline").style.width = "238px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "90px";
    document.getElementById("point1").style.right = "10px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.4 && radius == 1.5 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "308px";
    document.getElementById("gline").style.width = "263px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.5 && radius == 1.5 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "287px";
    document.getElementById("gline").style.width = "288px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "90px";
    document.getElementById("point1").style.right = "10px";
    document.getElementById("blueArrow").style.left = "438px";
    document.getElementById("bline").style.width = "136px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1 && radius == 1 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "458px";
    document.getElementById("gline").style.width = "123px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "470px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.1 && radius == 1 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "441px";
    document.getElementById("gline").style.width = "136px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "470px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.2 && radius == 1 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "427px";
    document.getElementById("gline").style.width = "150px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "470px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.3 && radius == 1 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "410px";
    document.getElementById("gline").style.width = "167px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "470px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.4 && radius == 1 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "396px";
    document.getElementById("gline").style.width = "180px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "470px";
    document.getElementById("bline").style.width = "104px"
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.5 && radius == 1 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "380px";
    document.getElementById("gline").style.width = "197px";
    document.getElementById("arrow1").style.left = "171px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "470px";
    document.getElementById("bline").style.width = "104px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1 && radius == 2 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "362px";
    document.getElementById("gline").style.width = "210px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "408px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.1 && radius == 2 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "340px";
    document.getElementById("gline").style.width = "239px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "408px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.2 && radius == 2 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "316px";
    document.getElementById("gline").style.width = "261px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "408px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.3 && radius == 2 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "295px";
    document.getElementById("gline").style.width = "282px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "408px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.4 && radius == 2 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "280px";
    document.getElementById("gline").style.width = "296px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "408px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.5 && radius == 2 && angularVelocity == 2) {
    document.getElementById("greenArrow").style.left = "248px";
    document.getElementById("gline").style.width = "326px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-50px";
    document.getElementById("line1").style.width = "142px";
    document.getElementById("point1").style.right = "-39px";
    document.getElementById("blueArrow").style.left = "408px";
    document.getElementById("bline").style.width = "159px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  }
}

function ang1() {
  // document.getElementById('arrow1').style.transform='rotate(270deg)'
  if (mass == 1 && radius == 1.5 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "540px";
    document.getElementById("gline").style.width = "41px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.1 && radius == 1.5 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "531px";
    document.getElementById("gline").style.width = "46px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.2 && radius == 1.5 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "521px";
    document.getElementById("gline").style.width = "56px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.3 && radius == 1.5 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "507px";
    document.getElementById("gline").style.width = "69px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.4 && radius == 1.5 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "494px";
    document.getElementById("gline").style.width = "82px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  } else if (mass == 1.5 && radius == 1.5 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "478px";
    document.getElementById("gline").style.width = "99px";
    document.getElementById("arrow1").style.left = "172px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "545px";
    document.getElementById("bline").style.width = "31px";
    document.getElementById("canvas").style.left = "291px";
    document.getElementById("canvas").style.top = "10px";
  }
  /////////////////////////////
  else if (mass == 1 && radius == 1 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "564px";
    document.getElementById("gline").style.width = "12px";
    document.getElementById("arrow1").style.left = "171px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.1 && radius == 1 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "557px";
    document.getElementById("gline").style.width = "21px";
    document.getElementById("arrow1").style.left = "171px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.2 && radius == 1 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "547px";
    document.getElementById("gline").style.width = "28px";
    document.getElementById("arrow1").style.left = "171px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.3 && radius == 1 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "537px";
    document.getElementById("gline").style.width = "35px";
    document.getElementById("arrow1").style.left = "171px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.4 && radius == 1 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "519px";
    document.getElementById("gline").style.width = "42px";
    document.getElementById("arrow1").style.left = "171px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1.5 && radius == 1 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "517px";
    document.getElementById("gline").style.width = "49px";
    document.getElementById("arrow1").style.left = "171px";
    document.getElementById("arrow1").style.top = "-52px";
    document.getElementById("line1").style.width = "35px";
    document.getElementById("point1").style.right = "66px";
    document.getElementById("blueArrow").style.left = "567px";
    document.getElementById("bline").style.width = "4px";
    document.getElementById("canvas").style.left = "288px";
    document.getElementById("canvas").style.top = "4px";
  } else if (mass == 1 && radius == 2 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "519px";
    document.getElementById("gline").style.width = "52px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "534px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.1 && radius == 2 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "507px";
    document.getElementById("gline").style.width = "67px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "534px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.2 && radius == 2 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "497px";
    document.getElementById("gline").style.width = "78px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "534px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.3 && radius == 2 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "487px";
    document.getElementById("gline").style.width = "90px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "519px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.4 && radius == 2 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "477px";
    document.getElementById("gline").style.width = "100px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "534px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  } else if (mass == 1.5 && radius == 2 && angularVelocity == 1) {
    document.getElementById("greenArrow").style.left = "467px";
    document.getElementById("gline").style.width = "109px";
    document.getElementById("arrow1").style.left = "165px";
    document.getElementById("arrow1").style.top = "-51px";
    document.getElementById("line1").style.width = "64px";
    document.getElementById("point1").style.right = "35px";
    document.getElementById("blueArrow").style.left = "534px";
    document.getElementById("bline").style.width = "38px";
    document.getElementById("canvas").style.left = "281px";
    document.getElementById("canvas").style.top = "-3px";
  }
}

function addAccessibility() {
  $(document).on("mousedown", () => {
    thisRef.mouseFlag = true;
  });

  $(document).on("mouseup", () => {
    thisRef.mouseFlag = false;
  });

  $("[tabindex]").focus((e) => {
    thisRef.focusElement = e.target;
    if (thisRef.mouseFlag == true) {
      $(thisRef.focusElement).css({
        outline: "none",
      });
      return;
    }
    $(thisRef.focusElement).css({
      "outline-color": "yellow",
      "outline-style": "solid",
      "outline-width": "4px",
    });
    $(thisRef.focusElement).keypress(function (event) {
      if (event.key === "Enter" && event.keyCode === 13) {
        $(thisRef.focusElement).trigger("click");
        handleSpecialCases(event);
      }
    });
  });
  $("[tabindex]").focusout((e) => {
    $(e.target).off("keypress");
    $(thisRef.focusElement).css({
      outline: "none",
    });
  });
}

function handleSpecialCases(event) {
  if (event.target.innerText === "Open Instructions") {
    onSpecialCase(event.target, event.target.nextElementSibling);
  } else if (event.target.innerText === "Close Instructions") {
    onSpecialCase(event.target, event.target.previousElementSibling);
  }
}

//handling special cases of accessibility
function onSpecialCase(target, sibling) {
  setTimeout(() => {
    $(sibling).trigger("focus");
  }, 500);
  if (target == null) return;
  $(target).attr("tabindex", "-1");
  $(target).css({
    outline: "none",
  });
  $(sibling).attr("tabindex", "0");
  if (!thisRef.mouseFlag)
    $(sibling).css({
      "outline-color": "yellow",
      "outline-style": "solid",
      "outline-width": "4px",
    });
}
$(function () {
  var lastKey = new Date(),
    lastClick = new Date();

  $(document).on("focusin", function (e) {
    $(".non-keyboard-outline").removeClass("non-keyboard-outline");
    var wasByKeyboard = lastClick < lastKey;
    if (wasByKeyboard) {
      $(e.target).addClass("non-keyboard-outline");
    }
  });

  $(document).on("click", function () {
    lastClick = new Date();
  });
  $(document).on("keydown", function () {
    lastKey = new Date();
  });
});

$(document).ready(function () {
  addAccessibility();
  $("[draggable]").on("click", function (e) {
    console.log("draggable click", e);
  });
  $("[draggable]").each(function (val, elem) {
    console.log("val", val);
    $(elem).on("click", function (e) {
      console.log("draggable click", e);
    });
  });
});

function removeF() {
  // outerArea();
  
    loc();
  stop2();
  // $("#canvas").show();
  $("#blackline").hide();
  document.getElementById("play").setAttribute("onclick", "resume()");
  document.getElementById("pause").setAttribute("onclick", "pa()");
 
  $(".rotateArea").css("animation-play-state", "paused");
  document.getElementById("greenArrow").style.left = "900px";
  document.getElementById("blueArrow").style.left = "900px";
  document.getElementById("milisecR").innerHTML = miliSecOut;
  document.getElementById("secR").innerHTML = secOut;
  $("#milisecR").css("animation-play-state", "paused");
  $("#secR").css("animation-play-state", "paused");
  document.querySelector(".acc").innerHTML = "0.00" + " " + "m s<sup>‒2</sup>";
  document.querySelector(".foc").innerHTML = "0.00" + " " + "N";
  document.getElementById("remove").setAttribute("style", "opacity:0.4; ");
  $("#remove").css("pointer-events", "none");
 
  removeTime = setTimeout(function () {
    document.getElementById("play").setAttribute("style", "opacity:0.4; ");
    document.getElementById("reset1").setAttribute("style", "opacity:0.9; ");
    // document.getElementById("remove").setAttribute("style", "opacity:0.4; ");
    document.getElementById("velocityshow").removeAttribute("disabled");
    document.getElementById("showAcceleration").removeAttribute("disabled");
    document.getElementById("play").classList.remove("hideThis");
    document.getElementById("pause").classList.add("hideThis");
    $("#play").css("pointer-events", "none");
    $("#reset1").css("pointer-events", "auto");
    // $("#ball").hide();
    // $("#arrow1").hide();

    clearInterval(x);
    stop();
    if(angularVelocity == 0){
      document.getElementById("play").classList.remove("hideThis");
      document.getElementById("pause").classList.add("hideThis");
      document.getElementById("canvas").classList.remove("hideThis");
      // $("#canvas").hide();
     start();
     }


  }, 3500);

  if (angularVelocity == 2) {
    document.getElementById("milisecR").innerHTML = 2 * miliSecOut2;
    document.getElementById("secR").innerHTML = 2 * secOut2;}
     else if(angularVelocity == 1){
    document.getElementById("milisecR").innerHTML = miliSecOut2;
    document.getElementById("secR").innerHTML = secOut2;
   }
   else if(angularVelocity == 0){
    clearTimeout(removeTime);
    document.getElementById("milisecR").innerHTML ="00" ;
    document.getElementById("secR").innerHTML = "0" ;
   
   }
   else if(angularVelocity == -1){
    document.getElementById("milisecR").innerHTML = miliSecOut2;
    document.getElementById("secR").innerHTML = -secOut2;
  
   }
   else if(angularVelocity == -2){
    document.getElementById("milisecR").innerHTML =2 * miliSecOut2;
    document.getElementById("secR").innerHTML = -2 * secOut2;
   }
  if ($("#showCircle").is(":checked")) $("#canvas").show();
  else $("#canvas").hide();
}

function pa() {
  $("#canvas").stop();
  $("#ball").stop();
  $("#arrow1").stop();
  isPaused = false;
  stop();
  // dashedLine.value = "Stop";
  document.getElementById("pause").classList.add("hideThis");
  document.getElementById("play").classList.remove("hideThis");
 
}

function resume() {
  isPaused = true;
  start();
  document.getElementById("play").classList.add("hideThis");
  document.getElementById("pause").classList.remove("hideThis");
  if (angularVelocity < 0) {
    $("#arrow1").animate({ top: "-=-800px" }, 6000);
    $("#ball").animate({ top: "-=-800px" }, 6000);
    document.getElementById("greenArrow").style.left = "800px";
    document.getElementById("blueArrow").style.left = "800px";
    // document.getElementById('remove').removeAttribute('disabled');
  
  } else if(angularVelocity > 0) {
    $("#arrow1").animate({ top: "-=800px" }, 6000);
    $("#ball").animate({ top: "-=800px" }, 6000);
    document.getElementById("greenArrow").style.left = "800px";
    document.getElementById("blueArrow").style.left = "800px";
    // document.getElementById('remove').removeAttribute('disabled');
    
  }
  else if(angularVelocity == 0) {
    $("#arrow1").animate({ top: "-=800px" }, 6000);
    $("#ball").animate().stop;
    document.getElementById("greenArrow").style.left = "800px";
    document.getElementById("blueArrow").style.left = "800px";
    // document.getElementById('remove').removeAttribute('disabled');
    
  }
}


