Feature: Validate transmission dates

  Scenario: Verify that the transmission_start is before transmission_end
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the "transmission_start" date should be before the "transmission_end" date for each element
