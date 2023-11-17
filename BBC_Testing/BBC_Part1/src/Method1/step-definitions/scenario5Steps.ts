// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { apiClient } from '../api/apiClient';

//step to make a GET request to a specified URL and storing the elements array in variable
Given('I make a GET request to {string}', async function (this: any, url: string) {
  this.response = await apiClient.get(url);
  this.elements = this.response.data.schedule.elements; 
});

// Step to validate that the start date is before the end date for each element
Then('the {string} date should be before the {string} date for each element', function (transmission_start: string,transmission_end: string) {
  
  // Iterating over each element in the elements array
  this.elements.forEach((element: any) => {

    // Parsing the start and end dates from the element
    const start = new Date(element[transmission_start]);
    const end = new Date(element[transmission_end]);
    console.log(`Start date: ${start.toISOString()}, End date: ${end.toISOString()}`);
    expect(start).to.be.below(end, 'The {transmission_start} should be before the {transmission_end}');
  });
});
