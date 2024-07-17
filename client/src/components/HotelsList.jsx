import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonAppBar from './navbar';
import axios from 'axios';
import './HotelsList.css'; 

const HotelsList = () => {
    const [hotels, setHotels] = useState([]);
    const [editingHotel, setEditingHotel] = useState(null);

    useEffect(() => {
        fetchHotels();
    }, []);

    const fetchHotels = async () => {
        const response = await axios.get('http://localhost:3000/hotel/getAll');
        setHotels(response.data);
    };

    const deleteHotel = async (id) => {
        await axios.delete(`http://localhost:3000/hotel/${id}`);
        fetchHotels();
    };

    const updateHotel = (hotel) => {
        setEditingHotel(hotel);
    };

    return (
        <div>
            <ButtonAppBar />
            <Typography variant="h4" gutterBottom></Typography>
            <div className="hotels-grid">
                {hotels.map(hotel => (
                    <div key={hotel.id} className="hotel-card">
                        <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
                        <Typography variant="h6">{hotel.name}</Typography>
                        <Typography>{hotel.address}</Typography>
                        <Typography>{hotel.description}</Typography>
                        <Button variant="contained" color="secondary" onClick={() => deleteHotel(hotel.idhotels)}>Supprimer</Button>
                        <Button variant="contained" color="primary" onClick={() => updateHotel(hotel)}>Modifier</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelsList;
