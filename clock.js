function showtime()
{
     var time = new Date();
     var hours = time.getHours();
     var min = time.getMinutes();
     var sec = time.getSeconds();

     var currentTime = hours + ":" + min + ":" + sec ;
     document.getElementById("clock").innerHTML = currentTime;
     
     setInterval(showtime,1000);
}
showtime();