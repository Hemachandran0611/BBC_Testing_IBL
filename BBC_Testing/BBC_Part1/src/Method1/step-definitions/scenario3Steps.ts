import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { apiClient } from '../api/apiClient';

//step to make a GET request to a specified URL and storing the elements array in variable
Given('I make a GET request to {string}', async function (this: any, url: string) {
  this.response = await apiClient.get(url);
  this.elements = this.response.data.schedule.elements; 
});

// Step to ensure a specified field in a parent object is never null or empty in any schedule item
Then('the {string} field in {string} should never be null or empty in any schedule item', function (field, parent) {
  // Iterating over each item in the elements array
  this.elements.forEach((item: any) => {
    expect(item[parent][field], `${field} field should not be null`).to.not.be.null;
    expect(item[parent][field], `${field} field should not be empty`).to.not.be.empty;
  });
});
