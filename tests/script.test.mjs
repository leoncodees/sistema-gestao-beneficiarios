import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { test } from "node:test";

const alerts = [];
const respostas = [];

const contexto = {
    alert: (mensagem) => alerts.push(mensagem),
    prompt: () => respostas.shift()
};

const codigo = fs.readFileSync(
    new URL("../script.js", import.meta.url),
    "utf8"
);

const script = new vm.Script(codigo, {
    filename: "script.js"
});

script.runInNewContext(contexto);

test("deve informar quando não existem beneficiários", () => {
    alerts.length = 0;

    contexto.listarBeneficiarios();

    assert.equal(
        alerts[0],
        "Nenhum beneficiário cadastrado."
    );
});

test("deve validar o nome do beneficiário", () => {
    alerts.length = 0;
    respostas.push("");

    contexto.cadastrarBeneficiario();

    assert.equal(
        alerts[0],
        "O nome do beneficiário é obrigatório."
    );
});

test("deve validar a idade do beneficiário", () => {
    alerts.length = 0;
    respostas.push("Maria", "");

    contexto.cadastrarBeneficiario();

    assert.equal(
        alerts[0],
        "A idade do beneficiário é obrigatória."
    );
});

test("deve cadastrar um beneficiário corretamente", () => {
    alerts.length = 0;
    respostas.push("Maria da Silva", "12");

    contexto.cadastrarBeneficiario();

    assert.equal(
        alerts[0],
        "Beneficiário cadastrado com sucesso!"
    );
});

test("deve listar beneficiários cadastrados", () => {
    alerts.length = 0;

    contexto.listarBeneficiarios();

    assert.match(
        alerts[0],
        /Maria da Silva - 12 anos/
    );
});

test("deve executar o módulo de atividades", () => {
    alerts.length = 0;

    contexto.cadastrarAtividade();

    assert.equal(
        alerts[0],
        "Módulo de atividades sociais selecionado."
    );
});

test("deve executar o módulo de frequência", () => {
    alerts.length = 0;

    contexto.registrarFrequencia();

    assert.equal(
        alerts[0],
        "Módulo de controle de frequência selecionado."
    );
});

test("deve executar o módulo de histórico", () => {
    alerts.length = 0;

    contexto.visualizarHistorico();

    assert.equal(
        alerts[0],
        "Módulo de histórico selecionado."
    );
});

test("deve executar o módulo de relatórios", () => {
    alerts.length = 0;

    contexto.gerarRelatorio();

    assert.equal(
        alerts[0],
        "Módulo de relatórios selecionado."
    );
});
