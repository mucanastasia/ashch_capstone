import React from 'react';
import ReservationForm from './reservationForm/ReservationForm';
import './reservation.css';

export default function Reservation({ name, title, subtitle }) {
    return (
        <section className={name} id={name}>
            <div className="container">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
                <ReservationForm />
            </div>
        </section>
    );
};