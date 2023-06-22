Feature: Get the state of a cell in the next generation

    Scenario: A living cell with fewer than two live neighbours should die of underpopulation
        Given a living cell with 1 neighbours
        When the cell is passing to the next generation
        Then the cell should have died from underpopulation

    Scenario: A living cell with two live neighbours should survive
        Given a living cell with 2 neighbours
        When the cell is passing to the next generation
        Then the cell should have survived

    Scenario: A living cell with three live neighbours should survive
        Given a living cell with 3 neighbours
        When the cell is passing to the next generation
        Then the cell should have survived

    Scenario: A dead cell with three live neighbours should revive
        Given a dead cell with 3 neighbours
        When the cell is passing to the next generation
        Then the cell should have revived 

    Scenario: A dead cell with a count of living neighbours different than 3 stay dead
        Given a dead cell with 2 neighbours
        When the cell is passing to the next generation
        Then the cell should have stayed dead

    Scenario: A living cell with more than three live neighbours should die of overpopulation
        Given a living cell with 4 neighbours
        When the cell is passing to the next generation
        Then the cell should have died from overpopulation
