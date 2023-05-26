import { targetId } from "./searchingApi.js";
let headId = document.querySelector(".detagames");

let navBrand = document.querySelector(".navbar-brand");

export async function liveGame() {
  let gArr = [];
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7e9c5cbb41mshf57f5347baa3037p138e7ajsncd938397fa3d",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games`,
    options
  );
  let res = await data.json();
  gArr = res.slice(132, 180);
  disp(gArr);
  loading.classList.add("d-none");

  console.log(res);
  headId.classList.add("d-none");
}

export function disp(dShow) {
  let box = "";

  for (let i = 0; i < dShow.length; i++) {
    box += `
    <div class="col-md-3" id=${dShow[i].id}>

    <div class="card h-100  " >
        <img src="${dShow[i].thumbnail}" class=" w-100 rounded-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${dShow[i].title}</h5>
          <p class="card-text">${dShow[i].short_description}</p>
        </div>
        <div class=" d-flex justify-content-between card-footer">
        <p class="card-text"><small class="text-body-secondary badge bg-secondary">${dShow[i].publisher}</small></p>
        <p class="card-text "><small class="text-body-secondary badge bg-secondary">${dShow[i].genre}</small></p>
        </div>

      </div>
</div>
</div>

    `;
  }

  document.querySelector("#data").innerHTML = box;
}

liveGame();

navBrand.addEventListener("click", (e) => {
  document.querySelector("#intro").classList.remove("d-none");
  document.querySelector("#plat").classList.add("d-none");
  document.querySelector("#category").classList.add("d-none");
  document.querySelector("#detagames").classList.add("d-none");
});
// -----end intro---------------------------------------------------------------
// -----start category---------------------------------------------------------------

export async function gameCategory(nameG) {
  let gameGat = [];
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7e9c5cbb41mshf57f5347baa3037p138e7ajsncd938397fa3d",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let gategory = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${nameG}`,
    options
  );
  let res = await gategory.json();
  gameGat = res;

  console.log(gameGat);

  targetDrop2();
  showGategoy(gameGat);
  loading.classList.add("d-none");

  targetId();
  headId.classList.add("d-none");
}

export function targetDrop2() {
  let drop2 = Array.from(document.querySelectorAll("#drop2 .dropdown-item"));
  for (let i = 0; i < drop2?.length; i++) {
    drop2[i].addEventListener("click", (e) => {
      let id = e.target.innerHTML;
      console.log(e.target.innerHTML);
      gameCategory(e.target.innerHTML);
      document.querySelector("#intro").classList.add("d-none");
      document.querySelector("#plat").classList.add("d-none");
      document.querySelector("#category").classList.remove("d-none");
    });
  }
}
targetDrop2();
export function showGategoy(dShow) {
  let box = "";

  for (let i = 0; i < dShow.length; i++) {
    box += `
        
        <div class="col-md-3" id=${dShow[i].id}>
        <div class="card h-100" >
            <img src="${dShow[i].thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${dShow[i].title}</h5>
              <p class="card-text">${dShow[i].short_description}</p>
             
            </div>
            <div class=" d-flex justify-content-between card-footer">
            <p class="card-text"><small class="text-body-secondary badge bg-secondary">${dShow[i].publisher}</small></p>
            <p class="card-text "><small class="text-body-secondary badge bg-secondary">${dShow[i].genre}</small></p>
            </div>
          </div>
    </div>
        
        `;
  }

  document.querySelector("#data2").innerHTML = box;
}

gameCategory();
// -----------------------------------------------------------------------------
export function gamePlat() {
  let drop1 = document.querySelectorAll("#drop1 .dropdown-item");
  for (let i = 0; i < drop1?.length; i++) {
    drop1[i].addEventListener("click", (e) => {
      let id = e.target.innerHTML;
      console.log(e.target.innerHTML);
      document.querySelector("#intro").classList.add("d-none");
      document.querySelector("#category").classList.add("d-none");
      document.querySelector(".detagames").classList.add("d-none");
      document.querySelector("#plat").classList.remove("d-none");

      platApi(id);
    });
  }
}
gamePlat();

export async function platApi(platF) {
  let data = [];

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7e9c5cbb41mshf57f5347baa3037p138e7ajsncd938397fa3d",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let platFild = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platF}`,
    options
  );
  let res = await platFild.json();
  data = res;
  console.log(data);
  gamePlat();
  showPlat(data);
  targetId();
}
platApi();
export function showPlat(dShow) {
  let box = "";

  for (let i = 0; i < dShow.length; i++) {
    box += `
        
        <div class="col-md-3" id=${dShow[i].id}>
        <div class="card h-100" >
            <img src="${dShow[i].thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${dShow[i].title}</h5>
              <p class="card-text">${dShow[i].short_description}</p>
             
            </div>
            <div class=" d-flex justify-content-between card-footer">
            <p class="card-text"><small class="text-body-secondary badge bg-secondary">${dShow[i].publisher}</small></p>
            <p class="card-text "><small class="text-body-secondary badge bg-secondary">${dShow[i].genre}</small></p>
            </div>
          </div>
    </div>
        
        `;
  }

  document.querySelector("#data3").innerHTML = box;
}
