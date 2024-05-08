let prev = document.getElementsByTagName('button')[0]
let play = document.getElementsByTagName('button')[1]
let next = document.getElementsByTagName('button')[2]
let statusMusic = document.getElementsByClassName('stausmusic')[0]
let totalTime = document.getElementsByTagName('p')[1]

let lasTime = document.getElementsByTagName('p')[2]

let paystatus = "play"

const audio = new Audio('assets/Dusk_Till_Dawn_-_ZAYN_ft_Sia_-_Tiktok_.m4a')
// audio.controls = "controls";

play.addEventListener('click',playMusic)
audio.addEventListener("timeupdate", updateProgressBar);

function playMusic(){
    
   
    if(paystatus  == "play"){
        audio.play()
        paystatus = "pause"
        play.innerHTML = "⏸️"

    }else if(paystatus == "pause"){
        audio.pause()
        paystatus = "play"
        play.innerHTML = "▶️"
    }
      
}

function updateProgressBar(){

    var currentTime = new Date(audio.currentTime * 1000)
    var duration = new Date(audio.duration * 1000)

   lasTime.innerHTML = duration.toISOString().slice(14, 19)
   totalTime.innerHTML = currentTime.toISOString().slice(14, 19);

   statusMusic.style.width = (currentTime / duration) * 100 + '%'
}

