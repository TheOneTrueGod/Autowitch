import React, { useState } from 'react';
import { PageWrapper } from '../PageWrapper';
import GardenGrid from './Garden/GardenGrid';
import PlayerInventory from './Inventory/PlayerInventory';
import { createGameData } from '../../GameData/GameData';


export function GamePage() {
    const [gameData] = useState(createGameData())

    return <PageWrapper>
        <GardenGrid garden={gameData.garden} />
        <PlayerInventory items={gameData.inventory} />
    </PageWrapper>;
}