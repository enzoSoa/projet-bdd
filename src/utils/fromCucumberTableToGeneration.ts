export const fromCucumberTableToGeneration = (table: Record<string, string>[]) => table.map(row => Object.values(row).map(cell => cell === "X"));