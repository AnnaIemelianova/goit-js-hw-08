import Player from "@vimeo/player";
import throttle from "lodash.throttle";


//Ініціалізуй плеєр у файлі скрипта
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

//Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time"
const onPlay = function(event) {
    // console.log(event.seconds);
    localStorage.setItem(STORAGE_KEY, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

//Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);



