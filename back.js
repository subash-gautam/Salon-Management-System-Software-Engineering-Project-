document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost/SEData.json", {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
            'Access- Control - Allow - Origin': 'http://localhost:3000',
            'Access - Control - Allow - Credentials': true,
            'Access - Control - Allow - Methods': ' GET, POST, OPTIONS',
            'Access- Control - Allow - Headers': 'Origin, Content - Type, Accept'
        }
    })
        .then(response => response.json())
        .then(data => afterData(data))
        .catch(error => console.error("Error fetching JSON:", error));
});

function afterData(data) {
    console.log("We got the datas." + data);
}