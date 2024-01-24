import React, { useState, useEffect } from 'react';
import { DatePicker, TimePicker, Select, Input, Form, Button, Modal, notification, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import locale from 'antd/es/locale/en_GB';
import updateLocale from 'dayjs/plugin/updateLocale';
import './reservation.css';
import { fetchAPI, submitAPI } from './mocks/mockAPI.js';

dayjs.extend(updateLocale);
dayjs.updateLocale('en-gb', {
  weekStart: 1,
});

  export default function Reservation({name, title, subtitle}) {

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

    // const getDisabledDate = (current) => {
    //   return current && current < dayjs().endOf('day');
    // };

    const getDisabledDate = (current) => {
      const startDate = dayjs('2024-01-23');
      const endDate = dayjs('2024-02-23');
      return current && (current < startDate || current > endDate);
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

      // I commented out lines [84-87] to be able to see an error screen after submitting the form.
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
      <section className={name} id={name} >
        <div className='container'>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <Form layout='vertical' autoComplete='off' form={form} onFinish={handleSubmit} scrollToFirstError	>
            <div className='formContainer'>
              <article>
                <h3>Step 1</h3>
                <ConfigProvider locale={locale}>
                  <Form.Item label='Date' required name='date' validateTrigger={['onChange', 'onBlur']}
                  validateDebounce={400}
                  rules={[
                    {
                      required: true,
                      message: 'Please select a date!',
                    },
                  ]}
                  >
                    <DatePicker
                      format='DD/MM/YYYY'
                      disabledDate={getDisabledDate}
                      size='large'
                      className='reservationInput'
                      popupClassName='calendar'
                      value={dayjs(date)}
                      onChange={handleDate}
                      inputReadOnly
                      allowClear={false}
                    />
                  </Form.Item>
                  <Form.Item label='Time' required name='time' validateTrigger={['onChange', 'onBlur']}
                    validateDebounce={400}
                    rules={[
                      {
                        required: true,
                        message: 'Please select time!',
                      },
                    ]}
                  >
                    <TimePicker
                      changeOnBlur
                      size='large'
                      hideDisabledOptions
                      disabledTime={getDisabledTime}
                      format='HH:00'
                      minuteStep={60}
                      className='reservationInput'
                      popupClassName='timePopup'
                      value={time}
                      onChange={handleTime}
                      inputReadOnly
                      disabled={!getIsTimePickerAvailable}
                      allowClear={false}
                    />
                  </Form.Item>
                </ConfigProvider>
              </article>
              <article>
                <h3>Step 2</h3>
                <Form.Item label='Number of Guests' required name='guests' validateTrigger={['onChange', 'onBlur']}
                  validateDebounce={400}
                  rules={[
                    {
                      required: true,
                      message: 'Please select number of guests!',
                    },
                  ]}
                >
                  <Select
                    size='large'
                    placeholder='Choose number of guests'
                    optionFilterProp='children'
                    className='reservationInput'
                    options={[
                      {
                        value: '1 person',
                        label: '1 person',
                      },
                      {
                        value: '2 people',
                        label: '2 people',
                      },
                      {
                        value: '3 people',
                        label: '3 people',
                      },
                      {
                        value: '4 people',
                        label: '4 people',
                      },
                      {
                        value: '5 people',
                        label: '5 people',
                      },
                      {
                        value: '6 people',
                        label: '6 people',
                      },
                      {
                        value: '7 people',
                        label: '7 people',
                      },
                      {
                        value: '8 people',
                        label: '8 people',
                      },
                    ]}
                    value={numberOfGuests}
                    onChange={handleNumberOfGuests}
                  />
                </Form.Item>
                <Form.Item label='Occasion' required name='occasion' validateTrigger={['onChange', 'onBlur']}
                  validateDebounce={400}
                  rules={[
                    {
                      required: true,
                      message: 'Please select your occasion!',
                    },
                  ]}
                >
                  <Select
                    size='large'
                    placeholder='Choose your occasion'
                    optionFilterProp='children'
                    className='reservationInput'
                    options={[
                      {
                        value: 'No Specific Occasion',
                        label: 'No Specific Occasion',
                      },
                      {
                        value: 'Birthday',
                        label: 'Birthday',
                      },
                      {
                        value: 'Anniversary',
                        label: 'Anniversary',
                      },
                      {
                        value: 'Engagement',
                        label: 'Engagement',
                      },
                    ]}
                    value={occasion}
                    onChange={handleOccasion}
                  />
                </Form.Item>
              </article>
              <article>
                <h3>Step 3</h3>
                <Form.Item label='Name' name='name' required validateTrigger={['onChange', 'onBlur']}
                  validateDebounce={400}
                  validateFirst
                  rules={[
                    {
                      max: 15,
                      message: 'The name cannot exceed 15 characters'
                    },
                    {
                      type: 'string',
                      min: 3,
                      message: 'The name must be over 3 characters'
                    },
                    {
                      required: true,
                      message: 'Please fill your name!',
                    },
                  ]}>
                  <Input
                    size='large'
                    placeholder='Fill your name'
                    className='reservationInput'
                    value={customerName}
                    onChange={handleCustomerName}
                  />
                </Form.Item>
                <Form.Item label='Phone number' name='phone'  required validateTrigger={['onChange', 'onBlur']}
                  validateDebounce={400}
                  validateFirst
                  rules={[
                    {
                      validator: (_, value) => {
                        if (!value) {
                          return Promise.reject('Please enter your phone number!');
                        }
                        if (/[^0-9]/.test(value)) {
                          return Promise.reject('Please use only numbers');
                        }
                        if (!/^\d{10}$/.test(value)) {
                          return Promise.reject('Please provide a 10-digit phone number');
                        }
                        return Promise.resolve();
                        }
                    },
                  ]}
                  >
                  <Input
                    size='large'
                    placeholder='Fill your Phone number'
                    className='reservationInput'
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </Form.Item>
              </article>
            </div>
            <Button htmlType='submit' loading={loadings[0]} disabled={!getIsFormValid} block size='large' >{buttonName}</Button>
          </Form>
        </div>
      </section>
    );
  };