import React from 'react';
import Home from './home'; // 确保路径和大小写一致

const App = () => {
  console.log("App component rendered");
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
