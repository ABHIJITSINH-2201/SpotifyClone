console.log('Wel-come to spotify.');
let songIndex=0;
let audioElement1= new Audio('songs/werollin.mp3');
let audioElement2 = new Audio('songs/elevated.mp3');
let audioElement3 = new Audio('songs/nolove.mp3');
let audioElement4 = new Audio('songs/offshore.mp3');
let play1 = document.getElementById('Play1');
let play2 = document.getElementById('Play2');
let play3 = document.getElementById('Play3');
let play4 = document.getElementById('Play4');
let pause = document.getElementById('Pause');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('range');
let songs=[
    {songName:"WE ROLLIN", filePath:"songs/werollin.mp3", coverPath:"cover/werollin.jfif"},
    {songName:"ELEVATED", filePath:"songs/elevated.mp3", coverPath:"cover/elevated.jfif"},
    {songName:"NO LOVE", filePath:"songs/nolove.mp3", coverPath:"cover/nolove.jfif"},
    {songName:"OFFSHORE", filePath:"songs/offshore.mp3", coverPath:"cover/offshore.jfif"}
]


//time update
audioElement1.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement1.currentTime/audioElement1.duration)*100);
    myProgressBar.value =progress;
})


audioElement2.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement2.currentTime/audioElement2.duration)*100);
    myProgressBar.value =progress;
})

audioElement3.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement3.currentTime/audioElement3.duration)*100);
    myProgressBar.value =progress;
})

audioElement4.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement4.currentTime/audioElement4.duration)*100);
    myProgressBar.value =progress;
})

//progressbar
myProgressBar.addEventListener("change",()=>{
    audioElement1.currentTime = (myProgressBar.value*audioElement1.duration)/100;
})

myProgressBar.addEventListener("change",()=>{
    audioElement2.currentTime = (myProgressBar.value*audioElement2.duration)/100;
})

myProgressBar.addEventListener("change",()=>{
    audioElement3.currentTime = (myProgressBar.value*audioElement3.duration)/100;
})

myProgressBar.addEventListener("change",()=>{
    audioElement4.currentTime = (myProgressBar.value*audioElement4.duration)/100;
})

//play songs

if(play1.addEventListener('click',()=>{
    if(audioElement1.paused || audioElement1.currentTime<=0){
        audioElement2.pause();
        audioElement3.pause();
        audioElement4.pause();
        audioElement1.play('songs/werollin.mp3');   
        gif.style.opacity=1;
    } 
})){}

else if(play2.addEventListener('click',()=>{
    if(audioElement2.currentTime==0 || audioElement2.paused){
        audioElement1.pause();
        audioElement3.pause();
        audioElement4.pause();
        audioElement2.currentTime=0;
        audioElement2.play('songs/elevated.mp3');   
        gif.style.opacity=1;
    } 
})){}

else if(play3.addEventListener('click',()=>{
    if(audioElement3.currentTime==0 || audioElement3.paused){
        audioElement1.pause();
        audioElement2.pause();
        audioElement4.pause();
        audioElement3.currentTime=0;
        audioElement3.play('songs/nolove.mp3');   
        gif.style.opacity=1;
    } 
})){}

else if(play4.addEventListener('click',()=>{
    if(audioElement4.currentTime==0 || audioElement4.paused){
        audioElement1.pause();
        audioElement2.pause();
        audioElement3.pause();
        audioElement4.currentTime=0;
        audioElement4.play('songs/elevated.mp3');   
        gif.style.opacity=1;
    } 
})){}

//pause song

if( pause.addEventListener("click",()=>{
    if(audioElement1.play ){
        audioElement1.pause();
    }
})){}
else if( pause.addEventListener("click",()=>{
    if(audioElement2.play ){
        audioElement2.pause();
    }
})){}
else if( pause.addEventListener("click",()=>{
    if(audioElement3.play ){
        audioElement3.pause();
    }
})){}
else if( pause.addEventListener("click",()=>{
    if(audioElement4.play ){
        audioElement4.pause();
    }
})){}
