fetch('data.json')
    .then((response) => response.json())
    .then(jsonObject => showdata(jsonObject))

function showdata(jsonObject) {
    console.table(jsonObject);
}