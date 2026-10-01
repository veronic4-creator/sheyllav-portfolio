// Captura dos elementos do HTML usando os novos IDs
var elemento_pagina = document.getElementById("conteudo_principal");
let icone_alternar = document.getElementById("icone_alternar_tema");

// Variável de controle de estado do tema
let modo_escuro_on = false;

// Evento de clique atribuído diretamente ao ícone
icone_alternar.onclick = alternar_tema_pagina;

function alternar_tema_pagina() {
    if (modo_escuro_on == true) {
        // Se estiver no modo escuro, remove o tema escuro e ativa o claro
        elemento_pagina.classList.remove("tema_escuro");
        elemento_pagina.classList.add("tema_claro");

        modo_escuro_on = false;
    } else {
        // Se estiver no modo claro, remove o tema claro e ativa o escuro
        elemento_pagina.classList.remove("tema_claro");
        elemento_pagina.classList.add("tema_escuro");

        modo_escuro_on = true;
    }
}


/*A lógica da função alternar_tema_pagina faz exatamente o esperado:

Verifica o estado atual através da variável booleana modo_escuro_on.

Alterna as classes tema_escuro e tema_claro no elemento principal (conteudo_principal).

Atualiza o estado da variável para acompanhar a troca no próximo clique.

Com isto, a tríade (HTML, CSS e JavaScript) fica concluída com sucesso.*/