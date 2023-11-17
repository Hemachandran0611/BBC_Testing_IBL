Feature: Validate 'id' and 'type' field in response data structure

  Scenario: Verify the structure and content of response data
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the "id" field should never be null or empty in the data array
    And the "type" field should be "episode" for every item in the data array
