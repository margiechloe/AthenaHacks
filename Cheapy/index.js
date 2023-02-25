fetch("./data.json")
    .then(function(response) {
        return response;
    })
    .then(function(data) {
        return data.json();
    })
    .then(function (Normal) {
        const html = Normal.map(
            (data) => `<div class="box" id="naturalhistorymuseum">
            <img src="Natural-History-Museum-Logo.png">
            <h1>${data.productservice}</h1>
            <h2>${data.description}</h2>
            <p class="location" id="location1">900 Exposition Blvd, Los Angeles, CA 90007</p>
            <p class="discount" id="discount1"></p>
        </div> `
        );
        document.getElementById("maincontainer").innerHTML = html;
    })
    .catch(function(err) {
        console.log("Fetch problem show: " + err.message);
    }
    );