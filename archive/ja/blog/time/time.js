function nowFunc(){
  now = new Date();
  h = now.getHours(); if(h < 10) h = "0" + h; if (h == 24) h = "00"; 
  s = now.getMinutes(); if(s < 10) s = "0" + s; else if(s=="60") s="00"; 
  sec = now.getSeconds(); if(sec < 10) sec="0"+sec; else if(sec=="60") sec="00"; 
  nowTime = h + ":" + s + ":" + sec;
  nowMsg =  nowTime;
  document.all("showTIME").innerHTML = nowMsg;
  document.all("showTIME").textContent = nowMsg;
  setTimeout("nowFunc()",1000);
}