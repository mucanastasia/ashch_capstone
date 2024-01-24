jest.mock('antd', () => {
    const antd = jest.requireActual('antd');

    const useFormMock = () => [{
      resetFields: jest.fn(),
      setFieldsValue: jest.fn(),
      getFieldsValue: jest.fn(),
      validateFields: jest.fn(),
      submit: jest.fn(),
    }];

    const FormItemMock = (props) => <div {...props}>Mock Form Item</div>;

    return {
      ...antd,
      Form: {
        ...antd.Form,
        Item: FormItemMock,
        useForm: useFormMock,
      },
    };
});


jest.mock('antd/es/locale/en_GB', () => {
    return {};
  }
);

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservation from './components/main/reservation/Reservation';
import { fetchAPI } from './components/main/reservation/mocks/mockAPI';
import { renderHook } from '@testing-library/react';
// // import { initializeTimes, updateDisabledTimes } from './components/main/Main.js';


describe("Reservation form", () => {
    test("Renders the Reservation Form", () => {
      render(<Reservation name='reservation' title='Reserve a Table' subtitle='Plan your dining experience by booking a table in advance' />);
      const headingElement = screen.getByText("Reserve a Table");
      expect(headingElement).toBeInTheDocument();
      const subheadingElement = screen.getByText("Plan your dining experience by booking a table in advance");
      expect(subheadingElement).toBeInTheDocument();
      const headingStepOne = screen.getByText("Step 1");
      expect(headingStepOne).toBeInTheDocument();
      const headingStepTwo = screen.getByText("Step 2");
      expect(headingStepTwo).toBeInTheDocument();
      const headingStepThree = screen.getByText("Step 3");
      expect(headingStepThree).toBeInTheDocument();
      const labelDate = screen.getByText("Date");
      expect(labelDate).toBeInTheDocument();
      const labelTime = screen.getByText("Time");
      expect(labelTime).toBeInTheDocument();
      const labelGuests = screen.getByText("Number of Guests");
      expect(labelGuests).toBeInTheDocument();
      const labelOccasion = screen.getByText("Occasion");
      expect(labelOccasion).toBeInTheDocument();
      const labelName = screen.getByText("Name");
      expect(labelName).toBeInTheDocument();
      const labelPhoneNumber = screen.getByText("Phone number");
      expect(labelPhoneNumber).toBeInTheDocument();
    });
  });


describe('Fetching data', () => {
    it('should return an array on successful fetch', async () => {
      const testDate = '05/02/2024';
      const result = await fetchAPI(testDate);

      expect(Array.isArray(result)).toBe(true);
      expect(result).toEqual(expect.arrayContaining([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 22, 23]));
    });
});


// describe('initializeTimes function', () => {
//   test('should return the correct initial times', () => {
//     const expectedTimes = [0, 1, 2, 3, 4, 5, 6, 7, 23];
//     const initialTimes = initializeTimes();
//     expect(initialTimes).toEqual(expectedTimes);
//   });
// });

// describe('updateDisabledTimes function', () => {
//   test('should return the current state', () => {
//     const currentState = [0, 1, 2, 3, 4, 5, 6, 7, 23];
//     const action = {};
//     const newState = updateDisabledTimes(currentState, action);
//     expect(newState).toEqual(currentState);
//   });
// });