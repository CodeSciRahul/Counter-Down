let btn = document.querySelector(".ipbt button");
btn.addEventListener("click", () => {
    let currentDate = new Date();
    const time = document.querySelector("#end_time").value;
    let getime = time.split(":");
    const date = document.querySelector("#date").value;
    let day=currentDate.getDate();
    let hour=currentDate.getHours();
    let minute=currentDate.getMinutes();
    if(date<day || getime[0]<hour || getime[1]<minute)
    {
        let div=document.querySelector("body>div");
        let txt=document.querySelector("body>div>h3");
        txt.innerText="why are you playing with me can u enter correct Ending date!"
        let img=document.createElement("img");
       let gif= div.appendChild(img);
       gif.src="https://www.angrybirds.com/wp-content/uploads/2023/06/blinking_red.gif";
       gif.className="wrongInput";
       txt.className="wrongInput";
    }
    else{
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let endDate = new Date(year, month, date, getime[0], getime[1]);
    let intervalied=setInterval(() => {
       let result=countDown(endDate);
       if(result===0)
       {
        clearInterval(intervalied);
       }
    }, 1000);
}
  
})

function countDown(endDate) {
    let startDate = new Date();
    let diff = (endDate - startDate) / 1000;
    if (endDate < startDate) 
    {
        let div=document.querySelector("body>div");
        let txt=document.querySelector("body>div>h3");
        txt.innerText="Time's up! A countdown concludes, leaving behind cherished moments. Hope you enjoyed the journey!";
        let img=document.createElement("img");
       let gif= div.appendChild(img);
       gif.src="https://www.angrybirds.com/wp-content/uploads/2023/06/Red-heartSign.gif";
       gif.className="rightinput";
       txt.className="rightinput";
       return 0;
    };
    let inputs = document.querySelectorAll(".div input");
    let day = Math.floor(diff / 3600 / 24);
    let hour = Math.floor((diff % (3600 * 24)) / 3600);
    let minut = Math.floor((diff % 3600) / 60);
    let second = Math.floor(diff % 60);
    inputs[0].value = day;
    inputs[1].value = hour;
    inputs[2].value = minut;
    inputs[3].value = second;
    return 1;
}
