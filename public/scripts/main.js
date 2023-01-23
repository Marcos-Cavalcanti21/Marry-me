function sim() {

    setTimeout(() => {
        document.getElementsByClassName('content')[0].src = './public/assets/fireworks.gif';
    }, 500);

    alert("Ela disse Sim!!!! s2 s2")

    /* window.location.href = "/public/pages/fireworks/fireworks.html" */
    document.getElementById('sim').style.margin = `${Math.random}vmax, ${Math.random}vmax`
}

function recusa(){
    debugger
    let x = parseInt(Math.random() * visualViewport.width),
    y = parseInt(Math.random() * visualViewport.height);

    console.log(x,y)

    document.getElementById('nao').style.margin = `${y}px ${x}px`
}