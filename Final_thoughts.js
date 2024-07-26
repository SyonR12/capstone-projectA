//Final Thoughts Script

let big_div = document.getElementById('big_div');
let message_div = document.getElementById('message');
let second_message_div = document.getElementById('message2');

big_div.onclick = function() {
    big_div.style.display = 'none';
    message_div.style.display = 'block';
}

let time = 0;

let counterElement = document.getElementById("time");

function updateTime() {
    time++;
    counterElement.innerHTML = time;

    if (time === 5) {
        message_div.style.display = 'none';
        second_message_div.style.display = 'block';
    }

}
setInterval(updateTime,1000);