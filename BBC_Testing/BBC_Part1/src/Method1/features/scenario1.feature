Feature: API response code and time validation

  Scenario: Verify the status code and response time of the API
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response should have a status code of 200
    And the response time should be below 1000 milliseconds
