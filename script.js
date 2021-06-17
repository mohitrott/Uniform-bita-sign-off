var milisec = 0;
var sec = 0;
var miliSecOut = 0;
var secOut = 0;
var milisecR = 0;
var secR = 0;
var miliSecOutR = 0;
var secOutR = 0;

var thisRef = {
  mouseFlag: false,
  focusElement: {},
};

$(window).on("load", function () {
  $("#greenArrow").hide();
  $("#blueArrow").hide();
  $(".arrow1").show();
  $("#cirArea").hide();
  document.getElementById("circle1").style.visibility = "visible";
  document.getElementById("circle2").style.visibility = "hidden";
  document.getElementById("circle3").style.visibility = "hidden";
  document.getElementById("radius3").style.visibility = "visible";
  document.getElementById("radius2").style.visibility = "hidden";
  document.getElementById("radius1").style.visibility = "hidden";
  document.getElementById("ball").style.left = "573px";
  document.getElementById("blackline").style.width = "250px";
  document.getElementById("arrowArea").style.left = "51px";
  document.getElementById("line1").style.width = "64px";
  document.getElementById("point1").style.right = "35px";
  document.getElementById("bline").style.width = "38px";
  document.getElementById("bpoint").style.right = "146px";
  document.getElementById("gline").style.width = "52px";
  document.getElementById("gpoint").style.right = "146px";
  document.getElementById("blueArrow").style.left = "533px";
  document.getElementById("greenArrow").style.left = "523px";
  radius = 2;
  mass = 1;
  angularVelocity = 1;
  av = 1;
  Centforce = mass * radius * angularVelocity * angularVelocity;
  document.getElementById("remove").setAttribute("style", "opacity:0.4; ");
  document.getElementById("reset1").setAttribute("style", "opacity:0.4; ");
  // document.getElementById("reset
  $("#remove").css("pointer-events", "none");
  $("#reset1").css("pointer-events", "none");
});


function showvelocity() {
  if ($("#velocityshow").is(":checked")) $(".arrow1").show();
  else $(".arrow1").hide();
}

function showAcceleration() {
  if ($("#showAcceleration").is(":checked")) $("#blueArrow").show();
  else $("#blueArrow").hide();
}

function showforce() {
  if ($("#showforce").is(":checked")) $("#greenArrow").show();
  else $("#greenArrow").hide();
}

//circle
function showCircle() {
  if ($("#showCircle").is(":checked")) $("#cirArea").show();
  else $("#cirArea").hide();
}

var velocityResult;
function velocity() {
  velocityResult = radius * av;

  if (velocityResult <= 0) {
    velocityResult = -velocityResult;
    document.querySelector(".vol").innerHTML =
      velocityResult.toFixed(2) + " " + "m s<sup>‒1</sup>";
  } else {
    document.querySelector(".vol").innerHTML =
      velocityResult.toFixed(2) + " " + "m s<sup>‒1</sup>";
  }
}

let CentripetalAcceleration;
function acceleration() {
  // v*v/r or rww

  CentripetalAcceleration = radius * av * av;
  console.log("value is  CentripetalAcceleration ==", angularVelocity);
  document.querySelector(".acc").innerHTML =
    CentripetalAcceleration.toFixed(2) + " " + "m s<sup>‒2</sup>";
}

let Centforce;
function Centripetalforce() {
  Centforce = mass * radius * av * av;
  document.querySelector(".foc").innerHTML = Centforce.toFixed(2) + " " + "N";
}

function rotate() {
  $(".rotateArea").css({ animation: "animate linear infinite" });

  if (av == -2) {
    $(".rotateArea").css({ "animation-name": "rotateText" });
    $(".rotateArea").css({ "animation-duration": "6.28s" });
  } else if (av == -1) {
    $(".rotateArea").css({ "animation-name": "rotateText" });
    $(".rotateArea").css({ "animation-duration": "12.56s" });
  } else if (av == 0) {
    // $(".rotateArea").css({ 'animation-name': 'rotateText' });
  } else if (av == 1) {
    $(".rotateArea").css({ "animation-name": "rotateLeft" });
    $(".rotateArea").css({ "animation-duration": "12.56s" });
  } else if (av == 2) {
    $(".rotateArea").css({ "animation-name": "rotateLeft" });
    $(".rotateArea").css({ "animation-duration": "6.28s" });
  }
}

function loc() {
  arr = arrow1.getBoundingClientRect();
    if (av == -2) {
      $("#arrow1").animate({ top: "-=-800px" },5500 );
      $("#ball").animate({ top: "-=-800px" },5500 );
      dotLine();
    } else if (av == -1) {
      $("#arrow1").animate({ top: "-=-800px" },11000 );
      $("#ball").animate({ top: "-=-800px" },11000 );    
      dotLine()
    } 
    else if (av == 0) {
      dotLine()

         
         $("#ball").stop();
          
    
       
     
  }
     else if (av == 1) {
      $("#arrow1").animate({ top: "-=800px" },11000 );
      $("#ball").animate({ top: "-=800px" },11000 );
      dotLine()
    } else if (av == 2) {
      $("#arrow1").animate({ top: "-=800px" },5500 );
      $("#ball").animate({ top: "-=800px" },5500 );
      dotLine()

    }
}

