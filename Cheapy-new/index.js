fetch("./data.json")
    .then(function(response) {
        return response;
    })
    .then(function(data) {
        return data.json();
    })
    .then(function (Normal) {
        const html = Normal.map(
            (data) => `<div class="box">
            <img src="${data.image}">
            <h1>${data.productservice}</h1>
            <h3><em>Sponsored by ${data.sponsor}</em></h3>
            <p>${data.description}</p>
        </div>`
        );
        document.getElementById("maincontainer").innerHTML = html;
    })
    .catch(function(err) {
        console.log("Fetch problem show: " + err.message);
    }
    );