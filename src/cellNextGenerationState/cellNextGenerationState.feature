Feature: Get the state of a cell in the next generation

    Scenario: A living cell with fewer than two live neighbors should die of underpopulation
        Given a living cell with 1 neighbors
        When the cell is passing to the next generation
        Then the cell should have died from underpopulation

    Scenario: A living cell with two live neighbors should survive
        Given a living cell with 2 neighbors
        When the cell is passing to the next generation
        Then the cell should have survived

    Scenario: A living cell with three live neighbors should survive
        Given a living cell with 3 neighbors
        When the cell is passing to the next generation
        Then the cell should have survived

    Scenario: A dead cell with three live neighbors should revive
        Given a dead cell with 3 neighbors
        When the cell is passing to the next generation
        Then the cell should have revived 

    Scenario: A dead cell with a count of living neighbors different than 3 stay dead
        Given a dead cell with 2 neighbors
        When the cell is passing to the next generation
        Then the cell should have stayed dead

    Scenario: A living cell with more than three live neighbors should die of overpopulation
        Given a living cell with 4 neighbors
        When the cell is passing to the next generation
        Then the cell should have died from overpopulation
