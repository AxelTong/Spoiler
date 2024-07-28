var displayer = document.getElementById("encodedDisplay")
var sharing = document.getElementById("sharing")
var whatsApp = document.getElementById("whatsApp")
var url;
var space = document.getElementById("space")
var space2 = document.getElementById("space2")

function encode() { // encodes the message and generates the URL
    var message = document.getElementById("message").value
    console.log(message)
    var encoded = btoa(encodeURIComponent(message)) // base64 encode
    console.log(encoded)
    url = "https://spoiler.axeltong.be/?base64=" + encoded
    displayer.classList.add('encoded');
    sharing.classList.add('share');
    displayer.innerHTML = "Share this link: " + url + " <br> <button onclick=\"copy()\">Copy link</button>"
    whatsApp.innerHTML = "<a href=\"whatsapp://send?text=" + url + "\" data-action=\"share/whatsapp/share\">Share via Whatsapp</a>" // send whatsapp message
    space.innerHTML = "<br>"
    space2.innerHTML = "<br>"
}
function copy() {
    navigator.clipboard.writeText(url);
    // Alert the copied text
    alert("Copied " + url);
}
