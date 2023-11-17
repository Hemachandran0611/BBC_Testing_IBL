// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { apiClient } from '../api/apiClient';


Given('I make a GET request to {string}', async function (this: any, url: string) {
  try {
    this.response = await apiClient.get(url);
  } catch (error) {
    // Check if the error is due to  non-200 status code
    if (error.response) {
      // Store the response from the error object
      this.response = error.response;
    } else {
      // If the error is not due to a non-200 status code, rethrow it
      throw error;
    }
  }
});

//step to check if response code is 404
Then('the response status code should be {int}', function (this: any,responseCode: number) {
  expect(this.response.status).to.equal(responseCode);
});

//step to check if error object as the mentioned properties 
Then('the response should have an error object with {string} and {string}', function (property1, property2) {
    expect(this.response.data.error).to.have.property(property1);
    expect(this.response.data.error).to.have.property(property2);
  });
