// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { apiClient } from '../api/apiClient';

//step to make a GET request to a specified URL and storing the elements array in variable
Given('I make a GET request to {string}', async function (this: any, url: string) {
  this.response = await apiClient.get(url);
  this.elements = this.response.data.schedule.elements; 
});

// Step to verify that only one episode in the list has a specific field set to true
Then('only one episode in the list should have the {string} field as true', function (fieldName) {
  // Variable to count the number of live episodes with the specified field
  let liveEpisodeCount = 0;

  // Iterating over each item in the elements array
  for (const element of this.elements) {
    // Checking if the episode exists and if the specified field is true
    if (element.episode && element.episode[fieldName] === true) {

      // Incrementing the count for each episode found with the field set to true
      liveEpisodeCount++;
    }
  }
  // Asserting that there is exactly one episode with the specified field set to true
  expect(liveEpisodeCount, 'There should be exactly one episode with the ${fieldName} field as true').to.equal(1);
});
