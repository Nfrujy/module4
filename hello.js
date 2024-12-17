// hello.js
(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hello";

    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.helloSpeaker = helloSpeaker; // 暴露到全局对象
})(window);
