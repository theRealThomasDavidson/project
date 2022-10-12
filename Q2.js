function displayWorkout(){
    var day = document.getElementById("weekday").value;
    switch(day){
        case "sunday":
            document.getElementById("workout").innerHTML 
                = "Rest Day";
            break;
        case "monday":
            document.getElementById("workout").innerHTML 
                = "Jogging - 1 hour </br></br>Stretches";
            break;
        case "tuesday":
            document.getElementById("workout").innerHTML 
                = "Strength Training";
            break;
        case "wednesday":
            document.getElementById("workout").innerHTML 
                = "HIIT";
            break;
        case "thursday":
            document.getElementById("workout").innerHTML 
                = "Rest Day";
            break;
        case "friday":
            document.getElementById("workout").innerHTML 
                = "Cardio Intervals";
            break;
        case "saturday":
            document.getElementById("workout").innerHTML 
                = "Core Workout";
            break;

    }


}