var massM;
function selectMass(e) {
  // selectAngVelocity(e)
  mass = e.target.value;
  calcuFormula();
  sliderbarvalue();
  document.getElementById("massM").innerHTML = mass + " kg";

  //  <b> ${slider.value} &nbsp;&nbsp;m s<sup>–1</sup> </b>`;
  switch (mass) {
    case "1":
      massM = 1;

      break;
    case "1.1":
      massM = 1.1;

      break;
    case "1.2":
      massM = 1.2;

      break;
    case "1.3":
      massM = 1.3;

      break;
    case "1.4":
      massM = 1.4;

      break;
    case "1.5":
      massM = 1.5;

      break;
  }
}

var angularVelocity;
function selectAngVelocity(e) {
  calcuFormula(); 
  av = e.target.value;
  sliderbarvalue();
  document.getElementById("ang").innerHTML = av + "  rad s<sup>‒1</sup>";
  document.getElementById("blueArrow").style.visibility = "visible";
  document.getElementById("arrow1").style.visibility = "visible";
  document.getElementById("greenArrow").style.visibility = "visible";
 
  //  document.getElementById('arrow1').style.top='59px';
  switch (av) {
    case "-2":
      document.getElementById("arrow1").style.transform = "rotate(450deg)";
      angularVelocity = -2;

      break;
    case "-1":
      document.getElementById("arrow1").style.transform = "rotate(450deg)";
      angularVelocity = -1;

      break;
    case "0":
      angularVelocity = 0;
      document.getElementById("arrow1").style.visibility = "hidden";
      document.getElementById("blueArrow").style.visibility = "hidden";
      document.getElementById("greenArrow").style.visibility = "hidden";
      // document.getElementById("canvas").style.visibility = "hidden";

      break;
    case "1":
      document.getElementById("arrow1").style.transform = "rotate(270deg)";
      angularVelocity = 1;

      break;
    case "2":
      document.getElementById("arrow1").style.transform = "rotate(270deg)";
      angularVelocity = 2;
  }
}

function selectRadius(e) {
  calcuFormula() ;
  sliderbarvalue();
  r = e.target.value;

  //  ang1()
  //  ang2()
  document.getElementById("radiusR").innerHTML = r + " m";
  document.getElementById("circle1").style.visibility = "hidden";
  document.getElementById("circle2").style.visibility = "hidden";
  document.getElementById("circle3").style.visibility = "hidden";
  document.getElementById("radius1").style.visibility = "hidden";
  document.getElementById("radius2").style.visibility = "hidden";
  document.getElementById("radius3").style.visibility = "hidden";
  switch (r) {
    case "1":
      radius = 1;

      document.getElementById("blackline").style.width = "149px";
      document.getElementById("circle3").style.visibility = "visible";
      document.getElementById("radius1").style.visibility = "visible";
      document.getElementById("arrowArea").style.left = "-56px";
      document.getElementById("ball").style.left = "472px";
  
      // radius1()
      break;
    case "1.5":
      radius = 1.5;
      document.getElementById("blackline").style.width = "191px";
      document.getElementById("circle2").style.visibility = "visible";
      document.getElementById("radius2").style.visibility = "visible";
      document.getElementById("arrowArea").style.left = "-6px";
      document.getElementById("ball").style.left = "522px";
      // radius15()

      break;
    case "2":
      radius = 2;
      document.getElementById("circle1").style.visibility = "visible";
      document.getElementById("radius3").style.visibility = "visible";
      document.getElementById("radiusR").innerHTML = 2 + "<b> m</b>";
      document.getElementById("blackline").style.width = "250px";
      document.getElementById("arrowArea").style.left = "50px";
      document.getElementById("ball").style.left = "572px";
      break;
  }
}

function zoomOutMobile() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if (viewport) {
    viewport.content = "initial-scale=0.1";
    viewport.content = "width=1200";
  }
}

zoomOutMobile();

// function outerArea(){

//   var top= document.getElementById('leftarea').offsetTop;
//   console.log("TOP",top)
//   var left= document.getElementById('leftarea').offsetleft;
//   console.log("left",left)
//   //  var bottom= topo + leftarea.outerHeight;
//   // console.log("BOTTOM",bottom)

//   // 'top': offset.top,
//   // 'right': offset.left + element.outerWidth(),
//   // 'bottom': offset.top + element.outerHeight(),
//   // 'left': offset.left,
//   // console.log("fd",arr.top)
//   // if(arr.offsetTop<window.innerHeight &&
//   //   arr.offsetTop>-arr.offsetHeight
//   // && arr.offsetLeft>-arr.offsetWidth
//   // && arr.offsetLeft<window.innerWidth)

// }
