import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iFrame = document.querySelector('iframe')
const player = new Player(iFrame);

player.on('timeupdate', throttle(onPlayVideo, 1000));


function onPlayVideo({ seconds }) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.setCurrentTime((JSON.parse(localStorage.getItem('videoplayer-current-time'))))
    .then(function () {

}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
    }
});

// player.ready().then(function () {
//     player.play();
// });



