# on-covid-19

An overly simplified COVID-19 infections spread estimation API. Think of this as a simple and intuitive programming interface that allows you to take in data and own estimating the impact of Covid-19 infections for a population, over a given period of time.

## Installation & Setup

1.  Install the package
    ```
    npm -i on-covid-19
    ```
    ```
    yarn add on-covid-19
    ```
2.  Import and use the api's utilities
    ```javascript
    // src/estimator.js
    import { PERIOD, whatPercentOf, whatIs } from 'on-covid-19';

    ```
3.  Import and use the core api
    ```javascript
    // src/app.js
    import { onCovid19 } from 'on-covid-19';

    ```   


## Usage

Below is how this library could be used. See the API documentation for more details

```javascript
// src/estimator.js
import { PERIOD, whatPercentOf, whatIs } from 'on-covid-19';
const covid19ImpactEstimator = data => {
  // this is where the estimation 
  // will happen, using all that is in 
  // the input data parameter object

  return {};
};

export default covid19ImpactEstimator;

// src/app.js
import estimator from "./estimator.js";
import { onCovid19 } from "on-covid-19";

const lagosNG = {
  ...,
  reportedCases: 50,
  population: 22000000
};

const result = onCovid19(lagosNG, estimator)
  .estimateImpactAfter(30)
  .days();

console.dir(result);

```

<!--- 
E.g There will be 79 beds left to treat 3,500 severe COVID-19 patients who require hospitalization to recover.

THIS IS THE BIG PROBLEM: Nigeria will only have 79 unfilled beds but without extreme social distancing 
will have 921 sever COVID-19 positive cases 30 days from now. 
HOW ARE WE GOING TO TREAT THE OTHER 842 PATIENTS THAT REQUIRE HOSPITALIZATION TO RECOVER? 
(We would need 3.7 more hospitals the size of UBTH, each with 226 beds, to handle this number of patients).

Nigeria has five hospital beds per 10,000 population cc page 13 of https://www.rvo.nl/sites/default/files/Market_Study_Health_Nigeria.pdf
-->
