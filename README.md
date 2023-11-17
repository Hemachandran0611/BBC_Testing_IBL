# BBC_Testing

This repository is dedicated to API testing for automating provided scenarios. It is structured into two main parts: 
- `BBC_Part1` contains the automation code for testing.
- `BBC_Part2` contains an Excel sheet for Functional Manual Testing, detailing test cases, scenarios, and results.

## Installation

Follow these steps to install the BBC_Testing_IBL project:

1. **Clone the Repository**
   
   First, clone the repository to your local machine:
   ```bash
   git clone https://github.com/Hemachandran0611/BBC_Testing_IBL.git

2. **Navigate to the Project Directory**

    After cloning, move into the project directory:
   ```bash
   cd BBC_Testing_IBL\BBC_Testing\BBC_Part1

3. **Install Dependencies**

    To install the necessary dependencies, (This command will install all dependencies listed in package.json.) run:
    ```bash
   npm install

4. **Running Tests for Method 1 and Method 2**
    
    ### Method 1:
     In this approach, each scenario is implemented in a separate feature file and its corresponding step definition file. This structure is chosen to distinctly separate different scenarios from one another, enhancing clarity and comprehension.

    Run Individual Test Scenarios
    ```bash
    npm run testScenario1
    npm run testScenario2
    npm run testScenario3
    # ... and so on for other scenarios
    ```
    Run All Test Scenarios
     ```bash
     npm run testAllScenarios
    ```
    ### Method 2: 
    This method consolidates all scenarios into a single feature file, while their respective steps are defined in a step definition file. The primary goal of this implementation is to minimize repetitive steps and facilitate efficient code refactoring. 

    To run by method 2 
    ```bash
     npm run method2Scenarios
    ```

5. **Additional Information** 
Ensure you have Node.js and npm installed before running these commands. 
The test results will be displayed in the console after the execution of the test scenarios.
