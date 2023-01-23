function sim() {

    alert("Ela disse Sim!!!! s2 s2")

    /* window.location.href = "/public/pages/fireworks/fireworks.html" */
    /* document.getElementById('sim').style.margin = `${Math.random}vmax, ${Math.random}vmax` */
}

function recusa() {
    let x = parseInt(Math.random() * visualViewport.width),
        y = parseInt(Math.random() * visualViewport.height);

    console.log(x, y)

    document.getElementsByClassName('nao')[0].style.margin = `${y}px ${x}px`
}