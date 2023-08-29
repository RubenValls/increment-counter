const twitterFollowers = 12000;
const youtubeSubscribers = 5000;
const facebookFans = 7500;

const twitterCounter = document.querySelector("#twitter-counter");
const youtubeCounter = document.querySelector("#youtube-counter");
const facebookCounter = document.querySelector("#facebook-counter");

let twitterInterval;

const incrementer = (counter, limit, interval) => {
    if(Number(counter.textContent) === limit){
        window.clearInterval(interval);
    }else{
        counter.textContent = Number(counter.textContent) + 50;
    }
}

twitterInterval = setInterval(() => incrementer(twitterCounter, twitterFollowers, twitterInterval), 5)
youtubeInterval = setInterval(() => incrementer(youtubeCounter, youtubeSubscribers, youtubeInterval), 10)
facebookInterval = setInterval(() => incrementer(facebookCounter, facebookFans, facebookInterval), 8)
