// Initialize an audio object with a default song
const music = new Audio('arijitsongs/06.mp3');

// Array containing all song details
const allsongs = [
    // Song objects with id, songName, and poster properties
    { id: '1', songName: `Akhiyaan Gulaab <br><div class="artist">Mitraz</div>`, poster: "img1/1.jpg" },
    { id: '2', songName: `Teri baaton mein aisa uljha jiya <br><div class="artist">Raghav, Asees kaur , tanishk</div>`, poster: "img1/2.jpg" },
    { id: '3', songName: `Maan Mera  <br><div class="artist">Gajendra</div>`, poster: "img1/3.jpg" },
    { id: '4', songName: `Rata lambiya<br><div class="artist">Jubin Nautiyal Asees kaur</div>`, poster: "img1/4.jpg" },
    { id: '5', songName: `Lut Gye  <br><div class="artist">jubin Nautiyal</div>`, poster: "img1/5.jpg" },
    { id: '6', songName: `O maahi  <br><div class="artist">Arijit Singh</div>`, poster: "img1/6.jpg" },
    { id: '7', songName: `Heeriye <br><div class="artist">Jasleen $ Arijit</div>`, poster: "img1/7.jpg" },
    { id: '8', songName: `Keshriya<br><div class="artist">Arijit</div>`, poster: "img1/8.jpg" },
    { id: '9', songName: `Maan meri jan <br><div class="artist">King</div>`, poster: "img1/9.jpg" },
    { id: '10', songName: `Kabhi saam dhale <br><div class="artist">Mohammad Faiz</div>`, poster: "img1/10.jpg" },
    { id: '11', songName: `Suroor tera chha gya <br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/11.jpg" },
    { id: '12', songName: `Ashiq bnaya aapne <br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/12.jpg" },
    { id: '13', songName: `Jhalak dikhlaja <br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/13.webp" },
    { id: '14', songName: `teri meri<br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/14.jpg" },
    { id: '15', songName: `Yad staye teri <br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/15.jpg" },
    { id: '16', songName: `Hari om <br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/16.jpg" },
    { id: '17', songName: `AAshiqana AAlam<br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/17.jpg" },
    { id: '18', songName: `Lagi lage<br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/18.jpg" },
    { id: '19', songName: `Tum Sansoon me<br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/19.jpg" },
    { id: '20', songName: `Ashiqui me teri<br><div class="artist">Himesh Reshammiya,</div>`, poster: "himeshimg/20.jpg" },
    { id: '20', songName: `Sari sari art<br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/21.jpg" },
    { id: '20', songName: `Lolnely lolnely<br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/22.jpg" },
    { id: '20', songName: `Long drive<br><div class="artist">Himesh Reshammiya,</div>`, poster: "himeshimg/23.jpg" },
    { id: '20', songName: `Hookah Bar<br><div class="artist">Himesh Reshammiya</div>`, poster: "himeshimg/24.jpg" },
];

// Load song posters and titles into the song items
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = allsongs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = allsongs[i].songName;
});

// Element references
let mainBottom = document.getElementById('mainBottom');
let disco = document.getElementById('disco');
let bottomimg = document.getElementById('bottomimg');
let title = document.getElementById('title');
let Download = document.getElementById('Download');
let playSong = document.getElementById('playSong');

// Play/Pause button event listener
playSong.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        disco.classList.add("active1");
        playSong.classList.remove("fa-play");
        playSong.classList.add("fa-pause");
        playSong.style.color = "red";

        // Update bottomimg to show the current song's image
        bottomimg.src = allsongs[index].poster;
    } else {
        music.pause();
        disco.classList.remove("active1");
        playSong.classList.remove("fa-pause");
        playSong.classList.add("fa-play");
        playSong.style.color = "yellow";

        // Optionally, change bottomimg when paused
        bottomimg.src = 'wow.png';
    }
});

// Function to reset the background of all song items
const hideone = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((elm) => {
        elm.style.background = "rgb(105, 105, 105, .0)";
    });
}


// Function to reset the icons of all play buttons
const changeIcon = () => {
    Array.from(document.getElementsByClassName('playBtn')).forEach((el) => {
        el.classList.add("fa-circle-play");
        el.classList.remove("fa-circle-pause");
        el.style.color = "yellow";
    });
}

// Variable to track the current song index
let index = 0;

// Event listener for each play button in the song list
Array.from(document.getElementsByClassName('playBtn')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        let musicSrc = `himeshsongs/${index}.mp3`;

        if (music.paused || music.src !== window.location.href + musicSrc) {
            music.src = musicSrc;
            bottomimg.src = `img/${index}.jpg`;
            music.play();
            playSong.classList.remove("fa-play");
            playSong.classList.add("fa-pause");
            playSong.style.color = "red";

            const song = allsongs[index - 1];

            function extractTextFromHtml(html) {
                let doc = new DOMParser().parseFromString(html, 'text/html');
                return doc.body.textContent || "";
            }

            const songNameWithoutHtml = extractTextFromHtml(song.songName);

            Download.href = `himeshsongs/${song.id}.mp3`;
            let downloadLink = document.getElementById("Download");
            downloadLink.setAttribute("download", songNameWithoutHtml);

            let songName = allsongs.find((els) => els.id == index).songName;
            title.innerHTML = songName;

            hideone();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 1)";

            changeIcon();
            el.target.classList.remove("fa-circle-play");
            el.target.classList.add("fa-circle-pause");
        } else {
            music.pause();
            el.target.classList.remove("fa-circle-pause");
            el.target.classList.add("fa-circle-play");
            playSong.classList.remove("fa-pause");
            playSong.classList.add("fa-play");
            playSong.style.color = "yellow";
        }
    });
});

// Elements for time updates and progress bar
let mainTime = document.getElementById("mainTime");
let mainTimeend = document.getElementById("mainTimeend");
let timeBar = document.getElementById("timeBar");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

// Update time and progress bar as the song plays
music.addEventListener("timeupdate", () => {
    let music_crt = music.currentTime;
    let music_time = music.duration;

    let min1 = Math.floor(music_time / 60);
    let sec1 = Math.floor(music_time % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    mainTimeend.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_crt / 60);
    let sec2 = Math.floor(music_crt % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    mainTime.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_crt / music_time) * 100);
    timeBar.value = progressBar;

    let timeBarscroll = timeBar.value;
    bar2.style.width = `${timeBarscroll}%`;
    dot.style.left = `${timeBarscroll}%`;
});

// Change song current time when progress bar is adjusted
timeBar.addEventListener('change', () => {
    music.currentTime = timeBar.value * music.duration / 100;
});

// Previous and next song buttons
let prv = document.getElementById("prv");
let next = document.getElementById("next");

// Play the previous song
prv.addEventListener("click", () => {
    index = (index - 1 + allsongs.length) % allsongs.length;

    let musicSrc = `himeshsongs/${index + 1}.mp3`;
    music.src = musicSrc;
    bottomimg.src = allsongs[index].poster;
    title.innerHTML = allsongs[index].songName;

    if (music.paused || music.src !== window.location.href + musicSrc) {
        music.play();
        playSong.classList.remove("fa-play");
        playSong.classList.add("fa-pause");
        playSong.style.color = "red";
    }

    hideone();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 105, 1)";
    changeIcon();
    el.target.classList.remove("fa-circle-play");
    el.target.classList.add("fa-circle-pause");
});

// Play the next song
next.addEventListener("click", () => {
    index++;
    if (index >= allsongs.length) {
        index = 0;
    }

    let musicSrc = `himeshsongs/${index + 1}.mp3`;
    music.src = musicSrc;
    bottomimg.src = allsongs[index].poster;
    title.innerHTML = allsongs[index].songName;

    music.play();
    playSong.classList.remove("fa-play");
    playSong.classList.add("fa-pause");
    playSong.style.color = "red";

    hideone();
    Array.from(document.getElementsByClassName('songItem')).forEach((item, i) => {
        item.style.background = i === index ? "rgb(105, 105, 105, 1)" : "rgb(105, 105, 105, .0)";
    });


});






    let tophead_left = document.getElementById("tophead_left");
    let tophead_right = document.getElementById("tophead_right");
    let forYousong = document.getElementsByClassName("forYousong")[0];

    tophead_right.addEventListener("click", () => {
        forYousong.scrollLeft += 280;
    });

    tophead_left.addEventListener("click", () => {
        forYousong.scrollLeft -= 280;
    });

    // Adding event listener to update bottomimg when a song item is clicked
    Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
        e.addEventListener('click', () => {
            bottomimg.src = allsongs[i].poster;
        });
    });
    let mainArtist_left = document.getElementById("mainArtist_left");
    let mainArtist_right = document.getElementById("mainArtist_right");
    let forArtist = document.getElementsByClassName("forArtist")[0];

    mainArtist_right.addEventListener("click", () => {
        forArtist.scrollLeft += 280;
    });

    mainArtist_left.addEventListener("click", () => {
        forArtist.scrollLeft -= 280;
    });
