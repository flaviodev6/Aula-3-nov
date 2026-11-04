const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function() {

    try {
        const texto1 = document.getElementById("nota1").value;
        const texto2 = document.getElementById("nota2").value;
        const texto3 = document.getElementById("nota3").value;

        if (texto1 === "" || texto2 === "" || texto3 === "") {
            throw new Error("Preencha as três notas.");
        }

        const nota1 = Number(texto1);
        const nota2 = Number(texto2);
        const nota3 = Number(texto3);

        if (!Number.isFinite(nota1) || !Number.isFinite(nota2) || !Number.isFinite(nota3)) {
            throw new Error("Digite apenas números válidos.");
        }

        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
            throw new Error("As notas devem estar entre 0 e 10.");
        }

        const media = (nota1 + nota2 + nota3) / 3;
        let situacao;

        if (media >= 7) {
            situacao = "Aprovado";
        } else if (media >= 5) {
            situacao = "Recuperação";
        } else {
            situacao = "Reprovado";
        }

        resultado.textContent = "Média: " + media.toFixed(1) + " - Situação: " + situacao;
    } catch (error) {
        resultado.textContent = "Erro: " + error.message;
    }
});
