import onCovid19 from "./index";
import estimator from "./estimator";

const lagosNG = {
  reportedCases: 50,
  population: 22000000
};

const run = async () => {
  const result = await onCovid19(lagosNG, estimator)
    .estimateImpactAfter(30)
    .days();

  console.dir(result);
};

run();
