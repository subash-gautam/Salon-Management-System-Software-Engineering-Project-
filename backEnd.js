document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json", {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
            'Access- Control - Allow - Origin': '*',
            'Access - Control - Allow - Credentials': true,
            'Access - Control - Allow - Methods': ' GET, POST, OPTIONS',
            'Access- Control - Allow - Headers': 'Origin, Content - Type, Accept'
        }
    })
        .then(response => {
            console.log(response.headers);
            return response.json()
        })
        .then(data => afterData(data))
        .catch(error => console.error("Error fetching JSON:", error));
});

function afterData(data) {
    console.log("We got the datas." + data);
}