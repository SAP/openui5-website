const formatTime = (date) => {
    return date ? new Date(date).toISOString().replace(/-|:|\.\d+/g, '') : '';
};

const getJoinLink = (url) => {
    return 'Join: ' + url;
};

const generator = {
    google: function (event) {
        let startTime = formatTime(event.startTime);
        let endTime = formatTime(event.endTime);

        return encodeURI([
            'https://www.google.com/calendar/render',
            '?action=TEMPLATE',
            '&text=' + event.title,
            '&dates=' + startTime ,
            '/' + endTime,
            '&location='+ event.location,
            '&details=' + event.description + '\n\n ' + getJoinLink(event.url),
            '&sprop=&sprop=name:'
        ].join(''));
    },
    office365: function (event) {
        let startTime = formatTime(event.startTime);
        let endTime = formatTime(event.endTime);

        return encodeURI([
            'https://outlook.office365.com/owa/',
            '?path=/calendar/action/compose',
            '&rru=addevent',
            '&subject=' + event.title,
            '&startdt=' + startTime,
            '&enddt=' + endTime,
            '&location=' + event.location,
            '&body=' + event.description + '\n\n ' + getJoinLink(event.url)
        ].join(''));
    },
    ics: function (event) {
        let startTime = formatTime(event.startTime);
        let endTime = formatTime(event.endTime);

        var cal = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            // 'URL:' + document.URL, work without it. Not sure if it is required...
            'DTSTART:' + startTime,
            'DTEND:' + endTime,
            'SUMMARY:' + event.title,
            'LOCATION:' + event.location,
            'DESCRIPTION:' + event.description + '\\n\\n ' + getJoinLink(event.url),
            'UID:' + event.id,
            'END:VEVENT',
            'END:VCALENDAR'].join('\n');

        return encodeURI('data:text/calendar;charset=utf8,' + cal);
    }
};


export default (sType, event) => {
    return generator[sType] ? generator[sType](event) : "";
}