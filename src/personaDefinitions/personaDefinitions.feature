Feature: Generations persona definitions

    Scenario: One alive cell persona
        Given a generation named only one alive cell looking like this:
            |1|2|3|
            | | | |
            | |X| |
            | | | |
        Then a cell is present at column 2 and row 2
        
    Scenario: Squared cells persona
        Given a generation named squared cells looking like this:
            |1|2|3|
            |X|X| |
            |X|X| |
            | | | |
        Then a cell is present at column 1 and row 1
        And a cell is present at column 1 and row 2
        And a cell is present at column 2 and row 1
        And a cell is present at column 2 and row 2

    Scenario: Full vertical cells persona
        Given a generation named full vertical cells looking like this:
            |1|2|3|
            | |X| |
            | |X| |
            | |X| |
        Then a cell is present at column 2 and row 1
        And a cell is present at column 2 and row 2
        And a cell is present at column 2 and row 3
        
    Scenario: Full horizontal cells persona
        Given a generation named full horizontal cells looking like this:
            |1|2|3|
            | | | |
            |X|X|X|
            | | | |
        Then a cell is present at column 1 and row 2
        And a cell is present at column 2 and row 2
        And a cell is present at column 3 and row 2

    Scenario: No alive cells persona
        Given a generation named no alive cells looking like this:
            |1|2|3|
            | | | |
            | | | |
            | | | |
        Then no cell should be in the generation