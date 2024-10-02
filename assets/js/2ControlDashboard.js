const chamados = {
    pendentes: 0,
    abertos: 0,
    concluidos: 0,
    historico: [
        { data: '2023-07-01', pendentes: 10, abertos: 5, concluidos: 3 },
        { data: '2023-07-02', pendentes: 8, abertos: 6, concluidos: 4 },
        { data: '2023-07-03', pendentes: 3, abertos: 3, concluidos: 7 },
        { data: '2023-07-04', pendentes: 0, abertos: 6, concluidos: 6 }
    ],
    anual: []
}

function novoChamado(data, status) {
    const dataFormatada = new Date(data);
    const mes = dataFormatada.getMonth() + 1;
    const ano = dataFormatada.getFullYear();
    const chaveMes = `${ano}-${mes.toString().padStart(2, '0')}`;

    if (status === 'pendente') {
        chamados.pendentes++;
    } else if (status === 'aberto') {
        chamados.abertos++;
    } else if (status === 'concluido') {
        chamados.concluidos++;
    }

    const registroHistorico = {
        data: data,
        pendentes: status === 'pendente' ? 1 : 0,
        abertos: status === 'aberto' ? 1 : 0,
        concluidos: status === 'concluido' ? 1 : 0
    };

    chamados.historico.push(registroHistorico);

    atualizarAnual(chaveMes, status);
}

function atualizarAnual(chaveMes, status) {
    const mesNome = getMes(chaveMes.split('-')[1]);

    const registroAnual = chamados.anual.find((registro) => registro.mes === mesNome);

    if (registroAnual) {
        if (status === 'pendente') {
            registroAnual.pendentes++;
        } else if (status === 'aberto') {
            registroAnual.abertos++;
        } else if (status === 'concluido') {
            registroAnual.concluidos++;
        }
    } else {
        const novoRegistroAnual = {
            mes: mesNome,
            pendentes: status === 'pendente' ? 1 : 0,
            abertos: status === 'aberto' ? 1 : 0,
            concluidos: status === 'concluido' ? 1 : 0
        };

        chamados.anual.push(novoRegistroAnual);
    }
}

function getMes(mes) {
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    return meses[mes - 1];
}

// Exemplo de uso:
novoChamado('2023-07-05', 'pendente');
console.log(chamados);