function start() {
    x = setInterval(timer, 10);
  }
  function start2() {
    x2 = setInterval(timer2, 10);
    // if(angularVelocity==2){
    //   x2= x2*2;
    // }
  }
  
  // function startR(){
  // if(angularVelocity == 2){
  //   document.getElementById("milisecR").innerHTML = 2*miliSecOut;
  // document.getElementById("secR").innerHTML = 2*secOut;
  // }
  // else{
  //   document.getElementById("milisecR").innerHTML = miliSecOut;
  //   document.getElementById("secR").innerHTML = secOut;
  // }
  // }
  
  function stop() {
    $(".rotateArea").css("animation-play-state", "paused");
  
    clearInterval(x);
  } /* Stop */
  
  function stop2() {
    $(".rotateArea").css("animation-play-state", "paused");
  
    clearInterval(x2);
  }
  
  function timer() {
    miliSecOut = checkTime(milisec);
    secOut = checkTime(sec);
    milisec = ++milisec;
  
    if (milisec === 343) {
      milisec = 0;
      sec = ++sec;
    }
  
    document.getElementById("milisec").innerHTML = miliSecOut;
    document.getElementById("sec").innerHTML = secOut;
  }
  
  function timer2() {
    miliSecOut2 = checkTime(milisec);
    secOut2 = checkTime(sec);
    milisec = ++milisec;
  
    if (milisec === 343) {
      milisec = 0;
      sec = ++sec;
    }
 
    if (angularVelocity == 2) {
      document.getElementById("milisecR").innerHTML = 2 * miliSecOut2;
      document.getElementById("secR").innerHTML = 2 * secOut2;}
      
    else if(angularVelocity == 1){  
      document.getElementById("milisecR").innerHTML = miliSecOut2;
      document.getElementById("secR").innerHTML = secOut2;
     }
    //  else if(angularVelocity == 0){
    //    start()
    //    }
     
     else if(angularVelocity == -1){
      document.getElementById("milisecR").innerHTML = miliSecOut2;
      document.getElementById("secR").innerHTML = -secOut2;
     }
     else if(angularVelocity == -2){
      document.getElementById("milisecR").innerHTML =2 * miliSecOut2;
      document.getElementById("secR").innerHTML = -2 * secOut2;
     }
     
     
  }
  
  function checkTime(i) {
    return i;
  }