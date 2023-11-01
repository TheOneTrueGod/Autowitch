import React from 'react';
import { InventoryItem } from "../../GameData/GameData";
import AllItemDefs from '../../GameData/Items';
import { TileAssetImage } from './TileAssetImage';

export const InventoryItemComponent: React.FC<{ item?: InventoryItem }> = ({ item }) => {
    const itemDef = item?.itemId !== undefined ? AllItemDefs[item?.itemId] : undefined
    if (!itemDef) {
        return <></>
    }

    return (
        <TileAssetImage tileAssetDef={itemDef.tileAssetDef} />
    );
};