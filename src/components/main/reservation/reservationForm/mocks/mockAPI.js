import dayjs from 'dayjs';

let unAvailableTimesByDate = null;

const generateDatesAndTimes = () => {
  let unAvailableTimesByDate = {};
  for (let i = 1; i < 31; i++) {
    const date = dayjs().add(i, 'day').format('DD/MM/YYYY');
      const time = [0, 1, 2, 3, 4, 5, 6, 7];
      for (let j = 8; j < 24; j++) {
          if (Math.random() > 0.3) {
              time.push(j);
          };
          unAvailableTimesByDate[date] = time;
      }
  }
  return unAvailableTimesByDate;
}

const fetchAPI = (date) => {
  if (!unAvailableTimesByDate) {
    unAvailableTimesByDate = generateDatesAndTimes();
  }
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (unAvailableTimesByDate[date]) {
          if(unAvailableTimesByDate[date].length < 24 ) {
            resolve(unAvailableTimesByDate[date]);
          } else if (unAvailableTimesByDate[date].length === 24) {
            reject(new Error('No available times for the selected date.'));
          };
        } else {
            reject(new Error('No available times for the selected date.'));
        };
      } , 1000);
  });
};

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