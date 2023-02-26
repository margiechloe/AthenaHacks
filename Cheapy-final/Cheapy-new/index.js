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
            <h1 class="cost">${data.cost}</h1>
            <h1>${data.productservice}</h1>
            <p>${data.description}</p>
            <br>
            <p><em>Sponsored by ${data.sponsor}</em></p>
        </div>`
        );
        document.getElementById("maincontainer").innerHTML = html;
    })
    .catch(function(err) {
        console.log("Fetch problem show: " + err.message);
    }
    );