// utils/dataFormatter.js
export const formatSwapsForHeatmap = (swaps) => {
  // 格式化为二维数据 [x, y, value]
  return swaps.map((swap) => {
    const hour = new Date(parseInt(swap.timestamp) * 1000).getHours();
    return [
      hour,
      parseFloat(swap.amount0) || 0,  // y 轴：确保是有效数值，默认值为 0
      parseFloat(swap.amount1) || 0   // value：确保是有效数值，默认值为 0
    ];
  });
};
