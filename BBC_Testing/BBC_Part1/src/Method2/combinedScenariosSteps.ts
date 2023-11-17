// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { apiClient } from './apiClient';

let response: any;
let responseHeaders: any;
let elements: any;
let responseTime: number;

// Step to make a GET request to a specified URL and storing response, response time, headers.
Given('I make a GET request to {string}', async function (this: any, url: string) {
  try {
    const startTime = Date.now();
    response = await apiClient.get(url);
    const endTime = Date.now();
    responseTime = endTime - startTime;

    // Storing elements and headers if they exist
    elements = response?.data?.schedule?.elements;
    responseHeaders = response?.headers;
  } catch (error) {
    if (error.response) {
      response = error.response;
    } else {
      throw error;
    }
  }
});

Then('the response should have a status code of {int}', function (statusCode: number) {
  expect(response.status).to.equal(statusCode);
});

Then('the response time should be below {int} milliseconds', function (maxResponseTime: number) {
  expect(responseTime).to.be.lessThan(maxResponseTime);
});

Then('the {string} field should never be null or empty in the data array', function (fieldName: string) {
  elements.forEach((element: any) => {
    expect(element[fieldName], `Element ${fieldName} should not be null`).to.not.be.null;
    expect(element[fieldName], `Element ${fieldName} should not be empty`).to.not.be.empty;
  });
});

Then('the {string} field in {string} should never be null or empty in any schedule item', function (field, parent) {
  elements.forEach((item: any) => {
    expect(item[parent][field], `${field} field should not be null`).to.not.be.null;
    expect(item[parent][field], `${field} field should not be empty`).to.not.be.empty;
  });
});

Then('the {string} field should be {string} for every item in the data array', function (fieldName: string, expectedValue: string) {
  elements.forEach((element: any) => {
    expect(element.episode[fieldName], `Episode ${fieldName} should be ${expectedValue}`).to.equal(expectedValue);
  });
});

Then('only one episode in the list should have the {string} field as true', function (fieldName) {
  let liveEpisodeCount = 0;
  elements.forEach((element: any) => {
    if (element.episode && element.episode[fieldName] === true) {
      liveEpisodeCount++;
    }
  });
  expect(liveEpisodeCount, `There should be exactly one episode with the ${fieldName} field as true`).to.equal(1);
});

Then('the {string} date should be before the {string} date for each element', function (startField, endField) {
  elements.forEach((element: any) => {
    const start = new Date(element[startField]);
    const end = new Date(element[endField]);
    expect(start).to.be.below(end, `The ${startField} date should be before the ${endField} date`);
  });
});

Then('the response header {string} should be a valid date', function (headerName) {
  const headerValue = responseHeaders[headerName.toLowerCase()];
  expect(headerValue).to.not.be.null;
  expect(headerValue).to.match(/^[a-zA-Z]{3}, \d{2} [a-zA-Z]{3} \d{4} \d{2}:\d{2}:\d{2} GMT$/, `The "${headerName}" header should be in RFC 2822 date format`);
  const headerDate = new Date(headerValue);
  expect(headerDate.toString()).to.not.equal('Invalid Date', `The "${headerName}" header should be a valid date`);
});

Then('the response should have an error object with {string} and {string}', function (property1, property2) {
  expect(response.data.error).to.have.property(property1);
  expect(response.data.error).to.have.property(property2);
});
