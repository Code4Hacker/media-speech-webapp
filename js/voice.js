var textArea = document.querySelector("#textArea");
var wordsCount = document.querySelector(".wordsCount");
var DEL = document.querySelector(".DELETE");
let speech,pauseSpeech,resumeSpeech,cancelSpeech;
let txtfl,type,size,result;
pauseSpeech = document.querySelector(".pauses");
resumeSpeech = document.querySelector(".resume");
cancelSpeech = document.querySelector(".stop");
size = document.querySelector(".size");
type = document.querySelector(".typeTxt");
txtfl = document.getElementById("textfile");
cancelSpeech.addEventListener("click", () => {
    window.speechSynthesis.cancel();
});
pauseSpeech.addEventListener("click", () => {
   if(window.speechSynthesis.speaking == true){
        window.speechSynthesis.pause();
        jQuery(".resume").fadeIn({duration:200});
        jQuery(".pauses").fadeOut({duration:200});
   }else{
        jQuery(".resume").fadeIn({duration:200});
        jQuery(".pauses").fadeOut({duration:200});
        alert("Speech already In Paused!");
   }
});
resumeSpeech.addEventListener("click", () => {
    if(window.speechSynthesis.paused == true){
        window.speechSynthesis.resume();
        jQuery(".resume").fadeOut({duration:200});
        jQuery(".pauses").fadeIn({duration:200});
   }else{
        jQuery(".resume").fadeOut({duration:200});
        jQuery(".pauses").fadeIn({duration:200});
        alert("Speech already Resumed! Maybe click Start.");
   }
});

function textFind(){
    txtfl.click();
}
function roundTo(value, places){
    var power = Math.pow(100, places);
    return Math.round(value * power) / power;
}
txtfl.onchange = function(event){
    let files = event.target.files[0];
    if(files){
        let filereader = new FileReader();
        filereader.onloadstart = function(){
            jQuery(".chooseFile").removeClass("animation__animate animate__animated animate__fadeInDown").addClass("animation__animate animate__animated animate__fadeOutUp");
            jQuery(".chooseFile").fadeOut({duration:1000});
        }
        filereader.onload = function(){
            result = filereader.result;
            textArea.value = result;
            let calculators = (files.size/1049530.051813472);
            size.innerHTML = roundTo(calculators, 2) + "MB";
            wordsCount.innerHTML = textArea.value.length+"W-Length";
        }
        filereader.onloadend = function(){
            type.innerHTML = files.type;
            console.log(files.type);
        }
        
        filereader.readAsText(files);
    }
}
function start(){
    speech = new SpeechSynthesisUtterance();
    if(window.speechSynthesis.speaking == true){
        alert("Speech Is Still Running >>>...");

    }else{
        if(textArea.value.length === 0){
            let text = "I can't find the words to speak. please write Something here.or Upload the file";
            speech.text=text;
            window.speechSynthesis.speak(speech);
        }else{
            speech.text = textArea.value;
            window.speechSynthesis.speak(speech);
        }
    }

}

DEL.addEventListener('click',()=>{
    textArea.value="";
    wordsCount.innerHTML ="0W-Length";
    size.innerHTML = `0 MB`;
    type.innerHTML = "Write";
});
function getInfo(){
    wordsCount.innerHTML = textArea.value.length+"W-Length";
    if(textArea.value.length ==0){
        type.innerHTML = "Write";
    }else{
        type.innerHTML = "Writing...";
    }
};
