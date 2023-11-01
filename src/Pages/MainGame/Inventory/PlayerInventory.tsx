import React from 'react';
import themeConstants from '../../../theme/themeConstants';
import { InventoryItem } from '../../../GameData/GameData';
import { InventoryItemComponent } from './InventoryItemComponent';

// Define a style object for the inventory and slots
const inventoryStyle: React.CSSProperties = {
  width: '100%',
  height: '200px',
  backgroundColor: '#8B4513', // Brown background color
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: themeConstants.spacing[1],
  padding: themeConstants.spacing[1],
  borderSpacing: "border-box"
};

const slotStyle: React.CSSProperties = {
  backgroundColor: '#D2B48C', // Light brown background color for slots
  border: '1px solid #8B4513', // Brown border
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Define the InventorySlot component
const InventorySlot: React.FC<{ item?: InventoryItem }> = ({ item }) => {
  return (
    <div style={slotStyle}>
      <InventoryItemComponent item={item} />
    </div>
  );
};

// Define the ShardInventory component
const PlayerInventory: React.FC<{ items: (InventoryItem | undefined)[] }> = ({ items }) => {
  return (
    <div style={inventoryStyle}>
      {items.map((item, index) => (
        <InventorySlot key={index} item={item} />
      ))}
    </div>
  );
};

export default PlayerInventory;
