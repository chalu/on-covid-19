/** @module on-Covid19 infections impact estimator */

/**
 * Estimate the impact of COVID-19
 * infections after a period of time
 * @param {object} data a map of properties and figures to aid your estimation. See below exampl for contents of data
 *
 * @example
 * data = {
 *   timeToElapse: 3,
 *   periodType: 'DAYS'     // or WEEKS, MONTHS, YEARS
 *   since: 1585150624860,  // timestamp of current time or datetime to estimate from
 *   reportedCases: 50,
 *   population: 22000000,
 *   totalHospitalBeds: 50000,
 *   testsPerMillionPeople: 0.5
 * };
 *
 * @returns {object}
 */
const covid19ImpactEstimator = async (data) => {
  
  return {
    data,
    impact: {},
    severeImpact: {}
  };;
};

export default covid19ImpactEstimator;
