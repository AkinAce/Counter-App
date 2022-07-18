import React from 'react';
import '../index.css';

let date1 = new Date("2018,07,19");
let date2 = new Date("2018,07,18");
let diff = date1.getTime() - date2.getTime();
let today = new Date();
let diffs = today.getTime() - date1.getTime();

var countDownDate = localStorage.getItem('startDate');
if (countDownDate) {
    countDownDate = new Date("2018,07,20");
} else {
    countDownDate = new Date();
    localStorage.setItem('startDate', countDownDate);
}
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = now - countDownDate.getTime();

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var years = ((distance / (1000 * 60 * 60 * 24))/365).toLocaleString();
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor(distance / (1000 * 60));
    var seconds = Math.floor(distance / (1000 ));

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = years[0] + " Years" + "<br />" 
    +days + " Days" + "<br />"
    + hours + " Hours" + "<br />" 
    + minutes + " Minutes" + "<br />" 
    + seconds + " Seconds" + "<br />"
    + "of Loving You!";
}, 1000);

const Lover = () => {
    return (
        <div className="top-container">
            <div className="timer">
                <h1 id="demo"></h1>
                <iframe className='film'
        src="https://ik.imagekit.io/m7wnsef4h/2_YeIi5BllO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1658169725618"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}

                <h1>Cheers to more beautiful years my Baby!</h1>
                </div>
            
            </div>
      );
}
 
export default Lover;