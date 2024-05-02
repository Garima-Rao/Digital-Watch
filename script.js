let btn1=document.getElementById("button");
let rgb1="#7ab789";
let rgb2="#456434";
const fun=()=>{
    let hex="0123456789ABCDEF";
    let value="#";
    for(let i=0;i<6;i++){
     value=value+hex[Math.floor(Math.random()*16)];
    }
     return value;
};
const changecolor1=()=>{
    rgb1=fun();
    rgb2=fun();
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    btn1.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
};
    const time=()=>{
    let date=new Date();
    document.getElementById("para").innerText=date.toLocaleTimeString();
    para.style.color="white";
    para.style.fontWeight="700";
    };
    time();
   function loop(){
      time();
    }
    setInterval(loop,1000);
 btn1.addEventListener("click",changecolor1);
 