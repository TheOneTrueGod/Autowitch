import React from 'react';

export interface GardenPlot {
  type: string;
}

interface GridComponentProps {
  squareEntries: GardenPlot[][];
}

const GardenGrid: React.FC<GridComponentProps> = ({ squareEntries }) => {
  const alternateColors = ['#FF5733', '#33FF57']; // Define two alternating colors.

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {squareEntries.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((entry, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: alternateColors[(rowIndex + colIndex) % 2],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={`/path/to/${entry.type}.png`} // Adjust the path and file extension as needed
                alt={entry.type}
                style={{ width: '80%', height: '80%' }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GardenGrid;
