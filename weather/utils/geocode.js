const axios = require("axios");
module.exports = (place = "Ha noi", callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1Ijoic2h5bm4iLCJhIjoiY2t4MXE5azA5MTRnaTJxcHoweTluczU5ZSJ9.zS0qiqURbouNe_pB8wtA3A&limit=1`;

  axios
    .get(url)
    .then((res) => res.data)
    .then((data) => {
      if (data.error) {
        callback("Không tìm thấy địa điểm này.", undefined);
        return;
      }
    //   console.log(data.features[0]);
      callback(
        null,
        `${data.features[0].center[0]},${data.features[0].center[1]}`
      );
    })
    .catch((error) =>
      callback("Không thể kết nối đến server mapbox", undefined)
    );
};
