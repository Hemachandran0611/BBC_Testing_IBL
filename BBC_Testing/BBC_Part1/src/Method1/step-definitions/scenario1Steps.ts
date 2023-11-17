import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { apiClient } from '../api/apiClient';

// variable to store the response time
let responseTime: number;

//step to make a GET request to a specified URL
Given('I make a GET request to {string}', async function (this: any,url: string) {
    // Recording the start time of the request
    const startTime = Date.now();
    // Making the GET request and storing the response
    this.response = await apiClient.get(url);
    // Recording the end time of the request
    const endTime = Date.now();
    // Calculating the response time
    responseTime = endTime - startTime;
    console.log(`Response time: ${responseTime} milliseconds`);
    console.log(`Response status code: ${this.response.status}`);
});

// below steps to check if the response status code and response time are expected
Then('the response should have a status code of {int}', function (this: any,responseCode: number) {
    expect(this.response.status).to.equal(responseCode);
});

Then('the response time should be below {int} milliseconds', function (this: any,maxResponseTime: number) {
    expect(responseTime).to.be.lessThan(maxResponseTime);
});
