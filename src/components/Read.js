import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router-dom';

import { getSpecificCar } from '../api/Cars';

export default function Read() {
  const [availableCar, setAvailableCar] = useState([]);
  const location = useLocation();
  const { carId } = location.state;
  console.log('car', carId);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getSpecificCar(carId);
      setAvailableCar(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>LicensePlate</th>
            <th>Manufacturer</th>
            <th>OperationCity</th>
            <th>Status</th>
            <th>CreatedAt</th>
            <th>LastUpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{availableCar.id}</td>
            <td>{availableCar.brand}</td>
            <td>{availableCar.licensePlate}</td>
            <td>{availableCar.manufacturer}</td>
            <td>{availableCar.operationCity}</td>
            <td>{availableCar.status}</td>
            <td>{availableCar.createdAt}</td>
            <td>{availableCar.lastUpdatedAt}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
