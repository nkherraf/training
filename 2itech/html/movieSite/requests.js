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
            console.log(Number(year));
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
                var url = web+paramS+(year==""?"":'&y='+year);
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



function searchMovie(id) {
    var movieTitle,movieYear,dataM;
    var attr = ["Director","Actors","Runtime","Plot","Released","Genre","Writer","BoxOffice","imdbRating"];
    
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
            let posterHtml = document.getElementById('poster');
            titleHtml.innerText = dataM['Title'];
            posterHtml.setAttribute('src',dataM['Poster']);

            for(let n=0;n<list.length;n++) {
                if (n==list.length-1) {
                    list[n].innerText = " "+dataM[attr[n]]+"/10 ("+dataM["imdbVotes"]+" votes).";
                } else {
                    list[n].innerText = " "+dataM[attr[n]];
                }
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
    console.log('Event read');
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
            console.log('Options add');
        });
    }
}

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
    searchMovie("2");
});

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