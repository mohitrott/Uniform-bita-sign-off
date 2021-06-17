function dashedLine1() {
  document.getElementById("canvas").style.visibility = "visible";
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "grey";
  
    function drawLine(x1, y1, x2, y2, ratio) {
      ctx.moveTo(y1, x1);
      x2 = y1 + ratio * (y2 - x1);
      y2 = x1 + ratio * (y2 - y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      //
      ctx.beginPath();
      ctx.setLineDash([7, 7]);
    }
  
    function animate(ratio) {
      ratio = ratio || 0;
      drawLine(300, 300, 0, 0, ratio);
      if (ratio < 1) {
        requestAnimationFrame(function () {
          animate(ratio + 0.00235);
        });
      }
    }
  
    animate();
  
    canvas.width = canvas.width;
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "grey";
  
    animate(0);
  }
  function dashedLine0() {
    document.getElementById("canvas").style.visibility = "hidden";
  }

function dashedLine2() {
  document.getElementById("canvas").style.visibility = "visible";
    // Dashed line
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "grey";
  
    function drawLine(x1, y1, x2, y2, ratio) {
      ctx.moveTo(y1, x1);
      x2 = y1 + ratio * (y2 - x1);
      y2 = x1 + ratio * (y2 - y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      //
      ctx.beginPath();
      ctx.setLineDash([7, 7]);
    }
  
    function animate(ratio) {
      ratio = ratio || 0;
      drawLine(300, 300, 0, 0, ratio);
      if (ratio < 1) {
        requestAnimationFrame(function () {
          animate(ratio + 0.00455);
        });
      }
    }
  
    animate();
  
    canvas.width = canvas.width;
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "grey";
  
    animate(0);
  }
  
  function dashedLineNag2() {
    document.getElementById("canvas").style.visibility = "visible";
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "grey";
    //  ctx.lineWidth = 0.5;
  
    function drawLine(x1, y1, x2, y2, ratio) {
      ctx.moveTo(y1, x1);
      x2 = y1 + ratio * (y2 - x1);
      y2 = x1 + ratio * (y2 - y1);
      ctx.lineTo(x2, y2);
  
      ctx.stroke();
      //  ctx.lineWidth="1px"
      //
      ctx.beginPath();
      ctx.setLineDash([7, 7]);
      ctx.lineWidth = 0.5;
    }
  
    function animate(ratio) {
      ratio = ratio || 0;
      drawLine(0, 0, 250, 250, ratio);
      if (ratio < 1) {
        requestAnimationFrame(function () {
          animate(ratio + 0.00479);
        });
      }
    }
  
    animate();
    canvas.width = canvas.width;
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "gray";
  
    animate(0);
  }
  function dashedLineNag1() {
    document.getElementById("canvas").style.visibility = "visible";
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "grey";
    //  ctx.lineWidth = 0.5;
  
    function drawLine(x1, y1, x2, y2, ratio) {
      ctx.moveTo(y1, x1);
      x2 = y1 + ratio * (y2 - x1);
      y2 = x1 + ratio * (y2 - y1);
      ctx.lineTo(x2, y2);
  
      ctx.stroke();
      //  ctx.lineWidth="1px"
      //
      ctx.beginPath();
      ctx.setLineDash([7, 7]);
      ctx.lineWidth = 0.5;
    }
  
    function animate(ratio) {
      ratio = ratio || 0;
      drawLine(0, 0, 250, 250, ratio);
      if (ratio < 1) {
        requestAnimationFrame(function () {
          animate(ratio + 0.00285);
        });
      }
    }
  
    animate();
    canvas.width = canvas.width;
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "gray";
  
    animate(0);
  }
  function dotLine(){
  if (av == -2) {

    dashedLineNag2();
  } else if (av == -1) {
   
    dashedLineNag1();
  } else if (angularVelocity == 0) {
     dashedLine0() 

  } else if (av == 1) {
   
    dashedLine1();
  } else if (av == 2) {

    dashedLine2();

    }  }
