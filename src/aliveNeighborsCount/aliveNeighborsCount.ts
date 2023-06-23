import { Position } from "../types/cellState";
import { Generation } from "../types/generation";

export const aliveNeighborsCount = (position: Position, matrix: Generation) => {
    const neighborsPositions: Position[] = getNeighborsPositions(position);
    return neighborsPositions.reduce((acc, {x, y}) => acc + (matrix[y] && matrix[y][x] ? 1 : 0), 0);
}

const getNeighborsPositions = (position: Position): Position[] => 
    filterSelf(position, asidePositions(position));

const asidePositions = ({x, y}: Position): Position[] => 
    Array.from({ length: 9 }, (_, i) => ({x: Math.trunc(i / 3) - 1 + x, y: (i % 3) - 1 + y}));
    
const filterSelf = (position: Position, positions: Position[]): Position[] => 
    positions.filter(({x, y}) => !(x === position.x && y === position.y));