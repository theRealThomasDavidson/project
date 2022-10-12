//load from file 
var fileName = 'Q4.json';
var lnum = 0;

var objlist = []
var mydata = JSON.parse(data);
console.log(mydata[0]);


function addTeam(data){
    var contain = document.createElement("div");
    const element = document.getElementById("container");
    element.appendChild(contain);
    var line1 = document.createElement("p");
    var line2 = document.createElement("p");
    var node = document.createTextNode("For person:"+ fn +" " + ln);
    line1.appendChild(node);
    node = document.createTextNode("id: "+pid+"  Phone Number: " + pn);
    line2.appendChild(node);
    contain.appendChild(line1);
    contain.appendChild(line2);
    console.log()
    lnum += 2
    objlist.push(data);
}

function saveJSON(){
    data = objlist;
    if(!data) {
        console.error('No data')
        return;
    }

    filename = fileName

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}

function process() {
    let pid = document.getElementById('id').value;
    let fn = document.getElementById('first_name').value;
    let ln = document.getElementById('last_name').value;
    let pn = document.getElementById('phone_number').value;
    var data = {id:pid, first_name:fn, last_name:ln, phone_number:pn};
    addTeam(data)
    console.log(data)
}

