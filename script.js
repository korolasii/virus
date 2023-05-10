window.onload = function () {
    let paralax = document.querySelector('.paralax'),
    speed = 0.05,
    positionX = 0,
    positionY = 0,
    coordXprocent = 0,
    coordYprocent = 0,
    btnDownload = document.getElementsByClassName('btnDownload'),
    progresConteiner = document.getElementsByClassName('progresConteiner'),
    progress = document.getElementsByClassName('download'),
    progresProcent = document.getElementsByClassName('progres'),
    timer,
    i,
    wormAudio = document.getElementById('audioWorm'),
    rootkitAudio = document.getElementById('rootkitAudio'),
    spywareAudio = document.getElementById('spywareAudio'),
    zombieAudio = document.getElementById('zombieAudio'),
    adwareAudio = document.getElementById('adwareAudio'),
    winlockAudio = document.getElementById('winlockAudio'),
    trojanAudio = document.getElementById('trojanAudio'),
    Worm = document.getElementsByClassName('btnPlayWorm'),
    Rootkit = document.getElementsByClassName('btnPlayRootkit'),
    Spyware = document.getElementsByClassName('btnPlaySpyware'),
    Zombie = document.getElementsByClassName('btnZombie'),
    Adware = document.getElementsByClassName('btnPlayAdware'),
    Winlock = document.getElementsByClassName('btnPlayWinlock'),
    Trojan = document.getElementsByClassName('btnPlayTojan');

    function setMouseParallaxStyle() {
        let distX = coordXprocent - positionX,
        distY = coordYprocent - positionY;

        positionX = positionX + (distX*speed)
        positionY = positionY + (distY*speed)

        paralax.style = `transform: translate(${positionX/40}%,${positionY/40}%)`

        requestAnimationFrame(setMouseParallaxStyle)
    }

    function stop(){
        wormAudio.pause()
        rootkitAudio.pause()
        spywareAudio.pause()
        zombieAudio.pause()
        adwareAudio.pause()
        winlockAudio.pause()
        trojanAudio.pause()
    }

    function progres(){
        console.log(i)
        if (i<=100){
            progress[0].value = i
            progresProcent[0].innerHTML = `${i}%`
            i++
        }else{
            clearTimeout(timer);
            i = 0
            $(progresConteiner).css('display', 'none');
        }
    }

    setMouseParallaxStyle();

    window.addEventListener('mousemove',function(e){
        let paralaxWidth = paralax.offsetWidth,
        paralaxHeight = paralax.offsetHeight,
        coordX = e.pageX - paralaxWidth/2,
        coordY = e.pageY - paralaxHeight/2;

        coordXprocent = coordX / paralaxWidth * 100
        coordYprocent = coordY / paralaxHeight * 100
    })

    $(btnDownload).click(function () { 
        clearTimeout(timer);
        i = 0
        $(progresConteiner).css('display', 'flex');
        timer = setInterval(function () {
            progres()
        }, 100);
    });

    $(Worm).click(function () { 
        stop()
        wormAudio.play()
    });

    $(Rootkit).click(function (e) { 
        stop()
        rootkitAudio.play()
    });

    $(Spyware).click(function (e) { 
        stop()
        spywareAudio.play()
    });

    $(Zombie).click(function (e) { 
        stop()
        zombieAudio.play()
    });

    $(Adware).click(function (e) { 
        stop()
        adwareAudio.play()
    });

    $(Winlock).click(function (e) { 
        stop()
        winlockAudio.play()
    });

    $(Trojan).click(function (e) { 
        stop()
        trojanAudio.play()
    });
}