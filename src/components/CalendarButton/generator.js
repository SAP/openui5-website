const formatTime = (date, bReplaceColon) => {
    if (date) {
        date = date.replace("CET", "(CET)");
        let sDate = new Date(date).toISOString()
        return bReplaceColon ? sDate.replace(/-|:|\.\d+/g, '') : sDate;
    }
    return '';
};

const getJoinLink = (url) => {
    return `Join the event: <a href="${url}">${url}</a>`;
};

const generator = {
    google: function (event) {
        let startTime = formatTime(event.startDate, true);
        let endTime = formatTime(event.endDate, true);
        return encodeURI([
            'https://www.google.com/calendar/render',
            '?action=TEMPLATE',
            '&text=' + event.title,
            '&dates=' + startTime ,
            '/' + endTime,
            '&location='+ event.location,
            '&details=' + event.description.replaceAll('#', '') + '<br/>' + getJoinLink(event.url),
            '&sprop=&sprop=name:'
        ].join(''));
    },
    office365: function (event) {
        let startTime = formatTime(event.startDate);
        let endTime = formatTime(event.endDate);
        return encodeURI([
            'https://outlook.office365.com/owa/',
            '?path=/calendar/action/compose',
            '&rru=addevent',
            '&subject=' + event.title,
            '&startdt=' + startTime,
            '&enddt=' + endTime,
            '&location=' + event.location,
            '&body=' + event.description.replaceAll('#', '') + '<br/>' + getJoinLink(event.url)
        ].join(''));
    },
    ics: function (event) {
        let startTime = formatTime(event.startDate);
        let endTime = formatTime(event.endDate);
        var cal = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            // 'URL:' + document.URL, work without it. Not sure if it is required...
            'DTSTART:' + startTime,
            'DTEND:' + endTime,
            'SUMMARY:' + event.title,
            'LOCATION:' + event.location,
            'DESCRIPTION:' + 'Find more details about the event: https://openui5.org/events\\n\\n Join the event: ' + event.url,
            'UID:' + event.id,
            'END:VEVENT',
            'END:VCALENDAR'].join('\n');

        return encodeURI('data:text/calendar;charset=utf8,' + cal);
    }
};


export default (sType, event) => {
    return generator[sType] ? generator[sType](event) : "";
}