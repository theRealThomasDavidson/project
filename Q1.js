function input(){
    var first = parseInt(document.getElementById("firstNum").value);
    var second = parseInt(document.getElementById("secondNum").value);
    var third = parseInt(document.getElementById("thirdNum").value);
    var op1 = document.getElementById("operator1").value;
    var op2 = document.getElementById("operator2").value;
    
    if((op1 == "add" || op1 == "subtract") 
        && (op2 == "multiply" || op2 == "divide")){
        i = math(second, third, op2)
        document.getElementById("answer").innerHTML = math(first, i, op1)
    } else{
        i = math(first, second, op1)
        document.getElementById("answer").innerHTML = math(i, third, op1)
    }


}

function math(x, y, op){
    switch(op){
        case "add":
            var z = x + y;
            break;
        case "subtract":
            var z = x - y;
            break;
        case "multiply":
            var z = x * y;
            break;
        case "divide":
            var z = x / y;
            break;
    }

    return(z)

}