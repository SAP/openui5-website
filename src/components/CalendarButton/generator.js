const formatTime = (date) => {
    return date ? new Date(date).toISOString().replace(/-|:|\.\d+/g, '') : '';
};

const getLocation = (session) => {
    if (session.type === 'pre_event') {
        const link = session.presentationLinks.find(({linkType}) => linkType === 'zoom').url;
        return `ZOOM Meeting: ${link}`;
    } else {
        return 'Broadcast: https://broadcast.co.sap.com/go/ui5con';
    }
};

const generator = {

    google: function (session) {
        let startTime = formatTime(session.startTime);
        let endTime = formatTime(session.endTime);

        return encodeURI([
            'https://www.google.com/calendar/render',
            '?action=TEMPLATE',
            '&text=' + session.title,
            '&dates=' + startTime ,
            '/' + endTime,
            '&location='+getLocation(session),
            '&details=' + session.description + '\n\n ' + getLocation(session),
            '&sprop=&sprop=name:'
        ].join(''));
    },

    office365: function (session) {
        let startTime = formatTime(session.startTime);
        let endTime = formatTime(session.endTime);

        return encodeURI([
            'https://outlook.office365.com/owa/',
            '?path=/calendar/action/compose',
            '&rru=addevent',
            '&subject=' + session.title,
            '&startdt=' + startTime,
            '&enddt=' + endTime,
            '&location=' + getLocation(session),
            '&body=' + session.description + '\n\n ' + getLocation(session)
        ].join(''));
    },

    ics: function (session) {
        let startTime = formatTime(session.startTime);
        let endTime = formatTime(session.endTime);

        var cal = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            // 'URL:' + document.URL, work without it. Not sure if it is required...
            'DTSTART:' + startTime,
            'DTEND:' + endTime,
            'SUMMARY:' + session.title,
            'LOCATION:' + getLocation(session),
            'DESCRIPTION:' + session.description + '\\n\\n ' + getLocation(session),
            'UID:' + session.id,
            'END:VEVENT',
            'END:VCALENDAR'].join('\n');

        return encodeURI('data:text/calendar;charset=utf8,' + cal);

    }
};


export default (sType, session) => {
    return generator[sType] ? generator[sType](session) : "";
}