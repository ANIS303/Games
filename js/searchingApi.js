let detailsId =[]



export async function idApi (id ){

const loading = document.querySelector(".loading");
loading.classList.remove("d-none");

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7e9c5cbb41mshf57f5347baa3037p138e7ajsncd938397fa3d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    const result = await data.json();
    detailsId = result
    targetId(detailsId)
showDetails(detailsId)
    console.log( detailsId);
    loading.classList.add("d-none");
   
}


export function targetId(){
    let gdetId= document.querySelectorAll(".col-md-3")
   for(let i =0;i<gdetId.length;i++){
    gdetId[i].addEventListener("click", (e)=>{
      let id =gdetId[i].id
      idApi(id)

      document.querySelector("#intro").classList.add("d-none");
              document.querySelector("#category").classList.add("d-none");
        document.querySelector("#plat").classList.add("d-none");
        document.querySelector("#detail").classList.remove("d-none");
document.querySelector(".detagames").classList.remove("d-none");


    })
   }
}

    let btnClose= document.querySelector("#closing")
   
    btnClose.onclick = function () {
      document.querySelector("#intro").classList.remove("d-none");
              document.querySelector("#category").classList.remove("d-none");
        document.querySelector("#plat").classList.remove("d-none");
        document.querySelector("#detail").classList.add("d-none");
        document.querySelector(".detagames").classList.add("d-none");

    };

    


export function showDetails (datId){
    let box = '';
    
    
        
        box +=`
       
      
      
        <div class="col-5">
        <img src="${datId?.thumbnail}" class="w-100" alt="" />
      </div>
      <div class="col-md-7">
        <h2 class=" text-center pb-3"> ${datId.title}</h2>
        <div class=" d-flex justify-content-between px-2">
        <p>Category: <span class="badge text-bg-info"> ${datId.genre}</span></p>
        <p>Platform: <span class="badge text-bg-info"> ${datId.platform}</span></p>
        <p>Status: <span class="badge text-bg-info"> ${datId.status}</span></p>
        <p>Status: <span class="badge text-bg-info"> Free</span></p>

        </div>
        <p class="small">
          ${datId.description}
        </p>
        <a
          class="btn btn-outline-warning text-light mb-3"
          target="_blank"
          href="${datId.game_url}"
          >Show Game</a
        >
      </div>
    `
    
    
    
    document.querySelector("#detail").innerHTML = box;
    }
    
 
    idApi()





    
