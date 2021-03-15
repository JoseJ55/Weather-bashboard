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

var locationData = function(city){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" +  city + "&appid=4efedc1a1f5a11132edead6e391117fd"
    var url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" +  city + "&appid=4efedc1a1f5a11132edead6e391117fd"
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

function dashboard(data){
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

function forecast(data){
    var num =3;
    for(var i = 0; i < 5; i++){
        var today = new Date();
        var day = today.getDate() + 1 + i;
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var convertTemp = Math.round((1.8 * (data.list[num].main.temp - 273) + 32) * 10) / 10;
        
        dayDate[i].innerHTML = month + "/" + day + "/" + year;
        dayImg[i].src = //data.list[num].weather.icon;
        dayTemp[i].innerHTML = "Temp: " + convertTemp + "*F";
        dayHumid[i].innerHTML = "Humidity: " + data.list[num].main.humidity + "%";

        console.log(data.list[num]);
        console.log(num)
        num = num + 8;
    }
}

// assume values entered are only two words
function changeText(tempText){
    var splitWord = tempText.split(' ');
    var newWord = splitWord[0] + "+" + splitWord[1];
    return newWord;
}

// assume that the value entered is spelled correct and is a city
searchBtn.addEventListener("click", function(){//test new york
    var cityText = searchText.value;
    var cityName;
    if (cityText.indexOf(' ') >= 0){
        cityName = changeText(cityText);
    } else{
        cityName = cityText;
    }
    locationData(cityName);
})

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