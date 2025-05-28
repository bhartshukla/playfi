

const music = new Audio('music/15.mp3');
// music.play()


const allsongs = [

    {
        id: '1',
        songName: `Akhiyaan Gulaab <br>
        <div class="artist">Mitraz</div>`,
        poster: "img/1.jpg",
    },

    {
        id: '2',
        songName: `Teri baaton mein aisa uljha jiya <br>
        <div class="artist">Raghav, Asees kaur , tanishk</div>`,
        poster: "img/2.jpg",
    },

    {
        id: '3',
        songName: `Maan Mera  <br>
        <div class="artist">Gajendra</div>`,
        poster: "img/3.jpg",
    },

    {
        id: '4',
        songName: `Rata lambiya<br>
        <div class="artist">Jubin Nautiyal Asees kaur</div>`,
        poster: "img/4.jpg",
    },

    {
        id: '5',
        songName: `Lut Gye  <br>
        <div class="artist">jubin Nautiyal</div>`,
        poster: "img/5.jpg",
    },

    {
        id: '6',
        songName: `O maahi  <br>
        <div class="artist">Arijit Singh</div>`,
        poster: "img/6.jpg",
    },

    {
        id: '7',
        songName: `Heeriye <br>
        <div class="artist">Jasleen $ Arijit</div>`,
        poster: "img/7.jpg",
    },

    {
        id: '8',
        songName: `Keshriya<br>
        <div class="artist">Arijit</div>`,
        poster: "img/8.jpg",
    },

    {
        id: '9',
        songName: `Maan meri jan <br>
        <div class="artist">King</div>`,
        poster: "img/9.jpg",
    },

    {
        id: '10',
        songName: `Kabhi saam dhale <br>
        <div class="artist">Mohammad Faiz</div>`,
        poster: "img/10.jpg",
    },

    {
        id: '11',
        songName: `Halka Halka <br>
        <div class="artist">Avvy Sra &Sagar & Danny</div>`,
        poster: "img/11.jpg",
    },

    {
        id: '12',
        songName: `Love does 2 <br>
        <div class="artist">Honi singh</div>`,
        poster: "img/12.jpg",
    },

    {
        id: '13',
        songName: `Akhiyaan Gulaab <br>
        <div class="artist">Mohammad Faiz</div>`,
        poster: "img/13.jpg",
    },

    {
        id: '14',
        songName: `Laal Pilli Akhiyaan<br>
        <div class="artist">Romy & tanishk bagchi</div>`,
        poster: "img/14.jpg",
    },

    {
        id: '15',
        songName: `Tera Fitoor<br>
        <div class="artist">Arijit shingh</div>`,
        poster: "img/15.jpg",
    },

    {
        id: '16',
        songName: `Tere Hawaale<br>
        <div class="artist">Arijit & Shilpa</div>`,
        poster: "img/16.jpg",
    },
    {
        id: '17',
        songName: `Saari Duniya Jalla Denge<br>
        <div class="artist">B Praak & Jaani</div>`,
        poster: "img/17.jpg",
    },
    {
        id: '18',
        songName: `Arjan Vally<br>
        <div class="artist">Bhupinder Babbal</div>`,
        poster: "img/18.jpg",
    },
    {
        id: '19',
        songName: `Mahiye Jinna Sohna<br>
        <div class="artist">Darshan Raval</div>`,
        poster: "img/19.jpg",
    },

    {
        id: '20',
        songName: `Malang Sajnaa<br>
        <div class="artist">Sachet Parampara,</div>`,
        poster: "img/20.jpg",
    },

    {
        id: '21',
        songName: `Baby Girl<br>
        <div class="artist">Dhvani Bhanushali and Guru Randhawa</div>`,
        poster: "img/21.jpg",
    },

    {
        id: '22',
        songName: `Main Rang Sarbaton KA<br>
        <div class="artist">Arijit Singh</div>`,
        poster: "img/22.jpg",
    },

    {
        id: '23',
        songName: `Sooraj Duba Hai<br>
        <div class="artist">Arijit singh</div>`,
        poster: "img/23.jpg",
    },


    {
        id: '24',
        songName: `Sanam RE<br>
        <div class="artist">Mithoon & Arijit singh</div>`,
        poster: "img/24.jpg",
    },



    {
        id: '25',
        songName: `Dhire Dhire se meri <br>
        <div class="artist">Yo Yo Honey singh</div>`,
        poster: "img/25.jpg",
    },


]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = allsongs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = allsongs[i].songName;
});

