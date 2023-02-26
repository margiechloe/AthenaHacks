fetch("./casa.json")
    .then(function(response) {
        return response;
    })
    .then(function(casa) {
        return casa.json();
    })
    .then(function (Normal) {
        const html = Normal.map(
            (casa) => `<div class="box">
            <h1 class="cost">${casa.cost}</h1>
            <h1>${casa.productservice}</h1>
            <p>${casa.sponsor}</p>
        </div>`
        );
        document.getElementById("casa").innerHTML = html;
    })
    .catch(function(err) {
        console.log("Fetch problem show: " + err.message);
    }
    );

fetch("./vsa.json")
.then(function(response) {
    return response;
})
.then(function(vsa) {
    return vsa.json();
})
.then(function (Normal) {
    const html = Normal.map(
        (vsa) => `<div class="box">
        <h1 class="cost">${vsa.cost}</h1>
        <h1>${vsa.productservice}</h1>
        <p>${vsa.sponsor}</p>
    </div>`
    );
    document.getElementById("vsa").innerHTML = html;
})
.catch(function(err) {
    console.log("Fetch problem show: " + err.message);
}
);