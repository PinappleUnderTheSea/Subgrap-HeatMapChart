import React from 'react';
import useGraphData from './useGraph';
import HeatmapChart from './HeatmapChart';
import { formatSwapsForHeatmap } from './dataFormatter';

const Home = () => {
  const { loading, error, data } = useGraphData();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // 格式化数据以供热力图组件使用
  const formattedData = data && data.swaps ? formatSwapsForHeatmap(data.swaps) : [];

  console.log("Formatted Data for Heatmap:", formattedData); // 调试日志

  return (
    <div>
      <h1>Swaps Data Heatmap</h1>
      {formattedData.length > 0 ? (
        <HeatmapChart data={formattedData} />
      ) : (
        <p>No data available for the heatmap</p>
      )}
    </div>
  );
};

export default Home;
