/** @module on-Covid19 infections impact estimator */

/**
 * Estimate the impact of COVID-19
 * infections after a period of time
 * @param {Object} data a map of properties and figures to aid your estimation. See below exampl for contents of data
 *
 * @example
 * data = {
 *   timeToElapse: 3,
 *   periodType: 'DAYS'   // or WEEKS, MONTHS
 *   reportedCases: 50,
 *   population: 22000000,
 *   totalHospitalBeds: 50000
 * };
 * 
 * const estimate = covid19ImpactEstimator(data);
 *
 * @returns {Object}
 */
const covid19ImpactEstimator = (data) => {
  
  return {
    data,
    impact: {},
    severeImpact: {}
  };;
};

export default covid19ImpactEstimator;
