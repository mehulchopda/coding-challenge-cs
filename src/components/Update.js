import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { getSpecificCar, updateCar } from '../api/Cars';

export default function Update() {
  const [formValue, setformValue] = React.useState({
    brand: '',
    licensePlate: '',
    manufacturer: '',
    operationCity: '',
    status: '',
    createdAt: ''
  });
  const location = useLocation();
  const { carId } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSpecificCar(carId);
      const carData = {
        brand: response.data.brand,
        licensePlate: response.data.licensePlate,
        manufacturer: response.data.manufacturer,
        operationCity: response.data.operationCity,
        status: response.data.status,
        createdAt: response.data.createdAt
      };
      setformValue(carData);
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateCar(formValue, carId);
    if (response) {
      console.log('Data updated successfully');
    }
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBrand'>
          <Form.Label>Brand</Form.Label>
          <Form.Control type='text' placeholder='Brand' name='brand' value={formValue.brand} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formLicensePlate'>
          <Form.Label>LicensePlate</Form.Label>
          <Form.Control type='text' placeholder='licensePlate' name='licensePlate' value={formValue.licensePlate} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formManufacturer'>
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control type='text' placeholder='manufacturer' name='manufacturer' value={formValue.manufacturer} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formOperationCity'>
          <Form.Label>OperationCity</Form.Label>
          <Form.Control type='text' placeholder='operationCity' name='operationCity' value={formValue.operationCity} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formStatus'>
          <Form.Label>Status</Form.Label>
          <Form.Control type='text' placeholder='Status' name='status' value={formValue.status} onChange={handleChange} />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
