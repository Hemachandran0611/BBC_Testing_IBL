Feature: Validate 'live' field in response data

  Scenario: Verify that only one episode in the list has 'live' field as true
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then only one episode in the list should have the 'live' field as true
