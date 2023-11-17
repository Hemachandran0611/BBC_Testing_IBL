Feature: Combined API Testing Scenarios

  Scenario: Verify the status code and response time of the API
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response should have a status code of 200
    And the response time should be below 1000 milliseconds

 Scenario: Verify the structure and content of response data
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the "id" field should never be null or empty in the data array
    And the "type" field should be "episode" for every item in the data array

  Scenario: Verify that the 'title' field in 'episode' is never null or empty
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the 'title' field in 'episode' should never be null or empty in any schedule item

 Scenario: Verify that only one episode in the list has 'live' field as true
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then only one episode in the list should have the 'live' field as true

Scenario: Verify that the transmission_start is before transmission_end
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the "transmission_start" date should be before the "transmission_end" date for each element

Scenario: Verify the "Date" value in the response headers
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response header "Date" should be a valid date

Scenario: Verify that a non-existent resource returns a 404 status code with appropriate error details
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest/2023-09-11"
    Then the response should have a status code of 404
    And the response should have an error object with 'details' and 'http_response_code'