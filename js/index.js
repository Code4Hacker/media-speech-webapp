let marquee = document.getElementById("marquee");
let open_file = document.getElementById("open_file");
let currentTime = document.getElementById("currentTime");
let sliderRunner = document.getElementById("range");
let modal_for_player =document.querySelector(".modal_for_player");
let minutes;
let seconds;
let  connector;
const jsmediatags = window.jsmediatags;
let data;
let format;
let title;
let musics = new Audio();
let filer;
let url;
let pictureImg;
let image = document.getElementById("mImg");
let base64String = "";
let listOfAudios = document.getElementById("playlist_list");
let plugger;
let e;
let Imag;
let titles;
let year;
let eachYear;
function getFile(){
    open_file.click();
    }
    function getThis(){
        filer = open_file.files;
        for (let i = 0; i < filer.length; i++) {
                jsmediatags.read(filer[i], {
                onSuccess: function(tag){
                    data = tag.tags.picture.data;
                    format = tag.tags.picture.format;
                    title = filer[i].name;
                    year = tag.tags.year;
                    url = URL.createObjectURL(filer[i]);
                        for (let index = 0; index < data.length; index++){
                        base64String += String.fromCharCode(data[index]);
                        
                        }
                    pictureImg=`data:${format};base64,${window.btoa(base64String)}`;
                    myCard(title,url);
                },
                onError: function(tag){
                    console.log("Error");
                }
            });
    }
    function myCard(title,url){
        
        document.getElementById("playlist_list").innerHTML +=`
                <li class="listing">
                    <div class="songName">
                        <p style="text-align:start;">
                            <span><i class="bi bi-three-dots-vertical"></i></span><span class="nnnn" style="display:none;">${year}</span><span class="name">${title}</span></p>
                        <span>
                            <div class="fixMe">
                                <button class="sing"><i class="bi bi-play-fill"></i></button>
                                <audio onclick="
                                        musics.pause();
                                        musics.src = this.src;
                                        musics.play();
                                        
                                " src="${url}" class="plays" controls=""></audio>
                                
                            </div>
                        </span>
                    </div>
                </li>
            `;
            plugger = listOfAudios.innerHTML;
            plugger = document.querySelectorAll('.plays');
            titles = listOfAudios.innerHTML;
            titles = document.querySelectorAll('.name');
            eachYear = listOfAudios.innerHTML;
            eachYear = document.querySelectorAll('.nnnn');
            loadmyFL();
            if(plugger.length>1){
                document.getElementById("songsLength").innerHTML=plugger.length+" songs";
            }else{
                document.getElementById("songsLength").innerHTML=plugger.length+" song";
            }
            function loadmyFL(){
              
               if(musics.paused == true){
                    musics.src = plugger[0].src;
                    image.style.backgroundImage=`url(${pictureImg})`;
                    musics.play();
                    marquee.innerHTML = titles[0].textContent;
                    document.getElementById("currentPlays").innerHTML=titles[0].textContent;
                    document.getElementById("Years").innerHTML="Year: "+eachYear[0].textContent;
                    modal_for_player.style.display="block";
                    setTimeout(() => {
                     modal_for_player.style.display="none";
                    }, 3300);
                    jQuery(".play i").removeClass("bi bi-play-fill").addClass("bi bi-pause-fill");
                }
    }    
}
}
function progress(){
sliderRunner.value = (musics.currentTime / musics.duration) * 100;
minutes = Math.floor(musics.currentTime / 60);
seconds = Math.floor(musics.currentTime % 60);
if(seconds < 10){
        seconds = "0"+seconds;
    }else{
        seconds = ""+seconds;
}
if(minutes < 10){
        minutes = "0"+minutes;
    }else{
        minutes = ""+minutes;
}
connector = `${minutes}:${seconds}`;
currentTime.innerHTML =connector;
minute = Math.floor(musics.duration / 60);
second = Math.floor(musics.duration % 60);
if(second < 10){
        second = "0"+second;
    }else{
        second = ""+second;
}
if(minute < 10){
        minute = "0"+minute;
    }else{
        minute = ""+minute;
}
End =  `${minute}:${second}`;
document.getElementById("EndTime").innerHTML = End;
setTimeout(progress,1000);
}
progress();
setTimeout(progress,1000);
sliderRunner.onchange = function(){
musics.currentTime = sliderRunner.value;
};
function stopProgress(){
window.location = window.location;
}

