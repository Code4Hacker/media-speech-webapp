let inputBx, configBtn,concatURL;
inputBx = document.querySelector("#URL_YT");
configBtn = document.getElementById("getRes");
configBtn.addEventListener("click", () => {
    window.location = "https://ytmp3cut.com/"+inputBx.value;
});
document.querySelector(".HomePage").addEventListener("click",() => {
    this.scroll(scrollTo(200));
});
