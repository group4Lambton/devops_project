import React, { useState, useEffect } from 'react';

import { Grid, Paper, Button, MenuItem, TextField, Typography } from '@mui/material';

import { getData } from 'src/helpers/getData';

// Simulando una lista de conductores y pedidos del día para demostración
const drivers = [
  { id: 1, name: 'Moroni mantilla' },
  { id: 2, name: 'luis jesus jimenez' },
  { id: 3, name: 'Dario Vargas' }
];

const allOrders = [
  { driverId: 1, company: 'Isis paris', regularBins: 10, bigBins: 5, regularBags: 20, observation: '' },
  { driverId: 1, company: 'Dreco nabrod', regularBins: 15, bigBins: 10, regularBags: 25, observation: '' },
  { driverId: 2, company: 'DR. Lee', regularBins: 20, bigBins: 8, regularBags: 30, observation: '' },
  { driverId: 3, company: 'Impala clos', regularBins: 12, bigBins: 7, regularBags: 22, observation: '' }
];

const OrderreceptionView = () => {
  const [selectedDriver, setSelectedDriver] = useState('');
  const [dailyOrders, setDailyOrders] = useState([]);

  const handleDriverChange = (event) => {
    setSelectedDriver(parseInt(event.target.value, 10)); // Se agrega el parámetro radix
  };

  const fetchOrders = () => {
    const orders = allOrders.filter(order => order.driverId === selectedDriver);
    setDailyOrders(orders);
  };

  const handleObservationChange = (index, event) => {
    const newOrders = [...dailyOrders];
    newOrders[index].observation = event.target.value;
    setDailyOrders(newOrders);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Aquí podrías llamar a alguna API o realizar alguna operación asíncrona si es necesario
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const { dataOrder } = getData('order');
  console.log(dataOrder);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Order Reception
      </Typography>
      <TextField
        select
        label="Select Driver"
        value={selectedDriver}
        onChange={handleDriverChange}
        fullWidth
        margin="normal"
      >
        {drivers.map((driver) => (
          <MenuItem key={driver.id} value={driver.id}>
            {driver.name}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" color="primary" onClick={fetchOrders}>
        Enter
      </Button>

      {dailyOrders.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <Grid container spacing={3}>
            {dailyOrders.map((order, index) => (
              <Grid item xs={12} key={index}>
                <Paper style={{ padding: 16 }}>
                  <Typography variant="h6">{order.company}</Typography>
                  <Typography>Regular Bins: {order.regularBins}</Typography>
                  <Typography>Big Bins: {order.bigBins}</Typography>
                  <Typography>Regular Bags: {order.regularBags}</Typography>
                  <TextField
                    label="Observation"
                    value={order.observation}
                    onChange={(event) => handleObservationChange(index, event)}
                    fullWidth
                    margin="normal"
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" color="secondary" style={{ marginTop: 20 }}>
            Crear Unidad
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderreceptionView;
