Feature: Get next generation
    
    Background:
        Given a generation named only one alive cell looking like this:
            |1|2|3|
            | | | |
            | |X| |
            | | | |
        And a generation named no alive cells looking like this:
            |1|2|3|
            | | | |
            | | | |
            | | | |
        And a generation named squared cells looking like this:
            |1|2|3|
            |X|X| |
            |X|X| |
            | | | |
        And a generation named full vertical cells looking like this:
            |1|2|3|
            | |X| |
            | |X| |
            | |X| |
        And a generation named full horizontal cells looking like this:
            |1|2|3|
            | | | |
            |X|X|X|
            | | | |

    Scenario: Only one cell doesn't survive till the next generation
        Given current generation is only one alive cell
        When i get the next generation
        Then i get a generation with no alive cells
    
    Scenario: Four cells in a squared shape survive till the next generation
        Given current generation is squared cells
        When i get the next generation
        Then i get a generation with squared cells

    Scenario: Three horizontaly aligned cells make a vertical line in the next generation
        Given current generation is full horizontal cells
        When i get the next generation
        Then i get a generation with full vertical cells
        
    Scenario: Three vertical aligned cells make a horizontal line in the next generation
        Given current generation is full vertical cells
        When i get the next generation
        Then i get a generation with full horizontal cells