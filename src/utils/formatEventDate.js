const yearFormatter = new Intl.DateTimeFormat('en-GB', { year: "numeric" });
const monthFormatter = new Intl.DateTimeFormat('en-GB', { month: "long" });
const dayFormatter = new Intl.DateTimeFormat('en-GB', { day: "numeric" });
const timeFormatter = new Intl.DateTimeFormat('en-GB', { hour: "numeric", minute: "numeric" });

export default (startDate, endDate, options = {}) => {
  const {
    timezone,
    showYear = true,
  } = options;

  const isDateTime = !startDate.match(/^\d{4}\/\d{2}\/\d{2}$/);
  const eventStart = new Date(startDate);
  const eventEnd = new Date(endDate);

  const startYear = yearFormatter.format(eventStart);
  const startMonth = monthFormatter.format(eventStart);
  const startDay = dayFormatter.format(eventStart);

  const endYear = yearFormatter.format(eventEnd);
  const endMonth = monthFormatter.format(eventEnd);
  const endDay = dayFormatter.format(eventEnd);

  const isSameYear = startYear === endYear;
  const isSameMonth = startMonth === endMonth;
  const isSameDay = startDay === endDay;

  let result = "";

  // April 1, 15:15-15:45
  // April 1, 15:00 - April 2, 15:00

  if (isSameYear) {
    if (isSameMonth) {
      // April
      result += startMonth;

      if (isSameDay) {
        // April 1
        result += ` ${startDay}`;

        if (isDateTime) {
          result += ""
        }
      } else {
        // April 1-2
        result += ` ${startDay}-${endDay}`;
      }
    } else {
      // April 30 - May 5
      result += `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
    }

    // April 1, 2021
    // April 1-2, 2021
    if (showYear) {
      // April 30 - May 5, 2021
      result += `, ${startYear}`;
    }
  } else {
    // December 25, 2021 - 10 January, 2022
    result += `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
  }

  return result;
  // if (startDate.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
  //   //only date given
  //   let endDateFormatted = ''
  //   if (eventStart.getDate() !== eventEnd.getDate()) {
  //     endDateFormatted = eventStart.getMonth() !== eventEnd.getMonth() ? `-${monthFormatter.format(eventEnd)} ${dayFormatter.format(eventEnd)}` : ` –   ${dayFormatter.format(eventEnd)}`;
  //   }
  //   formattedDate = `${monthFormatter.format(eventStart)} ${dayFormatter.format(eventStart)}${endDateFormatted}`;
  // } else {
  //   //the date with time
  //   let eventTime = '';

  //   if (!isPastEvent) {
  //     eventTime = `, ${timeFormatter.format(eventStart)}`;
  //   }

  //   formattedDate = `${monthFormatter.format(eventStart)} ${dayFormatter.format(eventStart)}${eventTime}`;
  // }

};