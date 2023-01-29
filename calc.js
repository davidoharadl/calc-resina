function calculateResina() {
    let typeResina = document.querySelector('#type_resina').value;
    let weightPiece = document.querySelector('#weight-piece').value;
    const fieldResina = document.querySelector('#amount-resina-piece');
    const fieldEndurecedor = document.querySelector('#amount-endurecedor-piece');
    let resina, endurecedor;

    console.log(typeResina);

    resina = Math.floor((weightPiece / typeResina))
    endurecedor = weightPiece - resina

    fieldResina.value = resina;
    fieldEndurecedor.value = endurecedor;
}
