var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/users";

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    httprequest(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function httprequest(arr){
    var out = "";
    for(var i = 0; i < arr.length; i++) {
        out += arr[i].name;
    }
    document.getElementById("firstname").innerHTML = out;
    document.getElementById ("mail").innerHTML = out;
}