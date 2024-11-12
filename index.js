var names = ["Fouad", "Adebabs", "Lastcard"];
    function whosPaying(names){
        var num = names.length;
        var random = Math.floor(Math.random() * num);
        var randomPerson = names[random];
        return "Congratulations " + randomPerson + ", 🤝 you are paying for Keke today!😂";
    }
    

document.querySelector(".check").addEventListener("click", function(){
    document.querySelector("h2").innerHTML = (whosPaying(names));
    document.querySelector("h2").style.display = "block";
    document.querySelector("h2").style.textAlign = "center";
    var pick = new Audio('sounds/wrong.mp3');
    pick.play();
})

document.querySelector(".refresh").addEventListener("click", function(){
    document.querySelector("h2").style.display = "none";
    var refreshSound = new Audio('sounds/blue.mp3');
    refreshSound.play();
})