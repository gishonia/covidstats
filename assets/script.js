fetch("https://corona-api.com/countries/ge")
.then(response => response.json())
.then(data => {
   
    let active = data.data.latest_data.confirmed - data.data.latest_data.recovered - data.data.latest_data.deaths ;
    $('#todayStats').append(`Covid-19 მიმდინარე სტატისტიკა საქართველოში:
    სულ დაინფიცირებული: ${data.data.latest_data.confirmed}, 
    გამოჯანმრთელებული: ${data.data.latest_data.recovered},
    დაღუპული: ${data.data.latest_data.deaths},
    ამჟამად დაინფიცირებული: ${active}`);
$('#updated_at').append(`მონაცემები ბოლოს განახლდა - ${data.data.updated_at}`)
console.log(data)
})