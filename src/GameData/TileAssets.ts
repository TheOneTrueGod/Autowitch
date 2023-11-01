import TinyFarmItems from "../assets/TinyRanch_Assets/TinyFarm_Items.png"
import TinyFarmCrops from "../assets/TinyRanch_Assets/TinyFarm_Crops.png"
import TinyFarmTiles from "../assets/TinyRanch_Assets/TinyFarm_Tiles.png"

interface TileAssetSourceDef {
  imageUrl: string,
  tileSizeX: number,
  tileSizeY: number,
  imageScale: number
}
export enum TileAssetSources {
  "TinyFarmItems" = "TinyFarmItems",
  "TinyFarmCrops" = "TinyFarmCrops",
  "TinyFarmTiles" = "TinyFarmTiles",
}
export const AllTileAssetSourcesDefs: { [key in TileAssetSources]: TileAssetSourceDef } =
{
  [TileAssetSources.TinyFarmItems]: {
    imageUrl: TinyFarmItems,
    tileSizeX: 8, tileSizeY: 8,
    imageScale: 8,
  },
  [TileAssetSources.TinyFarmCrops]: {
    imageUrl: TinyFarmCrops,
    tileSizeX: 8, tileSizeY: 8,
    imageScale: 8,
  },
  [TileAssetSources.TinyFarmTiles]: {
    imageUrl: TinyFarmTiles,
    tileSizeX: 8, tileSizeY: 8,
    imageScale: 8,
  }
};


interface TileAssetDef {
  tileAssetSource: TileAssetSources,
  imageX: number,
  imageY: number
}
export enum TileAssets {
  "TestJar" = "TestJar",
  "TestSeeds" = "TestSeeds",
  "Grass" = "Grass",
  "Dirt" = "Dirt"
}

export const AllTileAssetDefs: { [key in TileAssets]: TileAssetDef } =
{
  [TileAssets.Grass]: {
    tileAssetSource: TileAssetSources.TinyFarmTiles,
    imageX: 0, imageY: 0,
  },
  [TileAssets.Dirt]: {
    tileAssetSource: TileAssetSources.TinyFarmTiles,
    imageX: 0, imageY: 1,
  },
  [TileAssets.TestJar]: {
    tileAssetSource: TileAssetSources.TinyFarmItems,
    imageX: 1, imageY: 1,
  },
  [TileAssets.TestSeeds]: {
    tileAssetSource: TileAssetSources.TinyFarmCrops,
    imageX: 1, imageY: 5,
  }
};
