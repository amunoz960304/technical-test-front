import ReactApexChart from 'react-apexcharts';

const TotalsAccountGraphic = ({ data }) => {
  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: data.map((item) => item.accountId),
      title: {
        text: 'Id Cuenta',
      },
    },
    yaxis: {
      title: {
        text: 'Amount',
      },
    },
  };

  const series = [
    {
      name: 'Incomes',
      data: data.map((item) => item.incomes),
    },
    {
      name: 'Expenses',
      data: data.map((item) => item.expenses),
    },
  ];

  return <ReactApexChart options={options} series={series} type='bar' />;
};

export default TotalsAccountGraphic;
