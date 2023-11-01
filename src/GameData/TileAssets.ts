import TinyFarmItems from "../assets/TinyRanch_Assets/TinyFarm_Items.png"
import TinyFarmCrops from "../assets/TinyRanch_Assets/TinyFarm_Crops.png"

interface TileAssetSourceDef {
    imageUrl: string,
    tileSizeX: number,
    tileSizeY: number,
    imageScale: number
}
export enum TileAssetSources {
    "TinyFarmItems" = "TinyFarmItems",
    "TinyFarmCrops" = "TinyFarmCrops"
}
export const AllTileAssetSourcesDefs: { [key in TileAssetSources]: TileAssetSourceDef } =
{
    [TileAssetSources.TinyFarmItems]: {
        imageUrl: TinyFarmItems,
        tileSizeX: 8, tileSizeY: 8,
        imageScale: 4,
    },
    [TileAssetSources.TinyFarmCrops]: {
        imageUrl: TinyFarmCrops,
        tileSizeX: 8, tileSizeY: 8,
        imageScale: 4,
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
}

export const AllTileAssetDefs: { [key in TileAssets]: TileAssetDef } =
{
    [TileAssets.TestJar]: {
        tileAssetSource: TileAssetSources.TinyFarmItems,
        imageX: 1, imageY: 1,
    },
    [TileAssets.TestSeeds]: {
        tileAssetSource: TileAssetSources.TinyFarmCrops,
        imageX: 1, imageY: 5,
    }
};
