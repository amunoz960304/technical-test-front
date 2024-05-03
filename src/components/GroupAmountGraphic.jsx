import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GroupAmountGraphic = ({ data }) => {
  const categories = data.map((item) => item.category);
  const amounts = data.map((item) => item.amount);

  const series = [
    {
      name: 'Monto',
      data: amounts,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: categories,
      title: {
        text: 'Categoria',
      },
    },
    yaxis: {
      title: {
        text: 'Monto',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$' + val;
        },
      },
    },
  };

  return (
    <div id='chart'>
      <ReactApexChart
        options={options}
        series={series}
        type='bar'
        height={350}
      />
    </div>
  );
};

export default GroupAmountGraphic;
