fetch('https://redesigned-carnival-69vg94w75g74fgqp-3000.app.github.dev/semana')
.then(response => response.json())
.then(json => {
    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    console.log(newjson);
    let x = document.querySelector('.numbers');
    console.log(x);
    for (let i = 0; i < newjson.length; i++) {
        x.innerHTML += '<h1>' + newjson[i].materia + '</h1>'  + '<br>';
    }});
    


