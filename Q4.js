function process() {
    let pid = document.getElementById('id').value;
    let fn = document.getElementById('first_name').value;
    let ln = document.getElementById('last_name').value;
    let pn = document.getElementById('phone_number').value;
    console.log(pid + "   "+fn +"    "+ ln);
    document.getElementById('first_line').innerHTML = ""+
        "For person:"+ fn +" " + ln;
    document.getElementById('second_line').innerHTML = ""+
        "id: "+pid+"  Phone Number: " + pn;
}