fetch("https://corona-api.com/countries/ge")
.then(response => response.json())
.then(data => {
    var active = parseInt(data.data.latest_data.confirmed) - parseInt(data.data.latest_data.recovered) - parseInt(data.data.latest_data.deaths);
//     $('#covid').append(`Covid-19 მიმდინარე სტატისტიკა საქართველოში:
//     სულ დაინფიცირებული: ${data.data.latest_data.confirmed}, 
//     გამოჯანმრთელებული: ${data.data.latest_data.recovered},
//     დაღუპული: ${data.data.latest_data.deaths},
//     ამჟამად დაინფიცირებული: ${active}`);
        $('#updated_at').append(`ბოლო განახლება - ${data.data.updated_at}`)
//console.log(data);
//console.log(data);
})