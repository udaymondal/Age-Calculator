var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getFullYear();

document.getElementById("dateToday").innerText = currentDay + "/" + currentMonth + "/" + currentYear;

var calculate = document.getElementById("btn");
calculate.onclick = function() {
    var birthYear = document.getElementById("birthYear").value;
        var birthMonth = document.getElementById("birthMonth").value;
        var birthDay = document.getElementById("birthDay").value;

        if(currentDay < birthDay){
            currentDay = ((currentDay + 30)-birthDay);
            currentMonth = (currentMonth-1);
            console.log("Day: "+currentDay);
            if(currentMonth<birthMonth){
                currentMonth=((currentMonth+12)-birthMonth);
                currentYear = ((currentYear-1)-birthYear);
                console.log("Month:"+currentMonth);
                console.log("Year:"+currentYear);
            }
            else{
                currentMonth=(currentMonth-birthMonth);
                currentYear = (currentYear-birthYear);
                console.log("Month:"+currentMonth);
                console.log("Year:"+currentYear);
            }
        }
        else if(currentMonth<birthMonth){
                currentDay = (currentDay - birthDay);
                console.log("Day: "+currentDay);
                currentMonth=((currentMonth+12)-birthMonth);
                currentYear = ((currentYear-1)-birthYear);
                console.log("Month:"+currentMonth);
                console.log("Year:"+currentYear);
            }
        else{
                currentDay = (currentDay - birthDay);
                console.log("Day: "+currentDay);
                currentMonth=(currentMonth-birthMonth);
                currentYear = (currentYear-birthYear);
                console.log("Month:"+currentMonth);
                console.log("Year:"+currentYear);
        }

        var dyears = document.getElementById('dyears');
        dyears.innerHTML = currentYear;
        var dmonths = document.getElementById('dmonths');
        dmonths.innerHTML = currentMonth;
        var ddays = document.getElementById('ddays');
        ddays.innerHTML = currentDay;
        document.getElementById('ageText').style.display="block";
}
