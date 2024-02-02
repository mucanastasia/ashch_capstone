import React from 'react';
import { Form, DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import locale from 'antd/es/locale/en_GB';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);
dayjs.updateLocale('en-gb', {
  weekStart: 1,
});

export default function DatePickerField ({value, onChange}) {
    const getDisabledDate = (current) => {
        return current && (current < dayjs() || current > dayjs().add(31, 'day'));
    };

    return (
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
                value={dayjs(value)}
                onChange={onChange}
                inputReadOnly
                allowClear={false}
                picker='date'
            />
            </Form.Item>
        </ConfigProvider>
    );
};
