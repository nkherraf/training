var searchBtn1 = document.getElementById('srcBtn1');
var searchBtn2 = document.getElementById('srcBtn2');
var navBar = document.getElementById('navBar');
var mainNav = document.getElementById('mainNav');
var homeImg = document.getElementById('home');
var topLeft = document.getElementById('topLeft');
var navBtns = topLeft.querySelectorAll('a');
var div = document.getElementById('movieInfo');
var ul = document.getElementById('movieAttr').querySelectorAll('li');
var list = [];
var ytKey = "";
var trailerBtn = document.getElementById('trailerBtn');
var trailerDiv = document.getElementById('trailerDiv');
var attributsInfo = ["Director","Actors","Runtime","Plot","Released","Genre","Writer","BoxOffice","imdbRating"];
for(let u=0;u<ul.length;u++) {
    list.push(ul[u].querySelector('span'));
}

var inputTitle = document.getElementById('srcInput2');

/*navBtn.addEventListener('click', () => {
    if(!unfolded) {
        navBar.style.height='30vh';
        unfolded=true;
    } else {
        navBar.style.height='10vh';
        unfolded=false;
    }
});*/

function extractNumbers(str) {
    strReturned = "";
    for(let y=0;y<str.length;y++) {
        if(!isNaN(Number(str[y]))) {
            strReturned += str[y];
        }
    }
    return Number(strReturned);
}

function getMovieData(title,year,id) {
    return new Promise((resolve,reject)=>{
        if(title!="") {
            if (year!="" && (Number(year)<1895 || Number(year)>2022)) {
                alert('Error ! The year of released is not between 1895 and 2022 !');
                return null;
            } else {
                var web = 'https://www.omdbapi.com/?apikey=81164f79';
                if (id == "1") {
                    var paramS = '&s='+title;
                } else {
                    var paramS = '&t='+title;
                }
                //  var callB = '&callback=?';
                let type='&type=movie';
                var url = web+paramS+type+(year==""?"":'&y='+year);
                axios.get(url).then(function (response) {
                    let data = response.data;
                    resolve(data);
                }).catch(function (error) {
                    alert(error);
                    return null;
                });
            }
        } else {
            alert('Erreur ! The title field is empty !');
            return null;
        }
    });
}



function searchMovie(id,attr) {
    var movieTitle,movieYear,dataM;
    if (id==="1") {
        movieTitle = document.getElementById('srcInput'+id).value;
        movieYear = "";
    } else {
        movieTitle = document.getElementById('srcInput'+id).value;
        movieYear = document.getElementById('yearInput'+id).value;
    }

    getMovieData(movieTitle,movieYear,id)
    .then((dataM) => {
        let divErr = document.getElementById('errorInfo');
        if (dataM.Response == "True") {
            divErr.style.display="none";
            let titleHtml = document.getElementById('title');
            titleHtml.innerText="";
            let posterHtml = document.getElementById('poster');
            let movieTitle = document.createElement('span');
            movieTitle.innerText=dataM['Title'];
            movieTitle.setAttribute('id','movieTitle');
            titleHtml.appendChild(movieTitle);
            titleHtml.innerHTML += " (";
            let movieYear = document.createElement('span');
            movieYear.innerText=dataM['Year'];
            movieYear.setAttribute('id','movieYear');
            titleHtml.appendChild(movieYear);
            titleHtml.innerHTML += ")";
            posterHtml.setAttribute('src',dataM['Poster']);

            for(let n=0;n<list.length;n++) {
                if (n==list.length-1) {
                    list[n].innerText = " "+dataM[attr[n]]+"/10 ("+dataM["imdbVotes"]+" votes).";
                } else {
                    list[n].innerText = " "+dataM[attr[n]];
                }
                list[n].setAttribute('id',attr[n]);
            }
            div.style.display="flex";
        } else {
            div.style.display="none";
            let p = divErr.querySelector('p');
            p.innerText = "Error ! Movie not found !";
            divErr.style.display="flex";
        }
    });
}

function removeAllChild(balise,tag) {
    var allOp = balise.querySelectorAll(tag);
    allOp.forEach(elem => {
        balise.removeChild(elem);
    });
}

