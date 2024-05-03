import ReactApexChart from 'react-apexcharts';

const AnalyzeFinanceGraphic = ({ data }) => {
  const { balance, healthFinance, totalIncomes, totalExpenses } = data;

  const series = [totalIncomes, totalExpenses];
  const options = {
    labels: ['Total Incomes', 'Total Expenses'],
    colors: ['#28a745', '#dc3545'],
    legend: {
      show: true,
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Balance',
              formatter: function (w) {
                return `$ ${balance}, el estatus de tus finanzas es: ${healthFinance} `;
              },
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return '$' + val;
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
            height: 100,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return <ReactApexChart options={options} series={series} type='donut' />;
};

export default AnalyzeFinanceGraphic;
