
let lstDate=new Date(document.getElementById("end_time").value);
let inputs=document.querySelectorAll(".div input");
countdown();

setInterval(() => {
    countdown();
}, 1000);