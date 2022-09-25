import axios from 'axios';

export const BASE_URL = 'https://nckbku0m91.execute-api.eu-central-1.amazonaws.com';

export const getCars = async () => {
    const apiReturn = await axios
        .get(`${BASE_URL}/cars`)
        .then(async (response) => response)
        .catch((error) => {
            console.log(error);
        });
    return apiReturn;
};

export const getSpecificCar = async (carId) => {
    const apiReturn = await axios
        .get(`${BASE_URL}/cars/${carId}`)
        .then(async (response) => response)
        .catch((error) => {
            console.log(error);
        });
    return apiReturn;
};

export const updateCar = async (carObject, carId) => {
    const apiReturn = await axios
        .post(`${BASE_URL}/cars/${carId}`, carObject)
        .then(async (response) => response)
        .catch((error) => {
            console.log(error);
        });
    return apiReturn;
};

