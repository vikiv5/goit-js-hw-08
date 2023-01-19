import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = ({seconds}) => {
    localStorage.setItem("videoplayer-current-time", seconds);
    // data is an object containing properties specific to that event
};

player.on("timeupdate", throttle(onPlay,1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")||0);