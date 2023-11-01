import React from 'react';
import { GardenPlot, GardenPlotType, InventoryItem } from "../../../GameData/GameData";
import { TileAssetImageComponent } from '../TileAssetImageComponent';
import { TileAssets } from '../../../GameData/TileAssets';

function getThingforThing(plotType: GardenPlotType): TileAssets {
    switch (plotType) {
        case GardenPlotType.DIRT:
            return TileAssets.Dirt
        case GardenPlotType.GRASS:
            return TileAssets.Grass
    }   
}

export const GardenPlotComponent: React.FC<{ gardenPlot: GardenPlot }> = ({ gardenPlot }) => {
    const tileAssetDef = getThingforThing(gardenPlot.type)

    return (
        <TileAssetImageComponent tileAssetDef={tileAssetDef} />
    );
};