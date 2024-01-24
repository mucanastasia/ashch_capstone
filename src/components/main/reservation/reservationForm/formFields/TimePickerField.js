import React from 'react';
import { Form, TimePicker } from 'antd';

export default function TimePickerField ({value, onChange, disabledTime, disabled}) {

    return (
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
                value={value}
                onChange={onChange}
                inputReadOnly
                disabled={disabled}
                allowClear={false}
            />
        </Form.Item>
    );
};