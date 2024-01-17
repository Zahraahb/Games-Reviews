import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";


export class Games {
    constructor() {
        // display games of defult category
        this.getGames('mmorpg');
        
        let navlinks = document.querySelectorAll('.nav-link');
        //get categories's games when click at in navbar
        navlinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                let activeLink = document.querySelector('.nav-item .active');
                activeLink.classList.remove('active');
                //add active class to target category in navbar
                e.target.classList.add('active');
                // display games of target category
                this.getGames(link.dataset.value);

            })
        })

        //create instance of Ui class
        this.ui = new Ui;
    }

    // get games API
    async getGames(category) {
        const loadingPage = document.querySelector('.loading');
         // display loading untill getting API response
        loadingPage.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '55691887fcmsh8192df0eccc9ba2p138379jsn64bdbe7537ab',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const api = await fetch(url, options);
        const response = await api.json();

        // display games of API response
        this.ui.displayGames(response);

        //get the clicked on game details
        this.showDetails();

         //shut loading 
        loadingPage.classList.add('d-none')




    }

    showDetails() {
        let cards = document.querySelectorAll('.card');
        cards.forEach((item) => {
            item.addEventListener('click', () => {
                document.querySelector('.game').classList.add('d-none');
                document.querySelector('.details').classList.remove('d-none')

                //get id of the target game 
                const id = item.dataset.id;
                
                // create an instance of Details class with target game id
                new Details(id);


            })
        })
    }

}


