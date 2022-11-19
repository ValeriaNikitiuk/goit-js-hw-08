import throttle from  "lodash.throttle";
import Player from   "@vimeo/player";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);    
const STORAGE_KEY = 'videoplayer-current-time';




function onTimePlayer()  {
  player.getCurrentTime()
    .then (function (seconds) {
      localStorage.setItem(STORAGE_KEY, seconds)
    })
        .catch(function (error) {
          console.log(error);
        });
    }


player.on('play', throttle(onTimePlayer, 1000));
player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);

