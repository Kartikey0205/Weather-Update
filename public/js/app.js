const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Please write the name before search 👀 ...`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = { your_api_key_and_use_cityval_in_it };
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      const arrData = [data];
      // console.log(arrData);

      // const Incelsius = parseFloat(arrData[0].main.temp - 273.15).toFixed(2);
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      // console.log(Incelsius);
      const tempMood = arrData[0].weather[0].main;
      // console.log(tempMood);

      //condition to check sunny or cloudy
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }
      datahide.classList.remove("data_hide");
      cityVal = "";
    } catch {
      cityVal = " ";
      datahide.classList.add("data_hide");
      city_name.innerText = `☞☞ Please enter the valid City Name! ☜☜`;
      // console.log("please add the proper city name");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
