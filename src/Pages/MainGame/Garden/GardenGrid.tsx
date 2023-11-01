import React from 'react';
import { GardenPlotComponent } from './GardenPlotComponent';
import { Garden, GardenPlot } from '../../../GameData/GameData';

interface GridComponentProps {
  garden: Garden;
}

const GardenGrid: React.FC<GridComponentProps> = ({ garden }) => {
  const alternateColors = ['#FF5733', '#33FF57']; // Define two alternating colors.

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {garden.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((gardenPlot, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: alternateColors[(rowIndex + colIndex) % 2],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GardenPlotComponent gardenPlot={gardenPlot} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GardenGrid;
