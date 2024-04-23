import axios from "axios";
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const generalQuoteId = params.get("a");
const singleQuoteId = params.get("b");
const endPoint = "https://octopus-app-dgmcr.ondigitalocean.app/woodyCanva2d";

const localStorageName = "woodyDataSelected";

export const getWoody = async () => {
  try {
    localStorage.removeItem(localStorageName);
    if (!generalQuoteId || !singleQuoteId) {
      return false;
    }

    const response = await axios.post(endPoint, {
      _id: generalQuoteId,
      quoteId: singleQuoteId,
    });

    if (response && response.data) {
      localStorage.setItem(localStorageName, JSON.stringify(response.data));
      return response.data;
    } else {
      console.log("Error conectando a Woody");
    }
  } catch (error) {
    console.log("Error conectando a Woody");
  }
};

export const setWoody = async (params) => {
  try {
    const _id = JSON.parse(localStorage.getItem(localStorageName));
    if (!_id) {
      console.log("No existe el ID de Woody en el LocalStorage");
      return false;
    }

    const response = await axios.put(endPoint, {
      canva2d: params,
      _id,
    });

    return response.data;
  } catch (error) {
    console.log("Error conectando a Woody");
  }
};
