// app.js : 영화 배열을 다루는 함수 6개 / 김기송(25) / 10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
function average(list) {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
console.log("평균:", average(movies));





function best(list) {
    let top = list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }
    }
    return top;
}
console.log("최고:", best(movies).title);





const filterByRating = (list, min) => {
    return list.filter(m => m.rating >= min);
}
console.log("8점이상:", filterByRating(movies, 8).length + "편");




/*
function shortByRating(list) {
    return [...list].sort((a, b) => b.rating - a.rating);
}
const sorted = shortByRating(movies);
console.log("정렬 1위:", sorted[0].title, "/원본 1번:", movies[0].title);
*/



function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}
console.log(yearsSince(movies[0].date) + "년 전 개봉");





function posterUrl(path, size) {
    return "https://image.tmdb.org/t/p/" + size + path;
}
console.log(posterUrl(movies[0].poster, "w342"));




// renderCards : 영화 배열 ⇒ 보드에 카드 생성(반환값 없음)
const renderCards = (list) => {
    const board = document.querySelector(".board");
    board.innerHTML = "";
    for (const m of list) {
        const card = document.createElement("article");
        card.className = "card";
        if (m.rating >= 8) {
            card.classList.add("hot");
        }
        card.innerHTML = `
           <img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">
           <span class="badge">${m.rating}</span>
           <div class="info">
           <h2>${m.title}</h2>
           <p class="year">${m.year}</p>
           <button class="like" type="button">♥</button>
           </div>`;
        board.appendChild(card);
        document.querySelector("#count").textContent = list.length + "편";
        updateLikeCount();
    }
    if (list.length === 0) { board.classList.add("is-empty"); } else { board.classList.remove("is-empty"); }
}

const sortBy = (list, key, desc) => {
    const copy = [...list];
    copy.sort((a, b) => {
        if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
        return a[key] - b[key];
    });
    if (desc) copy.reverse();
    return copy;
}



const applySort = () => {
    renderCards(getView());
}

applySort();









document.getElementById("q").addEventListener("input", (e) => {
    renderCards(getView());
});



function getView() {
    const keyword = document.getElementById("q").value.trim().toLowerCase();
    const found = movies.filter(m => m.title.toLowerCase().includes(keyword));
    const key = document.getElementById("sort").value;
    return sortBy(found, key, key !== "title");
}

document.getElementById("sort").addEventListener("change", applySort);







// 화살표 없는 함수의 this는 리스너가 달린 보드(.board)를 가리키고, 화살표 함수의 this는 상위 객체(window)를 가리킴
// e.target은 내가 실제로 클릭한 요소를 가리킴
document.querySelector(".board").addEventListener("click", (e) => { 
    if (e.target.classList.contains("like")) { 
        e.target.classList.toggle("liked"); 
        updateLikeCount(); 
    } 
});


function updateLikeCount() { document.getElementById("likeCount").textContent = document.querySelectorAll(".liked").length; }


document.getElementById("q").addEventListener("keydown", (e) => { if (e.key === "Escape") { e.target.value = ""; renderCards(getView()); } });