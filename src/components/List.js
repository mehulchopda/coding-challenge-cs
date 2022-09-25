import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { getCars } from '../api/Cars';

export default function List() {
  const [availableCars, setAvailableCars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getCars();
      setAvailableCars(response.data);
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
            <th>Update</th>
          </tr>
        </thead>
        {availableCars.map((data) => (
          <tbody key={data.id}>
            <tr>
              <td><Link to='/read' state={{ carId: data.id }}>{data.id}</Link></td>
              <td>{data.brand}</td>
              <td>{data.licensePlate}</td>
              <td>{data.manufacturer}</td>
              <td>{data.operationCity}</td>
              <td>{data.status}</td>
              <td>{data.createdAt}</td>
              <td>{data.lastUpdatedAt}</td>
              <td>
                <Link to='/update' state={{ carId: data.id }}>
                  <Button>Update</Button>
                </Link>
              </td>
            </tr>
          </tbody>

        ))}
      </Table>
    </div>
  );
}
