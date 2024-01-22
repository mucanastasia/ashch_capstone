import dayjs from 'dayjs';

const unAvailableTimesByDate = {
    '23/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23],               // 16, 17, 18
    '24/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19, 21, 22, 23],               // 13, 15, 20
    '25/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23],                   // 11, 12, 13, 14
    '26/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 23],               // 19, 20, 21,
    '27/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23],               // 18, 19, 20,
    '28/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],                           // 10, 11, 12, 13, 14, 15,
    '29/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23],                   // 16, 17, 18, 19,
    '30/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],                         // 8, 9, 10, 11, 12, 13,
    '31/01/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 23],           // 15, 16,
    '01/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 21, 22, 23],                   // 17, 18, 19, 20,
    '02/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 15, 16, 17, 18, 19, 20, 21, 22, 23],                             // 8, 9, 10, 11, 12, 13, 14,
    '03/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],                 // 8, 9, 10, 11,
    '04/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 21, 22, 23],                       // 12, 13, 14, 15, 16,
    '05/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 22, 23],                               // 15, 16, 17, 18, 19, 20, 21,
    '06/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21, 22, 23],               // 13, 14, 15,
    '07/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],                 // 8, 9, 10, 11,
    '08/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 22, 23],                   // 18, 19, 20, 21,
    '09/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23],                       // 13, 14, 15, 16, 17,
    '10/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23],                       // 10, 11, 12, 13, 14,
    '11/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],               // 11, 12, 13
    '12/02/2024': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],       // 10
};


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (unAvailableTimesByDate[date]) {
            if(unAvailableTimesByDate[date].length < 24 ) {
              resolve(unAvailableTimesByDate[date]);
            } else if (unAvailableTimesByDate[date].length === 24) {
              reject(new Error('No available times for the selected date.'));
            }
          } else {
              reject(new Error('No available times for the selected date.'));
          }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const date = dayjs(formData.date.$d).format('DD/MM/YYYY');
        if (formData && date && formData.time.$H) {
          if (!unAvailableTimesByDate[date].find(element => element === formData.time.$H)) {
            unAvailableTimesByDate[date].push(formData.time.$H);
            resolve(true); // Simulate successful submission
          } else {
            const time = dayjs(formData.time.$d).format('HH:00');
            reject(new Error(`The selected time (${date} at ${time}) is not available! Please choose another time or date.`));
          }
        } else {
          reject(new Error('Invalid form data. Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}