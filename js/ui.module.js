export class Ui {
  displayGames(gamesData) {
    let gamesBox = '';
    for (let i = 0; i < gamesData.length; i++) {
      gamesBox +=
        `
          <div class="col">
            <div class="card h-100" data-id="${gamesData[i].id}">
              <img src="${gamesData[i].thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
                <div  class=" d-flex justify-content-between  mb-2">
                  <h3 class="card-title">${gamesData[i].title}</h3>
                  <span class="text-center">free</span>
                </div>
                <p class="card-text text-center">${gamesData[i].short_description.split(" ", 8).join(" ")}</p>
              </div>
              <div class="card-footer d-flex justify-content-between text-center">
              <span>${gamesData[i].genre}</span>
              <span>${gamesData[i].platform}</span>
              </div>
            </div>
          </div>

        `
    }
    document.getElementById('cardBox').innerHTML = gamesBox;
  }

  displayDetails(detailsData) {
    const detailsBox =
      `

        <div class="image col-md-4 mb-3">
          <img src="${detailsData.thumbnail}" alt="" class="w-100">
        </div>
        <div class="col-md-8">
          <h3>Title: ${detailsData.title}</h3>
          <p>Category: 
            <span>${detailsData.genre}</span>
          </p>
          <p>Platform: 
            <span>${detailsData.platform}</span>
          </p>
          <p>Status: 
            <span>${detailsData.status}</span>
          </p>
          <p class="desc">
            ${detailsData.description}
          </p>
          <a href="${detailsData.game_url}" target="_blank" class="btn text-white btn-outline-warning mb-5"> Show Game</a>
         </div>
               
           

      `
    document.getElementById('detContent').innerHTML = detailsBox;
  }
}