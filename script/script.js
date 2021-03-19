var searchBtn = document.getElementById("search-btn");
var searchText = document.getElementById("search-text");
var cityName = document.getElementById("city-name");
var temp = document.getElementById("temp");
var humid = document.getElementById("humid");
var wind = document.getElementById("wind");
var uv = document.getElementById("uv");
var cityBtn = document.getElementsByClassName("city-btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var dayDate = document.getElementsByClassName("date");
var dayImg = document.getElementsByClassName("day-img");
var dayTemp = document.getElementsByClassName("day-temp");
var dayHumid = document.getElementsByClassName("day-humid");

// This is the main function where the data comes from.
// It fetchs the data and calls the function dashboard() and forecast() to show them on screen.
// needed two urls since one is data for the day and theo other is for the next 5 days.
var locationData = function(city){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" +  city + "&appid=4efedc1a1f5a11132edead6e391117fd"
    var url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" +  city + "&appid=4efedc1a1f5a11132edead6e391117fd"
    
    fetch(url).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                dashboard(data);
            })
        }
        else{
            console.log("error" + response.statusText)
        }
    })
    fetch(url2).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                forecast(data);
            })
        }
        else{
            console.log("error" + response.statusText)
        }
    })
}

// This function is the one where it show the data for the day.
// It take in the data and goes through it so it can display it. 
function dashboard(data){
    // Still need to work on the uv can't find data for it
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var convertTemp = Math.round((1.8 * (data.main.temp - 273) + 32) * 10) / 10;
    
    cityName.innerHTML = data.name + " (" + month + "/" + day + "/" + year + ")";
    temp.innerHTML = "Temperature: " + convertTemp + "*F";
    humid.innerHTML = "Humidity: " + data.main.humidity + "%";
    wind.innerHTML = "Wind Speed: " + data.wind.speed + " MPH";
    uv.innerHTML = "UV Index: ";
}

// This function is the second part to showing the data on the screen.
// This function take in data for the next 5 days and put them appropiatly in the right place.
function forecast(data){
    // Need to work on the icon src
    var num =3;
    for(var i = 0; i < 5; i++){
        var today = new Date();
        var day = today.getDate() + 1 + i;
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var convertTemp = Math.round((1.8 * (data.list[num].main.temp - 273) + 32) * 10) / 10;
        
        dayDate[i].innerHTML = month + "/" + day + "/" + year;
        dayImg[i].src; //data.list[num].weather.icon;
        dayTemp[i].innerHTML = "Temp: " + convertTemp + "*F";
        dayHumid[i].innerHTML = "Humidity: " + data.list[num].main.humidity + "%";

        num = num + 8;
    }
}

// This function is the one where it shows the most recent search history.
function searchHistory(){
    var pastCity = JSON.parse(localStorage.getItem("City"));
    if(pastCity != null){
        locationData(pastCity[pastCity.length - 1]);
        for(var i = 0; i < pastCity.length; i++){
            var cityBtns = document.getElementById("btn" + (i + 1));
            cityBtns.style.display = "block";
            cityBtns.textContent = pastCity[pastCity.length - i -1];
        }
    }
}

// THis function is formating the input so it can be use by the api url. 
function changeText(tempText){
    // assume values entered are only two words
    var splitWord = tempText.split(' ');
    var newWord = splitWord[0] + "+" + splitWord[1];
    return newWord;
}

// This function adds any new searchs to the local history.
// It also doesn't go over 8 items and removes old items after it reachs it.
function add(n){
    var oldCities = JSON.parse(localStorage.getItem("City"));
    var items = [];
    if(oldCities === null){
        oldCities = "";  
    } 

    for(var i = 0; i < oldCities.length; i++){
        items.push(oldCities[i]);
    }

    if(oldCities.length == 8){
        items.push(n);
        items.shift();
    }
    else{
        items.push(n);
    }
    localStorage.setItem("City", JSON.stringify(items));
    searchHistory();
}

// The function is called here so that when the site is refreshed it show the localstorage history.
searchHistory();

// The event listener for the main search button.
searchBtn.addEventListener("click", function(){
    // assume that the value entered is spelled correct and is a city
    var cityText = searchText.value;
    add(cityText);
    var cityName;

    if (cityText.indexOf(' ') >= 0){
        cityName = changeText(cityText);
    } else{
        cityName = cityText;
    }
    locationData(cityName);
    searchText.value = "";
})

// These event listeners are for the history buttons.
// They all call locationData() to display there value.
btn1.addEventListener("click", function(){
    var city = btn1.textContent; 
    locationData(city);
})
btn2.addEventListener("click", function(){
    var city = btn2.textContent; 
    locationData(city);
})
btn3.addEventListener("click", function(){
    var city = btn3.textContent; 
    locationData(city);
})
btn4.addEventListener("click", function(){
    var city = btn4.textContent; 
    locationData(city);
})
btn5.addEventListener("click", function(){
    var city = btn5.textContent; 
    locationData(city);
})
btn6.addEventListener("click", function(){
    var city = btn6.textContent; 
    locationData(city);
})
btn7.addEventListener("click", function(){
    var city = btn7.textContent; 
    locationData(city);
})
btn8.addEventListener("click", function(){
    var city = btn8.textContent; 
    locationData(city);
})