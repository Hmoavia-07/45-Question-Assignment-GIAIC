//   TASK #38 (Cities:)
// making function:
function describe_cities(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n".concat(city, " is in ").concat(country, "."));
}
// Calling Function with city names & By-default country:
describe_cities("Lahore");
describe_cities("Karachi");
describe_cities("Islamabad");
// Calling Function with city name & country name:
describe_cities("Istanbul", "Turkey");
