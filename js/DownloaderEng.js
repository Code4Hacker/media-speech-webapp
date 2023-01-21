let inputBx, configBtn,concatURL;
inputBx = document.querySelector("#URL_YT");
configBtn = document.getElementById("getRes");
configBtn.addEventListener("click", () => {
    if(configBtn.includes("https://youtube.com/")){
        window.location = "https://ytmp3cut.com/"+inputBx.value;
    }else if(configBtn.includes("youtube.com/")){
        window.location = "https://ytmp3cut.com/"+inputBx.value;
    }else if(configBtn.includes("m.youtube.com/")){
        window.location = "https://ytmp3cut.com/"+inputBx.value;
    }else if(configBtn.includes("m.youtu.be/")){
        window.location = "https://ytmp3cut.com/"+inputBx.value;
    }else if(configBtn.includes("youtu.be/")){
        window.location = "https://ytmp3cut.com/"+inputBx.value;
    }else{
        alert("INVALID URL!");
    }
});
document.querySelector(".HomePage").addEventListener("click",() => {
    this.scroll(scrollTo(200))
});
