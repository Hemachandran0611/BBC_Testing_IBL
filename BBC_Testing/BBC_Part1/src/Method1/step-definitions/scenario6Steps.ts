// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { apiClient } from '../api/apiClient';

//step to make a GET request to a specified URL and storing the response header in variable
Given('I make a GET request to {string}', async function (this: any, url: string) {
  this.response = await apiClient.get(url);
  this.responseHeaders = this.response.headers; 
  
  console.log('Response Headers:', this.responseHeaders);
});

Then('the response header {string} should be a valid date', function (this: any, headerName) {
  // Convert headerName to lowercase to match Axios's header key format
  const lowerCaseHeaderName = headerName.toLowerCase();
  
  const headerValue = this.responseHeaders[lowerCaseHeaderName];
  console.log(`Header ${headerName}: ${headerValue}`);

  // assertion to check if date is not null
  expect(headerValue).to.not.be.null;

  // Regular expression to match RFC 2822 date format
  const rfc2822Regex = /^[a-zA-Z]{3}, \d{2} [a-zA-Z]{3} \d{4} \d{2}:\d{2}:\d{2} GMT$/;
  // assertion to check if date is in RFC 2822 format
  expect(headerValue).to.match(rfc2822Regex, `The "${headerName}" header should be in RFC 2822 date format`);
  
  //assertion to check if data is not marked as invalid date
  const headerDate = new Date(headerValue);
  expect(headerDate.toString()).to.not.equal('Invalid Date', `The "${headerName}" header should be a valid date`);
});

