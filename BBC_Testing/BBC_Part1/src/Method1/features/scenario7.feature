Feature: Validate response for non-existent resource

  Scenario: Verify that a non-existent resource returns a 404 status code with appropriate error details
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest/2023-09-11"
    Then the response status code should be 404
    And the response should have an error object with 'details' and 'http_response_code'
