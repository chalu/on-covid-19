/** @module onCovid19
 *
 * A fluent programming interface allowing users
 * and tools easily estimate covid-19 infections rate based on data.
 *
 * With this API, client code could look like below :
 *
 * @example
 *
 * onCovid19({
 *
 * }).estimateImpactAfter(30).days();
 *
 *
 */

const PERIOD = {
  DAYS: "DAYS",
  WEEKS: "WEEKS",
  YEARS: "YEARS",
  MONTHS: "MONTHS"
};

const defaultConfig = {
  reportedCases: 35,
  population: 200000000,
  totalHospitalBeds: 1000000,
  testsPerMillionPeople: 0.5
};

const delegateAs = (config, timeToElapse, estimator) => {
  const estimateFor = (periodType) => () => {
    const data = {
      ...defaultConfig,
      ...{ timeToElapse, periodType, since: Date.now() },
      ...config
    };
    return estimator(data);
  };

  return {
    days: estimateFor(PERIOD.DAYS),
    week: estimateFor(PERIOD.WEEKS),
    weeks: estimateFor(PERIOD.WEEKS),
    year: estimateFor(PERIOD.YEARS),
    years: estimateFor(PERIOD.YEARS),
    month: estimateFor(PERIOD.MONTHS),
    months: estimateFor(PERIOD.MONTHS)
  };
};

/**
 *
 * @param {object} data
 * @returns {object}
 */
const defaultEstimator = async (data) => {
  return {
    data,
    impact: {},
    severeImpact: {}
  };
};

/**
 *
 * @param {*} config
 * @param {*} estimator
 *
 * @example
 * onCovid19({...}).estimateImpactAfter(30).days();
 */
const onCovid19 = (config = defaultConfig, estimator = defaultEstimator) => {
  return {
    estimateImpactAfter: (timeToElapse) =>
      delegateAs(config, timeToElapse, estimator)
  };
};

export default onCovid19;
