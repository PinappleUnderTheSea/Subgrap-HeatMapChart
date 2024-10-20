import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const HeatmapChart = ({ data }) => {
  useEffect(() => {
    // 初始化图表
    const chartDom = document.getElementById('heatmap');
    const myChart = echarts.init(chartDom);

    // 确保数据有效
    const filteredData = data.filter(item => !isNaN(item[2]));

    console.log("HeatmapChart filtered data:", filteredData); // 调试日志

    const option = {
      tooltip: {
        position: 'top',
        formatter: (params) => {
          return `Hour: ${params.data[0]}, Amount0: ${params.data[1]}, Value: ${params.data[2]}`;
        },
      },
      grid: {
        height: '50%',
        top: '10%',
      },
      xAxis: {
        type: 'category',
        data: Array.from(new Set(filteredData.map(item => item[0]))), // 提取 x 轴值的唯一集合
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: 'category',
        data: Array.from(new Set(filteredData.map(item => item[1]))), // 提取 y 轴值的唯一集合
        splitArea: {
          show: true,
        },
      },
      visualMap: {
        min: 0,
        max: filteredData.length > 0 ? Math.max(...filteredData.map(item => item[2])) : 100, // 设置最大值，确保不为 undefined
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        inRange: {
          color: ['#50a3ba', '#eac763', '#d94e5d'] // 定义渐变色
        },
        outOfRange: {
          color: ['#ffffff'] // 定义超出范围的颜色
        }
      },
      series: [
        {
          name: 'Swaps Heatmap',
          type: 'heatmap',
          data: filteredData,
          label: {
            show: false, // 隐藏标签
          },
          emphasis: {
            itemStyle: {
              borderColor: 'rgba(255, 255, 255, 0.8)',
              borderWidth: 1,
            },
          },
        },
      ],
    };

    myChart.setOption(option);
  }, [data]);

  return <div id="heatmap" style={{ width: '100%', height: '400px' }} />;
};

export default HeatmapChart;
