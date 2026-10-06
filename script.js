let beneficiarios = [];

function cadastrarBeneficiario() {
    const nome = prompt("Digite o nome do beneficiário:");

    if (!nome) {
        alert("O nome do beneficiário é obrigatório.");
        return;
    }

    const idade = prompt("Digite a idade do beneficiário:");

    if (!idade) {
        alert("A idade do beneficiário é obrigatória.");
        return;
    }

    const beneficiario = {
        nome: nome,
        idade: idade
    };

    beneficiarios.push(beneficiario);

    alert("Beneficiário cadastrado com sucesso!");
}

function listarBeneficiarios() {
    if (beneficiarios.length === 0) {
        alert("Nenhum beneficiário cadastrado.");
        return;
    }

    let lista = "Beneficiários cadastrados:\n\n";

    beneficiarios.forEach((beneficiario, index) => {
        lista += `${index + 1}. ${beneficiario.nome} - ${beneficiario.idade} anos\n`;
    });

    alert(lista);
}

function registrarFrequencia() {
    alert("Módulo de controle de frequência selecionado.");
}

function cadastrarAtividade() {
    alert("Módulo de atividades sociais selecionado.");
}

function visualizarHistorico() {
    alert("Módulo de histórico selecionado.");
}

function gerarRelatorio() {
    alert("Módulo de relatórios selecionado.");
}
