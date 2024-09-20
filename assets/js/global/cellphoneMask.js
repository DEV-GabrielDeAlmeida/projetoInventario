
// Recebor seletor de ID
var telefone = document.getElementById("telefone");

// Função para cirar a máscara para o telefone
telefone.addEventListener("input", () => {
    // Remover caractéres não numéricos e limitar a 11 dígitos
    var restringirCampo = telefone.value.replace(/\D/g, "").substring(0, 11);

    // Dividir a string em um array com caracteres individuais
    var arrayNumeros = restringirCampo.split("");

    // Criar a VARIÁVEL que receberá o novo número
    var novoTelefone = "";

    // IF quando qtd de num > 0
    // ex: formatar o ddd = (75)
    if (arrayNumeros.length > 0) {
        novoTelefone += `(${arrayNumeros.slice(0, 2).join("")})`;
    }

    // IF quando qtd de num > 2
    // ex: formatar os 5 próx num = 98812
    if (arrayNumeros.length > 2) {
        novoTelefone += ` ${arrayNumeros.slice(2, 7).join("")}`;
    }

    // IF quando qtd de num > 7
    // ex: formatar os 4 últimos num = - 3456
    if (arrayNumeros.length > 7) {
        novoTelefone += `-${arrayNumeros.slice(7, 11).join("")}`;
    }

    // Enviar para o campo o novo número
    telefone.value = novoTelefone;
})