function clock() {
    //to get updated time for every second
    setInterval(() => {
        var date=new Date();
        var hour=date.getHours();
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var time=`<h1>  ${hour}:${minutes}:${seconds}</h1> `;
    document.getElementById("template").innerHTML=time;
    },1000);
}
clock();
