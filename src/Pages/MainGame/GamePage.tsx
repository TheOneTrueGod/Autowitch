import React, { useState } from 'react';
import { PageWrapper } from '../PageWrapper';
import GardenGrid from './GardenGrid';
import PlayerInventory from './PlayerInventory';
import { createGameData } from '../../GameData/GameData';


export function GamePage() {
    const [gameData] = useState(createGameData())

    return <PageWrapper>
        <GardenGrid squareEntries={gameData.garden} />
        <PlayerInventory items={gameData.inventory} />
    </PageWrapper>;
}