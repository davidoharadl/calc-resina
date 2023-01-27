function calculateResina() {
    let typeResina = document.querySelector('input[name="type_resina"]:checked').value;
    let weightPiece = document.querySelector('#weight-piece').value;
    const fieldResina = document.querySelector('#amount-resina-piece');
    const fieldEndurecedor = document.querySelector('#amount-endurecedor-piece');
    let resina, endurecedor;

    resina = Math.floor((weightPiece / typeResina))
    endurecedor = weightPiece - resina

    fieldResina.value = resina;
    fieldEndurecedor.value = endurecedor;
}
