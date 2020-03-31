/** @module onCovid19
 *
 * A fluent programming interface for users
 * and tools to easily make novelty estimations 
 * of the impact of covid-19 infections.
 *
 * With this API, client code could look like below :
 *
 * @example
 * import estimator from 'path/to/estimator.js';
 *
 * const data = { population: 5000000, reportedCases: 247, ... }
 * const estimate = onCovid19(data, estimator)
 *    .estimateImpactAfter(30)
 *    .days();
 */

/**
 * Durations to estimate impact over
 */
export const PERIOD = {
  /** Estimate impact in days */
  DAYS: "DAYS",

  /** Estimate impact in weeks */
  WEEKS: "WEEKS",

  /** Estimate impact in months */
  MONTHS: "MONTHS"
};

const defaultConfig = {
  region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 3,
    avgDailyIncomePopulation: 0.56
  },
  reportedCases: 1992,
  population: 48437107,
  totalHospitalBeds: 858331
};

const defaultEstimator = data => {
  return {
    data,
    impact: {},
    severeImpact: {}
  };
};

const estimateAs = (config, timeToElapse, estimator) => {
  const estimateFor = periodType => () => {
    const data = {
      ...defaultConfig,
      ...{ timeToElapse, periodType },
      ...config
    };
    return estimator(data);
  };

  return {
    days: estimateFor(PERIOD.DAYS),
    week: estimateFor(PERIOD.WEEKS),
    weeks: estimateFor(PERIOD.WEEKS),
    month: estimateFor(PERIOD.MONTHS),
    months: estimateFor(PERIOD.MONTHS)
  };
};

/**
 *
 * @param {Object} config the input data
 * @param {Function} estimator the function handling estimation
 * @returns {Object} the impact estimation
 *
 * @example
 * import estimator from 'path/to/estimator.js';
 *
 * const data = { population: 5000000, reportedCases: 247, ... }
 * const estimate = onCovid19(data, estimator)
 *    .estimateImpactAfter(30)
 *    .days();
 */
export const onCovid19 = (config, estimator = defaultEstimator) => {
  return {
    /**
     * A delegate that calls your estimator function
     */
    estimateImpactAfter: timeToElapse =>
      estimateAs(config, timeToElapse, estimator)
  };
};