// ... search all songs ...
let searchresult = document.getElementsByClassName("searchresult")[0];
allsongs.forEach(element => {
    const { id, songName, poster } = element;

    let card = document.createElement("a");
    card.classList.add("card");
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>

    `;
    searchresult.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", () => {
    let input_value = input.value.toUpperCase();
    let items = searchresult.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName("content")[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            searchresult.style.display = "none"
        } else {
            searchresult.style.display = ""
        }

        // Add click event listener to each search result
        items[index].addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior

            // Extract song ID from href attribute
            let songId = event.currentTarget.href.split("#")[1];

            // Play the selected song
            playSongById(songId);
        });

    }
});


// // F


// Function to extract text content from HTML
function extractTextFromHtml(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}

// Function to play a song by its ID
function playSongById(songId) {
    // Find the song with the given ID
    let song = allsongs.find(song => song.id === songId);

    if (song) {
        // Extract text content from songName without HTML
        const songNameWithoutHtml = extractTextFromHtml(song.songName);

        // Construct the music source URL for the selected song
        let musicSrc = `music/${song.id}.mp3`;

        // Set the music source and play the song
        music.src = musicSrc;
        bottomimg.src = song.poster;
        title.innerHTML = songNameWithoutHtml; // Use the text content without HTML tags
        music.play();

        // Optionally, you can update the UI to indicate that the song is playing
        playSong.classList.remove("fa-play");
        playSong.classList.add("fa-pause");
        playSong.style.color = "red";

        // Set the download attribute of the download link
        let downloadLink = document.getElementById("Download");
        downloadLink.href = musicSrc;
        downloadLink.setAttribute("download", `${songNameWithoutHtml}.mp3`);
    }
}


// search result all completed

let mainBottom = document.getElementById('mainBottom');
let disco = document.getElementById('disco');

playSong.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        disco.classList.add("active1")
        playSong.classList.remove("fa-play")
        playSong.classList.add("fa-pause")
        playSong.style.color = "red"

    }
    else {
        music.pause();
        disco.classList.remove("active1")
        playSong.classList.remove("fa-pause")
        playSong.classList.add("fa-play")
        playSong.style.color = "yellow"


    }

});



const hideone = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((elm) => {
        elm.style.background = "rgb(105, 105, 105, .0)";
    })
}

const changeIcon = () => {
    Array.from(document.getElementsByClassName('playBtn')).forEach((el) => {
        el.classList.add("fa-circle-play")
        el.classList.remove("fa-circle-pause")
        el.style.color = "yellow"
    })
}



let index = 0;
let bottomimg = document.getElementById('bottomimg')
let title = document.getElementById('title')
let Download = document.getElementById('Download')

Array.from(document.getElementsByClassName('playBtn')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        let musicSrc = `music/${index}.mp3`;

        if (music.paused || music.src !== window.location.href + musicSrc) {
            // If music is paused or a different song is selected, play it
            music.src = musicSrc;
            bottomimg.src = `img/${index}.jpg`;
            music.play();
            playSong.classList.remove("fa-play");
            playSong.classList.add("fa-pause");
            playSong.style.color = "red";

            // Download.href = ` music/${index}.mp3`;


            //  chatGpt Code

            const song = allsongs[index - 1];

            // Function to extract text content from HTML
            function extractTextFromHtml(html) {
                let doc = new DOMParser().parseFromString(html, 'text/html');
                return doc.body.textContent || "";
            }

            // Extract text content from songName
            const songNameWithoutHtml = extractTextFromHtml(song.songName);

            // Set the download attribute of a link
            Download.href = `music/${song.id}.mp3`;
            let downloadLink = document.getElementById("Download");
            downloadLink.setAttribute("download", songNameWithoutHtml);

            // only here ??


            let songName = allsongs.find((els) => els.id == index).songName;
            title.innerHTML = songName;

            hideone();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 1)";

            changeIcon();
            el.target.classList.remove("fa-circle-play");
            el.target.classList.add("fa-circle-pause");
        }
        else {
            // If the clicked song is the same as the currently playing song, pause the music
            music.pause();
            el.target.classList.remove("fa-circle-pause");
            el.target.classList.add("fa-circle-play");
            playSong.classList.remove("fa-pause");
            playSong.classList.add("fa-play");
            playSong.style.color = "Yellow";
        }
    });
});

//  for the scrool bar timing....


let mainTime = document.getElementById("mainTime");
let mainTimeend = document.getElementById("mainTimeend");
let timeBar = document.getElementById("timeBar");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];


music.addEventListener("timeupdate", () => {
    let music_crt = music.currentTime;
    let music_time = music.duration;
    // console.log(music_crt);
    // console.log(music?_time);

    let min1 = Math.floor(music_time / 60);
    let sec1 = Math.floor(music_time % 60);

    // console.log(min1)
    // console.log(sec1)
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



    // Assuming music_crt and music_time are representing current time and total duration respectively
    let progressBar = parseInt((music_crt / music_time) * 100);
    timeBar.value = progressBar;

    // Assuming timeBar is an input element of type "range" representing the progress bar
    let timeBarscroll = timeBar.value;
    bar2.style.width = `${timeBarscroll}%`;


    dot.style.left = `${timeBarscroll}%`;
});

timeBar.addEventListener('change', () => {
    music.currentTime = timeBar.value * music.duration / 100;
})



let prv = document.getElementById("prv");
let next = document.getElementById("next");

prv.addEventListener("click", () => {
    index = (index - 1 + allsongs.length) % allsongs.length; // Ensure index loops back to the last song when reaching the first one

    let musicSrc = `music/${index + 1}.mp3`; // index is 0-based, so we add 1 to match the IDs in allsongs array
    music.src = musicSrc;
    bottomimg.src = allsongs[index].poster;
    title.innerHTML = allsongs[index].songName;

    // Play the music if it's paused or a different song is selected
    if (music.paused || music.src !== window.location.href + musicSrc) {
        music.play();
        playSong.classList.remove("fa-play");
        playSong.classList.add("fa-pause");
        playSong.style.color = "red";
    }

    // Update UI for the selected song
    hideone();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 105, 1)";
    changeIcon();
    el.target.classList.remove("fa-circle-play");
    el.target.classList.add("fa-circle-pause");


})


next.addEventListener("click", () => {
    // Increment the index to select the next song
    index++;
    if (index > Array.from(document.getElementsByClassName("songItem")).length) {
        index = 0;
    }

    // Set the music source, image, and title for the next song
    let musicSrc = `music/${index + 1}.mp3`; // index is 0-based, so we add 1 to match the IDs in allsongs array
    music.src = musicSrc;
    bottomimg.src = allsongs[index].poster;
    title.innerHTML = allsongs[index].songName;

    // Play the music for the next song
    music.play();
    playSong.classList.remove("fa-play");
    playSong.classList.add("fa-pause");
    playSong.style.color = "red";

    // Update UI for the selected song
    hideone();
    Array.from(document.getElementsByClassName('songItem')).forEach((item, i) => {
        item.style.background = i === index ? "rgb(105, 105, 105, 1)" : "rgb(105, 105, 105, .0)";
    });
    changeIcon();
    el.target.classList.remove("fa-circle-play");
    el.target.classList.add("fa-circle-pause");
});



// Event listener for when the current song ends
music.addEventListener('ended', () => {
    // Increment the index to select the next song
    index++;
    if (index >= allsongs.length) {
        index = 0; // If the index exceeds the length of the songs array, loop back to the first song
    }

    // Set the music source, image, and title for the next song
    let musicSrc = `music/${index + 1}.mp3`; // index is 0-based, so we add 1 to match the IDs in allsongs array
    music.src = musicSrc;
    bottomimg.src = allsongs[index].poster;
    title.innerHTML = allsongs[index].songName;

    // Play the music for the next song
    music.play();
    playSong.classList.remove("fa-play");
    playSong.classList.add("fa-pause");
    playSong.style.color = "red";

    // Update UI for the selected song
    hideone();
    Array.from(document.getElementsByClassName('songItem')).forEach((item, i) => {
        item.style.background = i === index ? "rgb(105, 105, 105, 1)" : "rgb(105, 105, 105, .0)";
    });
    changeIcon();
});



let tophead_left = document.getElementById("tophead_left")
let tophead_right = document.getElementById("tophead_right");
let forYousong = document.getElementsByClassName("forYousong")[0];

tophead_right.addEventListener("click", () => {
    forYousong.scrollLeft += 280;
})

tophead_left.addEventListener("click", () => {
    forYousong.scrollLeft -= 280;

})





let mainArtist_left = document.getElementById("mainArtist_left");
let mainArtist_right = document.getElementById("mainArtist_right");
let forArtist = document.getElementsByClassName("forArtist")[0];

mainArtist_right.addEventListener("click", () => {
    forArtist.scrollLeft += 280;
});

mainArtist_left.addEventListener("click", () => {
    forArtist.scrollLeft -= 280;
});








