import React from 'react';
import { Form, Select } from 'antd';

export default function DatePickerField ({name, label, placeholder, value, onChange}) {
    const getOptions = (name) => {
        if (name === 'guests') {
            return (
                [
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
                ]
            );
        } else if (name === 'occasion') {
            return (
                [
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
                ]
            );
        };
    };

    return (
        <Form.Item label={label} required name={name} validateTrigger={['onChange', 'onBlur']}
            validateDebounce={400}
            rules={[
                {
                    required: true,
                    message: `Please select ${placeholder}!`,
                },
            ]}
        >
            <Select
                size='large'
                placeholder={`Choose ${placeholder}`}
                optionFilterProp='children'
                className='reservationInput'
                options={getOptions(name)}
                value={value}
                onChange={onChange}
            />
        </Form.Item>
    );
};