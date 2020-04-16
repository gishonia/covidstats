fetch("https://corona-api.com/countries/ge")
.then(response => response.json())
.then(data => {
   
    let active = data.data.latest_data.confirmed - data.data.latest_data.recovered - data.data.latest_data.deaths ;
    $('#confirmed').append(`სულ დაინფიცირებული: ${data.data.latest_data.confirmed}`);
    $('#recovered').append(`გამოჯანმრთელებული: ${data.data.latest_data.recovered}`);
    $('#death').append(`გარდაცვლილი: ${data.data.latest_data.deaths}`);
    $('#active').append(`ამჟამად დაინფიცირებული: ${active}`);
    $('#todayDeaths').append(`გარდაცვლილი: ${data.data.today.deaths}`);
    $('#todayConfirmed').append(`დაინფიცირებული: ${data.data.today.confirmed}`);
$('#updated_at').append(`მონაცების განახლების თარიღი - ${data.data.updated_at}`)

console.log(data)
})