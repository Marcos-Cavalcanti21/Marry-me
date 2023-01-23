function sim() {
    alert("Sim!!")

    document.getElementById('sim').style.margin = `${Math.random}vmax, ${Math.random}vmax`
}

function recusa(){
    debugger
    let x = parseInt(Math.random() * visualViewport.width),
    y = parseInt(Math.random() * visualViewport.height);

    console.log(x,y)

    document.getElementById('nao').style.margin = `${y}px ${x}px`
}