// script.js
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // 遍历数组
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]); // 如果以 "j" 或 "J" 开头
        } else {
            helloSpeaker.speak(names[i]); // 其他情况
        }
    }
})();
