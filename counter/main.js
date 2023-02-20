let charholder = document.getElementById('charContainer');
let char = document.getElementById('char');
let word = document.getElementById('word');
  
charholder.addEventListener('input', function () {
    let content = this.value;
    char.textContent = content.length;
    content.trim();
    let wordList = content.split(/\s/);
    let words = wordList.filter(function (element) {
        return element != "";
    });

    word.textContent = words.length;
});