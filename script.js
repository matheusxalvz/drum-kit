document.body.addEventListener('keyup',(event)=>{
    playSong(event.code.toLowerCase());
});
document.querySelector(".composer button").addEventListener("click",(event)=>{
    let song = document.querySelector("input").value;
    if(song){
    let songArray = song.split('');
    playComposition(songArray);
}
})



function playSong(song){
    let songElement = document.querySelector(`#s_${song}`);
    let keyElement = document.querySelector(`div[data-key="${song}"]`)
    if(songElement){
        keyElement.classList.add("active")
        songElement.currentTime = 0;
        songElement.play();
        setTimeout(()=>{
        keyElement.classList.remove("active")
        },300)
    }

}

function playComposition(songArray){
    let await = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSong(`key${songItem}`);
        },await);
        await += 250;
        
    }    
}