document.getElementById("forward").addEventListener("click", () => {
let freePlus = 5;
musics.currentTime = musics.currentTime + freePlus;
freePlus++;
});
document.getElementById("backward").addEventListener("click", () => {
let freePlus = 5;
musics.currentTime = musics.currentTime - freePlus;
freePlus++;
});
var pos = 1;
document.querySelector('.next').addEventListener('click', () => {
    console.log("Next: "+plugger[pos].src);
    musics.pause();
    musics.src = plugger[pos].src;
    marquee.innerHTML = titles[pos].textContent;
    image.style.backgroundImage=`url(${pictureImg})`;
    document.getElementById("currentPlays").innerHTML=titles[pos].textContent;
    document.getElementById("Years").innerHTML="Year: "+year;
     modal_for_player.style.display="block";
    setTimeout(() => {
     modal_for_player.style.display="none";
    }, 3300);
    musics.play();
    document.getElementById("currentPlays").innerHTML=titles[pos].textContent;
    document.getElementById("Years").innerHTML="Year: "+eachYear[pos].textContent;
     modal_for_player.style.display="block";
    setTimeout(() => {
     modal_for_player.style.display="none";
    }, 3300);
    pos++;
    if(pos >= plugger.length) {
        pos = 0;
    }
    jQuery(".play i").removeClass("bi-play-fill").addClass("bi-pause-fill");
});
document.querySelector('.next1').addEventListener('click', () => {
    console.log("Next: "+plugger[pos].src);
    musics.pause();
    musics.src = plugger[pos].src;
    marquee.innerHTML = titles[pos].textContent;
    image.style.backgroundImage=`url(${pictureImg})`;
    musics.play();
    document.getElementById("currentPlays").innerHTML=titles[pos].textContent;
    document.getElementById("Years").innerHTML="Year: "+eachYear[pos].textContent;
     modal_for_player.style.display="block";
    setTimeout(() => {
     modal_for_player.style.display="none";
    }, 3300);
    pos++;
    if(pos >= plugger.length) {
        pos = 0;
    }
    jQuery(".play i").removeClass("bi-play-fill").addClass("bi-pause-fill");
});
            
document.querySelector('.previous').addEventListener('click', () => {
console.log("Prev: "+plugger[pos].src);
musics.pause();
musics.src = plugger[pos].src;
marquee.innerHTML = titles[pos].textContent;
image.style.backgroundImage=`url(${pictureImg})`;
musics.play();
document.getElementById("currentPlays").innerHTML=titles[pos].textContent;
document.getElementById("Years").innerHTML="Year: "+eachYear[pos].textContent;
 modal_for_player.style.display="block";
setTimeout(() => {
 modal_for_player.style.display="none";
}, 3300);
pos--;
    if(pos < 0) {
        pos++;
}else{
    
}
jQuery(".play i").removeClass("bi-play-fill").addClass("bi-pause-fill");
});

document.querySelector('.previous1').addEventListener('click', () => {
    console.log("Prev: "+plugger[pos].src);
    musics.pause();
    musics.src = plugger[pos].src;
    marquee.innerHTML = titles[pos].textContent;
    image.style.backgroundImage=`url(${pictureImg})`;
    musics.play();
    document.getElementById("currentPlays").innerHTML=titles[pos].textContent;
    document.getElementById("Years").innerHTML="Year: "+eachYear[pos].textContent;
     modal_for_player.style.display="block";
    setTimeout(() => {
     modal_for_player.style.display="none";
    }, 3300);
    pos--;
        if(pos < 0) {
            pos++;
    }else{
        
    }
    jQuery(".play i").removeClass("bi-play-fill").addClass("bi-pause-fill");
    });
function loops() {
if(musics.loop === true){
   musics.loop = false;
   jQuery(".Control_List button:nth-child(2)").removeClass("hover");
}else{
   musics.loop = true;
   jQuery(".Control_List button:nth-child(2)").addClass("hover");
   
}
}
   function plas(){
       if(musics.currentTime == musics.duration){
            console.log("Autoplay: "+plugger[pos].src);
            musics.pause();
            musics.src = plugger[pos].src;
            marquee.innerHTML = titles[pos].textContent;
            image.style.backgroundImage=`url(${pictureImg})`;
            console.log(image.style.backgroundImage=`url(${pictureImg})`);
            musics.play();
            document.getElementById("currentPlays").innerHTML=titles[pos].textContent;
            document.getElementById("Years").innerHTML="Year: "+eachYear[pos].textContent;
             modal_for_player.style.display="block";
            setTimeout(() => {
             modal_for_player.style.display="none";
            }, 3300);
            pos++;
            if(pos >= plugger.length) {
                pos = 0;
            }
            jQuery(".play i").removeClass("bi-play-fill").addClass("bi-pause-fill");
       }
setTimeout(plas, 100);
   }
   setTimeout(plas, 100);
   function Play(){
    if(plugger.length > 0){
        if(musics.paused == true){
            musics.play();
            jQuery(".play i").removeClass("bi-play-fill").addClass("bi-pause-fill");
        }else{
            musics.pause();
            jQuery(".play i").removeClass("bi-pause-fill").addClass("bi-play-fill");
     }
    }
   }