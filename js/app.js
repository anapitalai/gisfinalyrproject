var mymap = L.map('mapid').setView([146, -6.67], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiYW5hcGl0YWxhaSIsImEiOiI1MzQ1MWViYmRiZjg4ZTA2YWI1ZjllNjg3NjkzYjZkNyJ9.7RJTLGvA02y-8SZZBGqbyQ'
}).addTo(mymap);