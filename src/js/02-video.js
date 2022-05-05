import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = "videoplayer-current-time"
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', throttle(getTime,1000));
    player.on('play', setTime);
    
    
function getTime(){
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem(TIME_KEY, seconds)
    })
}

function setTime(){
    const savedTime = localStorage.getItem(TIME_KEY)
    player.setCurrentTime(savedTime)
    
}