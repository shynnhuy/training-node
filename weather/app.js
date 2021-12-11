const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const place = process.argv[2];

if (!place) console.log("Hãy nhập địa điểm");
else
  forecast(place, (error, result) =>
    error ? console.log(error) : console.log(result)
  );

//   geocode(place, (error, latLng) =>
//     error
//       ? console.log(error)
//       : forecast(latLng, (error, result) =>
//           error ? console.log(error) : console.log(result)
//         )
//   );
