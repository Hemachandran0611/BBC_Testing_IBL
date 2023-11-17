Feature: Validate 'title' field in response data

  Scenario: Verify that the 'title' field in 'episode' is never null or empty
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the 'title' field in 'episode' should never be null or empty in any schedule item
