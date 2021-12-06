const yearFormatter = new Intl.DateTimeFormat('en-GB', { year: "numeric" });
const monthFormatter = new Intl.DateTimeFormat('en-GB', { month: "long" });
const dayFormatter = new Intl.DateTimeFormat('en-GB', { day: "numeric" });
const timeFormatter = new Intl.DateTimeFormat('en-GB', { hour: "numeric", minute: "numeric" });

const yearFormatterBerlin = new Intl.DateTimeFormat('en-GB', { year: "numeric", timeZone: "Europe/Berlin" });
const monthFormatterBerlin = new Intl.DateTimeFormat('en-GB', { month: "long", timeZone: "Europe/Berlin" });
const dayFormatterBerlin = new Intl.DateTimeFormat('en-GB', { day: "numeric", timeZone: "Europe/Berlin" });
const timeFormatterBerlin = new Intl.DateTimeFormat('en-GB', { hour: "numeric", minute: "numeric", timeZone: "Europe/Berlin" });

export default (startDate, endDate, options = {}) => {
  const {
    isLocalTime = true,
    showYear = true,
    showStartTime = true,
    showEndTime = false
  } = options;

  const isDateTime = !startDate.match(/^\d{4}\/\d{2}\/\d{2}$/);
  const eventStart = new Date(startDate);
  const eventEnd = new Date(endDate);

  const startYear = isLocalTime ? yearFormatter.format(eventStart) : yearFormatterBerlin.format(eventStart);
  const startMonth = isLocalTime ? monthFormatter.format(eventStart) : monthFormatterBerlin.format(eventStart);
  const startDay = isLocalTime ? dayFormatter.format(eventStart) : dayFormatterBerlin.format(eventStart);

  const endYear = isLocalTime ? yearFormatter.format(eventEnd) : yearFormatterBerlin.format(eventEnd);
  const endMonth = isLocalTime ? monthFormatter.format(eventEnd) : monthFormatterBerlin.format(eventEnd);
  const endDay = isLocalTime ? dayFormatter.format(eventEnd) : dayFormatterBerlin.format(eventEnd);

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

    if (isDateTime) {
      // April 1, 2021, 15:00
      if (showStartTime) {
        const startTime = isLocalTime ? timeFormatter.format(eventStart) : timeFormatterBerlin.format(eventStart);
        result += `, ${startTime}`
      }
      // April 1, 2021, 15:00-16:00
      if (showEndTime) {
        const endTime = isLocalTime ? timeFormatter.format(eventEnd) : timeFormatterBerlin.format(eventEnd);
        result += `-${endTime}`
      }
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