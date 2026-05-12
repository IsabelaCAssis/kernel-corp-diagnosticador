function abrirModal() {
    document.getElementById("modal-diagnostico").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal-diagnostico").style.display = "none";
}

// Fecha se clicar fora da janela
window.onclick = function(event) {
    let modal = document.getElementById("modal-diagnostico");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}