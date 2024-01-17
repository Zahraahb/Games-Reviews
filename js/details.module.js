import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {
        // display game details
        this.getDetails(id);
       
        // close details section
        document.getElementById('close').addEventListener('click', () => {
            document.querySelector('.game').classList.remove('d-none');
            document.querySelector('.details').classList.add('d-none')
        })

        //create instance of Ui class
        this.ui = new Ui;

    }

    // get game details API
    async getDetails(id) {
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

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const api = await fetch(url, options);
        const response = await api.json();

        // display game details of API response
        this.ui.displayDetails(response);

        //shut loading 
        loadingPage.classList.add('d-none');


    }
}