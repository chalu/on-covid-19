# on-covid19

An overly simplified Covid-19 infections spread estimator library. Think of this as a simple and intuitive programming interface that allows you to take in data and own estimating the impact of Covid-19 infections for a population, over a given period of time.

## Usage

TBD


## Example

Here is how this library could be used :

```javascript

import onCovid19 from "on-covid19";

const lagos = {
    country: 'NG'
    reportedCases: 50
};

const estimator = async data => {
  // this is where the estimation 
  // will happen, using all that is in 
  // the input data parameter object

  return {};
};

onCovid19(lagos, estimator)
  .estimateImpactAfter(30)
  .days();

```
