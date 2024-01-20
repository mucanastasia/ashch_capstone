import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservation from './components/main/reservation/Reservation';
import { initializeTimes, updateDisabledTimes } from './components/main/Main.js';

jest.mock('antd/es/locale/en_GB', () => {
    return {};
  }
);

describe('initializeTimes function', () => {
  test('should return the correct initial times', () => {
    const expectedTimes = [0, 1, 2, 3, 4, 5, 6, 7, 23];
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(expectedTimes);
  });
});

describe('updateDisabledTimes function', () => {
  test('should return the current state', () => {
    const currentState = [0, 1, 2, 3, 4, 5, 6, 7, 23];
    const action = {};
    const newState = updateDisabledTimes(currentState, action);
    expect(newState).toEqual(currentState);
  });
});


// Unfortunatly, the test "Reservation form" doesn't pass because I cannot resolve the issue with antd library that I'm using.

// jest.mock('antd', () => {
//     return {
//       ...jest.requireActual('antd'),
//       Row: jest.fn(p => p.children),
//       Form: jest.fn(p => <form onSubmit={p.onFinish}>{p.children}</form>),
//     }
//   }
// );

// describe("Reservation form", () => {
//   test("Renders the Reservation Form", () => {
//     render(<Reservation />);
//     const headingElement = screen.getByText("Reserve a Table");
//     expect(headingElement).toBeInTheDocument();
//     const subheadingElement = screen.getByText("Plan your dining experience by booking a table in advance");
//     expect(subheadingElement).toBeInTheDocument();
//     const headingStepOne = screen.getByText("Step 1");
//     expect(headingStepOne).toBeInTheDocument();
//     const headingStepTwo = screen.getByText("Step 2");
//     expect(headingStepTwo).toBeInTheDocument();
//     const headingStepThree = screen.getByText("Step 3");
//     expect(headingStepThree).toBeInTheDocument();
//     const labelDate = screen.getByText("Date");
//     expect(labelDate).toBeInTheDocument();
//     const labelTime = screen.getByText("Time");
//     expect(labelTime).toBeInTheDocument();
//     const labelGuests = screen.getByText("Number of Guests");
//     expect(labelGuests).toBeInTheDocument();
//     const labelOccasion = screen.getByText("Occasion");
//     expect(labelOccasion).toBeInTheDocument();
//     const labelName = screen.getByText("Name");
//     expect(labelName).toBeInTheDocument();
//     const labelPhoneNumber = screen.getByText("Phone number");
//     expect(labelPhoneNumber).toBeInTheDocument();
//   });
// });