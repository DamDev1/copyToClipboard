const clipboard = document.querySelector(".clip")

clipboard.addEventListener("click", function(){
    const simpletext = document.querySelector(".simpleText");
    textAlert = document.querySelector(".simpleText").value;

    simpletext.select();
    simpletext.setSelectionRange(0, 999);
    document.execCommand("copy");

    setTimeout(function(){
        document.querySelector(".display").textContent = `${textAlert}: your text as been copied to your clipboard`;
    }, 100)
})