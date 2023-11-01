import { TileAssets } from "./TileAssets"

interface GameItemDefWithoutId {
    name: string,
    tileAssetDef: TileAssets,
}

export interface GameItemDef extends GameItemDefWithoutId {
    id: number
}

const AllItemDefsWithoutIds: Array<GameItemDefWithoutId> = [{
    name: "TEST Seeds",
    tileAssetDef: TileAssets.TestSeeds
}]

const AllItemDefs: Array<GameItemDef> = AllItemDefsWithoutIds.map((item, index) => ({ id: index, ...item}))
Object.seal(AllItemDefs)

export default AllItemDefs
