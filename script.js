const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'birds', 'bonfire', 'fireplace', 'forest', 'rain', 'rainforest','ocean']


sounds.forEach(sound => {

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
        //alert(sound)
    })
    document.getElementById('buttons').appendChild(btn);
})



function stopSongs(){

    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })

}