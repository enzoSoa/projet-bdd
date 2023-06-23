Feature: Get the number of alive neighbors of a cell

    Scenario: A dead cell should'nt be counted as a neighbor
        Given generation currently look like this:
            |1|2|3|
            | | | |
            | | | |
            | | | |
        And my cell is in column 2 and row 2
        When i get the number of neighbors
        Then i should get a 0 neighbors count

    Scenario: A living cell should'nt be counted as its own neighbor
        Given generation currently look like this:
            |1|2|3|
            | | | |
            | |X| |
            | | | |
        And my cell is in column 2 and row 2
        When i get the number of neighbors
        Then i should get a 0 neighbors count

    Scenario: A dead cell with 8 neighbors should have 8 alive neighbors
        Given generation currently look like this:
            |1|2|3|
            |X|X|X|
            |X| |X|
            |X|X|X|
        And my cell is in column 2 and row 2
        When i get the number of neighbors
        Then i should get a 8 neighbors count

    Scenario: A living cell with 8 neighbors should have 8 alive neighbors
        Given generation currently look like this:
            |1|2|3|
            |X|X|X|
            |X|X|X|
            |X|X|X|
        And my cell is in column 2 and row 2
        When i get the number of neighbors
        Then i should get a 8 neighbors count

    Scenario: A cell should'nt count spaced out neighbors
        Given generation currently look like this:
            |1|2|3|4|5|
            |X|X|X|X|X|
            |X| | | |X|
            |X| |X| |X|
            |X| | | |X|
            |X|X|X|X|X|
        And my cell is in column 3 and row 3
        When i get the number of neighbors
        Then i should get a 0 neighbors count
        
    Scenario: A cell on the edge should'nt count other edge neighbors
        Given generation currently look like this:
            |1|2|3|
            | | |X|
            |X| |X|
            | | |X|
        And my cell is in column 1 and row 2
        When i get the number of neighbors
        Then i should get a 0 neighbors count