const btCalc = document.querySelector("#bt-calc");

btCalc.addEventListener('click', calculateResina);

function calculateResina() {
    let typeResina = parseFloat(document.querySelector('#type_resina').value);
    let weightPiece = parseInt(document.querySelector('#weight-piece').value);
    // weightPiece = parseInt(weightPiece, 10);
    console.log(typeof weightPiece);
    console.log(typeof typeResina);
    
    const fieldResina = document.querySelector('#amount-resina-piece');
    const fieldEndurecedor = document.querySelector('#amount-endurecedor-piece');
    let resina, endurecedor;

    resina = Math.floor((weightPiece / typeResina))
    endurecedor = weightPiece - resina

    if (Number.isNaN(resina) || Number.isNaN(endurecedor)) {
        alert("Por favor digite um numero inteiro!!");
        return;
    }

    fieldResina.value = resina;
    fieldEndurecedor.value = endurecedor;
}