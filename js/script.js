let sec = document.querySelector(".s");
let min = document.querySelector(".m");
let hour = document.querySelector(".h");
let hoursNumber = document.querySelector(".hours");
let minutesNumber = document.querySelector(".minutes");

function clock() {
    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;

    sec.style.transform = `rotate(${seconds}deg)`
    hour.style.transform = `rotate(${hours}deg)`
    min.style.transform = `rotate(${minutes}deg)`

    setTimeout(() => clock(), 1000)
    hoursNumber.innerHTML = time.getHours() < 9 ? "0" + time.getHours() : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 9 ? "0" + time.getMinutes() : time.getMinutes();
}
clock()

let links = document.querySelectorAll(".tabsItem");
let tabs = document.querySelectorAll(".tabsContentItem");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        e.preventDefault()
        for (let x = 0; x < tabs.length; x++) {
            links[x].classList.remove("active")
            tabs[x].classList.remove("active")
        }
        links[i].classList.add("active")
        tabs[i].classList.add("active")
    })
}

let watchBtn = document.querySelector(".stopwatch__btn");
let watchSpan = document.querySelector(".tabsLink__span");
let watchSeconds = document.querySelector(".stopwatch__seconds");
let watchMinutes = document.querySelector(".stopwatch__minutes");
let watchHours = document.querySelector(".stopwatch__hours");

watchBtn.addEventListener("click", function() {
    if(watchBtn.innerHTML == "start") {
        watchBtn.innerHTML = "stop"
        watchSpan.classList.add("active")
        let i = 0; 
        stopWatch(this, i)
    }else if(watchBtn.innerHTML == "stop") {
        watchBtn.innerHTML = "clear"
        watchSpan.classList.remove("active")
        watchSpan.classList.add("active_clear")
    }else {
        watchBtn.innerHTML = "start"
        watchSpan.classList.remove("active_clear")
        
    }
})

function stopWatch(btn, i) {
    if(btn.innerHTML == "stop") {
        if(i == 59) {
            i = 0
            watchSeconds.innerHTML = i
            if(watchMinutes.innerHTML == 59) {
                watchMinutes.innerHTML = 0
                watchHours.innerHTML++
            }else {
                watchMinutes.innerHTML++
            }
        }else {
            i++
            watchSeconds.innerHTML = i
        }
        setTimeout(() => stopWatch(btn, i), 1000)
    }
}