fetch('https://supreme-orbit-g4xq476w7jx7fpwp9-3000.app.github.dev/numeros')
.then(response => response.json())
.then(json => {
    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    console.log(newjson);
    let x = document.querySelector('.numbers');
    console.log(x);
    for (let i = 0; i < newjson.length; i++) {
        x.innerHTML += '<h1>' + newjson[i] + '</h1>'  + '<br>';
    }});
    


