
// TASK #45 (Cars:)
function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): object {
  let car = { manufacturer, model };

  options.forEach(([key, value]) => (car[key] = value));
  return car;
}
console.log(make_car("Honda", "Civic", ["colour", "black"], ["year", "2019"]));
console.log(
  make_car("Toyota", "Fortuner", ["colour", "white"], ["sunroof", "true"])
);
