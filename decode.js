const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const base64 = urlParams.get('base64');

var display = document.getElementById("decodedDisplay") // get the output
var space3 = document.getElementById("space3")


if (base64) { // check if there is anything in the query
console.log(base64)
var decodeThis = base64.replace(" ", "+"); // janky workaround for + becoming space
console.log(decodeThis)
decoded = decodeURIComponent(atob(decodeThis))
console.log(decoded)
var decodedReady = decoded.replace(/(\r\n|\r|\n)/g, '<br>'); // get newlines working
display.innerHTML = "<h1> Here it is! </h1> <br> <textarea class=\"textOut\">" + decodedReady + "</textarea><br><br>" // write the text
display.classList.add("decoded")
space3.innerHTML = "<br>"
display.removeAttribute(hidden)
}
else {
    display.innerHTML = "" // blank if there is nothing encoded
}

escape