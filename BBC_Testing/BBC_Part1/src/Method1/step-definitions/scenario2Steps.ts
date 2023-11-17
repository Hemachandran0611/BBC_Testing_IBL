import { Given, Then } from '@cucumber/cucumber';
import { apiClient } from '../api/apiClient';
import { expect } from 'chai';

//step to make a GET request to a specified URL and storing the elements array in variable
Given('I make a GET request to {string}', async function (this: any,url: string) {
  this.response = await apiClient.get(url);
  this.elements = this.response.data.schedule.elements; 
});

// Step to ensure a specified field in each element  is neither null nor empty
Then('the {string} field should never be null or empty in the data array', function (this: any,field: string) { 
  // Iterating over each element in the elements array  
  this.elements.forEach((element: any) => {
    expect(element[field], 'Element {field} should not be null').to.not.be.null;
    expect(element[field], 'Element {field} should not be empty').to.not.be.empty;
    });
});

// Step to check that a specific field in each element's 'episode' object matches a given value
Then('the {string} field should be {string} for every item in the data array', function (this: any, fieldName: string, expectedValue: string) {
  // Iterating over each element in the elements array  
  this.elements.forEach((element: any) => {
    expect(element.episode[fieldName], `Episode ${fieldName} should be ${expectedValue}`).to.equal(expectedValue);
    });
  });
