var datesA = []; 
var confirmedA = []; 
var deathsA = []; 
var recoveredA = [];
fetch("https://corona-api.com/countries/ge")
.then(response => response.json())
.then(data => {
   
    let active = data.data.latest_data.confirmed - data.data.latest_data.recovered - data.data.latest_data.deaths ;
    $('#confirmed').append(data.data.latest_data.confirmed);
    $('#recovered').append(data.data.latest_data.recovered);
    $('#death').append(data.data.latest_data.deaths);
    $('#critical').append(data.data.latest_data.critical);
    $('#active').append(active);
    $('#todayDeaths').append(data.data.today.deaths);
    $('#todayConfirmed').append(data.data.today.confirmed);
//$('#updated_at').append(`მონაცების განახლების თარიღი - ${data.data.timeline[0].date}`)
$('#updated_at').append(`მონაცების განახლების თარიღი - ${data.data.updated_at}`)

console.log(data)
var i;
for (i=data.data.timeline.length-1; i>=0; i--) {
    datesA.push(data.data.timeline[i].date);
    confirmedA.push(data.data.timeline[i].confirmed);
    deathsA.push(data.data.timeline[i].deaths);
    recoveredA.push(data.data.timeline[i].recovered);
}

draw();
});

