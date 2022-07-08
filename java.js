// cretate a function that fetch raw data from json
function getData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (xhr.readyState === 4
        && xhr.status === 200
        && xhr.responseText
        && xhr.responseText.length > 0) {
            //display data
            var json = JSON.parse(xhr.responseText);
            callback(json);
            } else {
            console.log('error');
            
            }
        }

    }
//add raw json data as callback function to callback function
var data = '[{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]';
var data = JSON.parse(data);
var data = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://httpbin.org/post", true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.send(data);
