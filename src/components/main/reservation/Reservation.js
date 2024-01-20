import React, { useState, useEffect } from 'react';
import { DatePicker, TimePicker, Select, Input, Form, Button, Modal, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import locale from 'antd/es/locale/en_GB';
import updateLocale from 'dayjs/plugin/updateLocale';
import './reservation.css';

dayjs.extend(updateLocale);
dayjs.updateLocale('en-gb', {
  weekStart: 1,
});

  export default function Reservation({name, title, subtitle, disabledTimes, dispatch}) {

    const [getIsFormValid, setGetIsFormValid] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [getIsTimePickerAvailable, setGetIsTimePickerAvailable] = useState(false);


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

    const [form] = Form.useForm();

    const handleDate = (value) => {
      const valueDate = dayjs(value).format('DD/MM/YYYY');
      setDate(valueDate);
      dispatch({ type: 'update', date: value })
    }
    const handleTime = (value) => {
      const valueTime = dayjs(value).format('HH:00');
      setTime(valueTime);
    }
    const handleNumberOfGuests = (value) => {
      setNumberOfGuests(value);
    }

    const handleOccasion = (value) => {
      setOccasion(value);
    }

    const handleCustomerName = (event) => {
      const value = event.target.value;
      if (value) {
        setCustomerName(value);
      }
    }

    const handlePhoneNumber = (event) => {
      const value = event.target.value;
      if (value) {
        setPhoneNumber(value);
      }
    }

    const [loadings, setLoadings] = useState([]);
    const [buttonName, setButtonName] = useState('Make Your Reservation');
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

    const handleSubmit = () => {
      enterLoading(0);
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
      }, 2000);
      clearForm();
    }

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
    }

    const disabledTime = () => {
      return {
        disabledHours: () => disabledTimes,
      };
    };

    const disabledDate = (current) => {
      return current && current < dayjs().endOf('day');
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
                      disabledDate={disabledDate}
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
                      disabledTime={disabledTime}
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
  }