import React from 'react';
import heatMap from './heatmap.png';

const HeatMap: React.FC = () => {
  return (
    <img src={heatMap} className="heatMap" alt="heatMap" style={{ height: '100%' }} />
  );
};

export default HeatMap;