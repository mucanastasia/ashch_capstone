import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, notification } from 'antd';
import dayjs from 'dayjs';
import { fetchAPI, submitAPI } from './mocks/mockAPI.js';
import DatePickerField from './formFields/DatePickerField';
import TimePickerField from './formFields/TimePickerField';
import SelectorField from './formFields/SelectorField';
import InputField from './formFields/InputField';

export default function ReservationForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [getIsTimePickerAvailable, setGetIsTimePickerAvailable] = useState(false);
    const [getIsFormValid, setGetIsFormValid] = useState(false);
    const [loadings, setLoadings] = useState([]);
    const [buttonName, setButtonName] = useState('Make Your Reservation');
    const [disabledTimes, setDisabledTimes] = useState();
    const [form] = Form.useForm();


    useEffect(() => {
        const validateForm = () => {
            return date && time && numberOfGuests && occasion && customerName.length >= 3 && customerName.length <= 15 && phoneNumber.length === 10;
        }
        setGetIsFormValid(validateForm());
    }, [date, time, numberOfGuests, occasion, customerName, phoneNumber]);

    useEffect(() => {
        if (date) {setGetIsTimePickerAvailable(true)}
        else {setGetIsTimePickerAvailable(false)}
    }, [date]);

    useEffect(() => {
        if (date) {
            fetchAPI(date)
            .then(result => {
                setDisabledTimes(result);
            })
            .catch(error => {
                setGetIsTimePickerAvailable(false);
                openNotification(error.message, date);
            });
        };
    },[date]);

    const getDisabledTime = () => {
        return {
            disabledHours: () => disabledTimes,
        };
    };

    const openNotification = (message, date) => {
        notification.open({
            message: `Error: ${date}`,
            description: message,
        });
    };

    const handleDate = (value) => {
        const valueDate = dayjs(value).format('DD/MM/YYYY');
        setDate(valueDate);
        // setTime('');
        // form.setFieldsValue({
        //   time: null,
        // });

        // I commented out lines [73-76] to be able to see an error screen after submitting the form.
        // Steps: - Select a date: 23/01/2024
        //        - Select time: 16:00
        //        - Change the date to 24/01/2024 (Don't touch the selected time; it should remain at 16:00)
        //        - Fill out the rest of the form
        //        - Submit the form
        // Expected result: An error indicating that the selected time for the chosen date is not available.
        // The commented code above will fix this bug by erasing the input 'Time' every time 'Date' is changed.
    };

    const handleTime = (value) => {
        const valueTime = dayjs(value).format('HH:00');
        setTime(valueTime);
    };

    const handleNumberOfGuests = (value) => {
        setNumberOfGuests(value);
    };

    const handleOccasion = (value) => {
        setOccasion(value);
    };

    const handleCustomerName = (event) => {
        const value = event.target.value;
        if (value) {
            setCustomerName(value);
        };
    };

    const handlePhoneNumber = (event) => {
        const value = event.target.value;
        if (value) {
            setPhoneNumber(value);
        };
    };

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setButtonName('Submitting...');
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
            setButtonName('Make Your Reservation');
        }, 2000);
    };

    const handleSubmit = (e) => {
        enterLoading(0);
        if (e) {
            submitAPI(e)
            .then(result => {
                if (result === true) {
                    setTimeout(() => {
                    Modal.success({
                        content: (<div className='modalContent'>
                                    <h3>Success!</h3>
                                    <h4>Here are the details of your reservation:</h4>
                                    <p>Date: <b>{date}</b></p>
                                    <p>Time: <b>{time}</b></p>
                                    <p>Number Of Guests: <b>{numberOfGuests}</b></p>
                                    <p>Occasion: <b>{occasion}</b></p>
                                    <p>Your name: <b>{customerName}</b></p>
                                    <p>Your phone number: <b>{phoneNumber}</b></p>
                                    <span>We will send your confirmation to the phone number provided!</span>
                                </div>),
                        onOk(){},
                    });
                    clearForm();
                    }, 1000);
                };
            })
            .catch(error => {
                Modal.error({
                    content: (<div className='modalContent modalContentError'>
                            <h3>Error!</h3>
                            <p>{error.message}</p>
                            </div>),
                    onOk(){},
                });
            });
        };
    };

    const clearForm = () => {
        setDate('');
        setTime('');
        setCustomerName('');
        setOccasion('');
        setCustomerName('');
        setPhoneNumber('');
        form.setFieldsValue({
            date: null,
            time: null,
            guests: undefined,
            occasion: undefined,
            name: '',
            phone: '',
        });
    };

    return (
        <Form layout="vertical" form={form} onFinish={handleSubmit} scrollToFirstError autoComplete='off'>
            <div className="formContainer">
                <article>
                    <h3>Step 1</h3>
                    <DatePickerField value={date} onChange={handleDate} />
                    <TimePickerField value={time} onChange={handleTime} disabledTime={getDisabledTime} disabled={!getIsTimePickerAvailable} />
                </article>
                <article>
                    <h3>Step 2</h3>
                    <SelectorField value={numberOfGuests} onChange={handleNumberOfGuests} name='guests' label='Number of Guests' placeholder='number of guests' />
                    <SelectorField value={occasion} onChange={handleOccasion} name='occasion' label='Occasion' placeholder='your occasion' />
                </article>
                <article>
                    <h3>Step 3</h3>
                    <InputField label='Name' value={customerName} onChange={handleCustomerName} name='name' placeholder='your name' />
                    <InputField label='Phone Number' value={phoneNumber} onChange={handlePhoneNumber} name='phone' placeholder='your phone number' />
                </article>
            </div>
            <Button htmlType='submit' loading={loadings[0]} disabled={!getIsFormValid} block size='large' >{buttonName}</Button>
        </Form>
    );
};