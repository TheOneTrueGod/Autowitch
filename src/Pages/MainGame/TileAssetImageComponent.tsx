import React from 'react';
import { AllTileAssetDefs, AllTileAssetSourcesDefs, TileAssets } from '../../GameData/TileAssets';

export const TileAssetImageComponent: React.FC<{ tileAssetDef: TileAssets }> = ({ tileAssetDef }) => {
  const tileDef = AllTileAssetDefs[tileAssetDef]
  if (!tileDef) {
    throw new Error(`Couldn't find tileDef '${tileAssetDef}'`)
  }
  const sourceDef = AllTileAssetSourcesDefs[tileDef.tileAssetSource]
  const scale = sourceDef.imageScale

  return (
    <div style={{
      backgroundImage: `url(${sourceDef.imageUrl})`,
      backgroundPositionX: -tileDef.imageX * sourceDef.tileSizeX,
      backgroundPositionY: -tileDef.imageY * sourceDef.tileSizeY,
      width: sourceDef.tileSizeX,
      height: sourceDef.tileSizeY,
      scale: `${scale} ${scale}`
    }} />
  )
}