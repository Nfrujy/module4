// goodbye.js
(function (window) {
    var byeSpeaker = {};
    var speakWord = "Goodbye";

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.byeSpeaker = byeSpeaker; // 暴露到全局对象
})(window);