function changingOptions(cible) {
    var text=cible.target.value;
    var li = document.getElementById('fiveMovie');
    if(text.length>1) {
        getMovieData(text,"","1")
        .then((resp) => {
            if (resp.Response == "True") {
                removeAllChild(li,'option')
                data=resp.Search;
                for(let f=0;f<data.length && f<5;f++) {
                    var op = document.createElement('option');
                    op.innerText = data[f].Title;
                    op.setAttribute('value',op.innerText);
                    li.appendChild(op);
                }
            }
        });
    }
}

function removeTrailer(div,btn) {
    let child = div.querySelector('iframe');
    div.removeChild(child);
    btn.querySelector('a').innerText="Watch the trailer !";
    setTimeout(() => {
        btn.querySelector('a').setAttribute("href","#ancre");
    }, 2000);
}

/* API GOOGLE TEST

function loadClient() {
    gapi.client.setApiKey(ytKey);
    console.log("Key set !")
    return new Promise((resolve,reject)=> {
        console.log("Loading client...");
        gapi.client.load("www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { resolve("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
    });
  }
*/

// EVENTS

inputTitle.addEventListener('focus', (e) => {
    changingOptions(e);
});

inputTitle.addEventListener('keyup', (e) => {
    changingOptions(e);
});

/*searchBtn1.addEventListener('click',() => {
    searchMovie("1");
});
*/
searchBtn2.addEventListener('click', () => {
    if(!(trailerDiv.querySelector('iframe')==null)) {
        removeTrailer(trailerDiv,trailerBtn);
    }
    searchMovie("2",attributsInfo);
});


trailerBtn.addEventListener('click', (e) => {
    if(!(trailerDiv.querySelector('iframe')==null)) {
        removeTrailer(trailerDiv,trailerBtn);
        return;
    }
    let paramDef;
    let btn = e.target;
    let title = document.getElementById('movieTitle').innerText;
    let year = document.getElementById('movieYear').innerText;
    let query = title+" "+year+" "+"trailer";
    if(Number(year)<2000) {
        paramDef= "standard";
    } else {
        paramDef= "high";
    }
    /*loadClient()
    .then((msg)=> {
        console.log(msg);
        gapi.client.youtube.search.list({
            "part": [
              "id",
              "snippet"
            ],
            "order": "viewCount",
            "q": query,
            "type": [
              "video"
            ],
            "videoDefinition": "high",
            "videoEmbeddable": "true"
        })
            .then(function(response) {
                      // Handle the results here (response.result has the parsed body).
                      console.log("Response", response);
                    },
                    function(err) { console.error("Execute error", err);});
    })*/
    let url ='https://youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&order=relevance&q='+encodeURIComponent(query)+'&type=video&videoDefinition='+paramDef+'&videoEmbeddable=true&key='+ytKey;
    axios.get(url)
    .then((response)=> {
        if(response.status==200) {
            let movieId = response.data.items[0].id.videoId;
            let url2 = 'https://youtube.googleapis.com/youtube/v3/videos?part=player&id='+movieId+'&key='+ytKey;
            axios.get(url2)
            .then((rep2) => {
                if(rep2.status==200) {
                    let trailHtml = rep2.data.items[0].player.embedHtml;
                    trailerDiv.innerHTML=trailHtml;
                    let ifr = trailerDiv.querySelector('iframe');
                    let url3 = ifr.getAttribute('src');
                    ifr.setAttribute('src','https:'+url3);
                    ifr.removeAttribute('width');
                    ifr.removeAttribute('height');
                    trailerBtn.querySelector('a').innerText="Don't watch the trailer";
                    trailerBtn.querySelector('a').setAttribute("href","#search");
                } else {
                    alert('We\'re having network issues. Please retry later');
                }
            });
        } else {
            alert('We\'re having network issues. Please retry later');
        }
    });
})

document.addEventListener('scroll', () => {
    let top=document.documentElement.scrollTop;
    let minTop = homeImg.clientHeight/5;
        if(top > minTop) {
            navBar.classList.remove('hidden');
        } else {
            navBar.classList.add('hidden');
        }
});

for(let j=1;j<navBtns.length;j++) {
    navBtns[j].addEventListener('click', () => {
        if (homeImg.clientWidth>=851) {
            navBar.classList.add('hidden');
        }
    });
}