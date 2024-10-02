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
    anual: [
        { mes: 'Janeiro', pendentes: 50, abertos: 30, concluidos: 20 },
        { mes: 'Fevereiro', pendentes: 40, abertos: 25, concluidos: 25 },
        { mes: 'Março', pendentes: 35, abertos: 20, concluidos: 30 },
        { mes: 'Abril', pendentes: 30, abertos: 15, concluidos: 25 },
        { mes: 'Maio', pendentes: 25, abertos: 10, concluidos: 20 },
        { mes: 'Junho', pendentes: 20, abertos: 5, concluidos: 15 },
    ]
}

function novoChamado(status) {
    if (status === 'pendentes') {
        chamados.pendentes++;
    } else if (status === 'aberto') {
        chamados.abertos++;
    } else if (status === 'concluido') {
        chamados.concluidos++;
    }
}