const axios = require("axios");
module.exports = (
  latLng = "20.941490165073517,105.81199706936434",
  callback
) => {
  const url = `http://api.weatherstack.com/current?access_key=f3c903dd27e1d7fdc56a1dd58b1c76e7&query=${latLng}`;

  axios
    .get(url)
    .then((res) => res.data)
    .then((data) => {
      if (data.error) {
        callback(data.error, undefined);
        return;
      }

      const { location, current } = data;
    //   console.log(data);
      callback(
        null,
        `Nhiệt độ ở ${location.name}/${location.country} bây giờ là ${current.temperature}. Có ${current.precip}% tỉ lệ trời mưa.\n`
      );
    })
    .catch((error) =>
      callback("Can not connect to weather service", undefined)
    );
};
