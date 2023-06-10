//import axios from 'axios';

const axios = require('axios');

axios.get('http://api.aladhan.com/v1/calendarByCity/2023/6?city=Laayoune&country=%20Morocco&method=1v')
    .then((response) => {
        //console.log(response);
        let pray_time = response.data;
        console.log(pray_time.data[1]);

    })
    .catch(function (err){
        console.log(err);
    })