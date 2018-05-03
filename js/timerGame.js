(function () {
    'use strict';
    var game = {
        startTime: null,
        displayArea: document.getElementById('display-area'),
        start: function () {
            game.startTime = new Date().getTime();
            document.body.onkeypress = game.stop;
        },
        stop: function () {
            var currentTime = new Date().getTime();
            var seconds = (currentTime - game.startTime) / 1000;
            if (9.5 < seconds && seconds < 10.5) {
                game.displayArea.innerText = 'The result was ' + seconds + 'sec. Congratulations!';
            } else {
                game.displayArea.innerText = 'The result was ' + seconds + 'sec. Too bad.';
            }
        }
    };

    var startBtn = document.getElementById('startBtn');
    startBtn.onclick = game.start;

    var stopBtn = document.getElementById('stopBtn');
    stopBtn.onclick = game.stop;
})();