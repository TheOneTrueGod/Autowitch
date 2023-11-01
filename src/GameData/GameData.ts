export type InventoryItem = {
    itemId: number,
    metadata: {}
}

enum GardenPlotType {
    "DIRT" = "dirt",
    "STONE" = "stone",
}
export type GardenPlot = { type: GardenPlotType }


export type GameData = {
    garden: Array<Array<GardenPlot>>,
    inventory: Array<InventoryItem | undefined>
}

const GARDEN_SIZE_COLUMNS = 5;
const GARDEN_SIZE_ROWS = 5;

export function createGameData(): GameData {
    const gameData: GameData = {
        garden: [
        ],
        inventory: [
            { itemId: 0, metadata: {} },
            undefined,
            { itemId: 0, metadata: {} },
            undefined,
            { itemId: 0, metadata: {} },
            undefined,
            undefined,
            { itemId: 0, metadata: {} },
        ]
    }

    Object.seal(gameData.inventory)

    for (let y = 0; y < GARDEN_SIZE_ROWS; y++) {
        gameData.garden.push([])
        for (let x = 0; x < GARDEN_SIZE_COLUMNS; x++) {
            const newPlot = {
                type: GardenPlotType.DIRT
            }
            Object.seal(newPlot)
            gameData.garden[y].push(newPlot)
        }
        Object.seal(gameData.garden[y])
    }
    Object.seal(gameData.garden)
    return gameData
}

export function passGameTurn(gameData: GameData): GameData {

    return gameData
}