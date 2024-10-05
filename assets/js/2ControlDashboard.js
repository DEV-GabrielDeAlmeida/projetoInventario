/* <div class="title-cards">ESTATÍSTICA DE CHAMADOS DA SEMANA</div>
<!-- CARTÕES -->
<div class="cards">
    <!-- CARD PENDENTE -->
    <div class="box-cards">
        <div class="name-cards pend-card">Pendentes</div>
        <div class="content-cards">
            <p id="pendentes-card"></p>
            <p style="font-size: 11px;">Últimos 7 dias.</p>
        </div>
    </div>
    <!-- CARD EM ABERTO -->
    <div class="box-cards">
        <div class="name-cards open-card">Em aberto</div>
        <div class="content-cards">
            <p id="abertos-card"></p>
            <p style="font-size: 11px;">Últimos 7 dias.</p>
        </div>
    </div>
    <!-- CARD CONCLUÍDO -->
    <div class="box-cards">
        <div class="name-cards finish-card">Concluídos</div>
        <div class="content-cards">
            <p id="concluidos-card"></p>
            <p style="font-size: 11px;">Últimos 7 dias.</p>
        </div>
    </div>
</div> */

// Controlar dados de chamados
const chamados = {
  semana: {
    pendentes: 6,
    abertos: 8,
    concluidos: 14,
  },
  mensal: {
    pendentes: 7,
    abertos: 8,
    concluidos: 14,
  },
  anual: {
    pendentes: [7, 4, 0, 0, 0], // Pendentes por mês
    abertos: [8, 3, 0, 0, 0], // Abertos por mês
    concluidos: [14, 8, 0, 0, 0], // Concluídos por mês
  },
};

// Atualizar os cards
document.getElementById("pendentes-card").textContent =
  chamados.semana.pendentes;
document.getElementById("abertos-card").textContent = chamados.semana.abertos;
document.getElementById("concluidos-card").textContent =
  chamados.semana.concluidos;

// Gráfico Mensal (Chamados deste mês)
const dataMensal = {
  labels: ["Chamados Este Mês"],
  datasets: [
    {
      label: "Pendentes",
      data: [chamados.mensal.pendentes],
      backgroundColor: "rgb(255, 0, 0)",
      borderColor: "rgb(0, 0, 0)",
      borderWidth: 1,
    },
    {
      label: "Abertos",
      data: [chamados.mensal.abertos],
      backgroundColor: "rgba(255, 193, 7)",
      borderColor: "rgb(0, 0, 0)",
      borderWidth: 1,
    },
    {
      label: "Concluídos",
      data: [chamados.mensal.concluidos],
      backgroundColor: "rgba(0, 0, 255)",
      borderColor: "rgb(0, 0, 0)",
      borderWidth: 1,
    },
  ],
};

const configMensal = {
  type: "bar",
  data: dataMensal,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), configMensal);

// Gráfico Anual (Pendentes, Abertos, Concluídos por mês)
const labelsAnual = ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const dataAnual = {
  labels: labelsAnual,
  datasets: [
    {
      label: "Pendentes",
      data: chamados.anual.pendentes,
      backgroundColor: "rgba(255, 0, 0)",
      borderColor: "rgb(255, 0, 0)",
      borderWidth: 1,
    },
    {
      label: "Abertos",
      data: chamados.anual.abertos,
      backgroundColor: "rgba(255, 193, 7)",
      borderColor: "rgb(255, 193, 7)",
      borderWidth: 1,
    },
    {
      label: "Concluídos",
      data: chamados.anual.concluidos,
      backgroundColor: "rgba(0, 0, 255)",
      borderColor: "rgba(0, 0, 255)",
      borderWidth: 1,
    },
  ],
};

const configAnual = {
  type: "line",
  data: dataAnual,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChartLine = new Chart(
  document.getElementById("myChartLine"),
  configAnual
);
