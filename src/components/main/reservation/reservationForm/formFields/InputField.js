import React from 'react';
import { Form, Input } from 'antd';

export default function InputField ({name, label, placeholder, value, onChange}) {
    const getRules = (name) => {
        if (name === 'name') {
            return (
                [
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
                ]
            );
        } else if (name === 'phone') {
            return (
                [
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
                ]
            );
        };
    }

    return (
        <Form.Item label={label} name={name} required validateTrigger={['onChange', 'onBlur']}
            validateDebounce={400}
            validateFirst
            rules={getRules(name)}
        >
            <Input
                size='large'
                placeholder={`Fill ${placeholder}`}
                className='reservationInput'
                value={value}
                onChange={onChange}
            />
        </Form.Item>
    );
};