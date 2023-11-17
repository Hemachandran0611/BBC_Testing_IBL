Feature: Validate response header

  Scenario: Verify the "Date" value in the response headers
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response header "Date" should be a valid date
