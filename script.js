function simular(comVirtualizacao) {
    const output = document.getElementById('output-content');
    output.innerHTML = "";
    
    let ramFisica = 8192; // 8GB em MB
    let ramUsada = 0;
    let processos = 128;
    let tamanhoProcesso = 500;

    output.innerHTML += `<p>> Iniciando simulação de ${processos} processos...</p>`;

    for (let i = 0; i < processos; i++) {
        if (ramUsada + tamanhoProcesso <= ramFisica) {
            ramUsada += tamanhoProcesso;
            output.innerHTML += `<p style="color: #00ff00">[OK] P${i} alocado na RAM física.</p>`;
        } else {
            if (comVirtualizacao) {
                output.innerHTML += `<p style="color: #00a8ff">[SWAP] P${i} movido para o disco (Virtualização ativa).</p>`;
            } else {
                output.innerHTML += `<p style="color: #ff0000">[CRITICAL] P${i} falhou: Memória Real esgotada!</p>`;
                output.innerHTML += `<p><strong>O sistema travou com apenas ${i} processos.</strong></p>`;
                return;
            }
        }
    }
    output.innerHTML += `<p><strong>Sucesso: Todos os ${processos} processos estão sendo gerenciados!</strong></p>`;
}