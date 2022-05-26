'use strict';
var agenda = new Vue({
  el: '#agenda',
  data() {
    return {
      activeTab:  'talks-tab',
      agendaDay: 'day1',
      eventTime: 'event',
      localTime: new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1],
      schedule: [
        {
          time: '2022-07-07T09:00:00.000+02:00',
          events: [
            {
              start: '2022-07-07T09:00:00.000+02:00',
              end: '2022-07-07T09:25:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            },
            {
              start: '2022-07-07T09:25:00.000+02:00',
              end: '2022-07-07T09:50:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            },
            {
              start: '2022-07-07T09:50:00.000+02:00',
              end: '2022-07-07T10:00:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            }
          ]
        },
        {
          time: '2022-07-07T10:00:00.000+02:00',
          events: [
            {
              start: '2022-07-07T10:00:00.000+02:00',
              end: '2022-07-07T10:30:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            },
            {
              start: '2022-07-07T10:30:00.000+02:00',
              end: '2022-07-07T11:00:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            }
          ]
        },
        {
          time: '2022-07-07T11:00:00.000+02:00',
          events: [
            {
              start: '2022-07-07T11:15:00.000+02:00',
              end: '2022-07-07T14:00:00.000+02:00',
              type: 'break',
              title: 'Break Time +  Meet the Experts',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices lobortis purus, ac venenatis est. Vivamus facilisis felis sit amet suscipit suscipit. Pellentesque vel magna a augue eleifend lobortis eget non orci.Fusce ut pellentesque leo. Cras nec laoreet augue, non aliquam velit. Phasellus consectetur non diam a bibendum. Integer non libero sit amet purus semper egestas quis quis tellus. Nulla viverra at dui nec semper. Suspendisse velit elit, ultrices at elit aliquam, fringilla ultrices nunc. Donec pulvinar sem at nisl lobortis, eget hendrerit augue viverra. Proin maximus fringilla sem id pretium. Etiam vel volutpat diam. Nam sed tempor turpis, at molestie turpis.Aliquam ac egestas lacus. Maecenas finibus, nulla at aliquam lobortis, mi enim congue ex, sit amet maximus ante nunc sit amet enim. Donec posuere, nisl id porta mattis, lorem nulla laoreet erat, ac varius mi diam vel augue. Integer non libero sit amet purus semper egestas quis quis tellus. Nulla viverra at dui nec semper. Suspendisse velit elit, ultrices at elit aliquam, fringilla ultrices nunc. Donec pulvinar sem at nisl lobortis, eget hendrerit augue viverra. Proin maximus fringilla sem id pretium. Etiam vel volutpat diam. Nam sed tempor turpis, at molestie turpis.Aliquam ac egestas lacus. Maecenas finibus, nulla at aliquam lobortis, mi enim congue ex, sit amet maximus ante nunc sit amet enim. Donec posuere, nisl id porta mattis, lorem nulla laoreet erat, ac varius mi diam vel augue.',
              speakers: [
                {
                  name: 'Open UI5 Team',
                  company: 'SAP',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Link',
                  link: '/',
                  active: true
                }
              ],
              readMoreActivated: false
            }
          ]
        },
      ],
    };
  },
  filters: {
    minutes: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      return time.split(':')[1];
    },
    hours: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      return time.split(':')[0].replace(/^0+/, '');
    },
    trimTime: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      let timeSplit = time.split(':');
      return timeSplit[0] + ':' + timeSplit[1];
    },
    convertTime: function(value, eventTime) {
      if(eventTime === 'local') {
       return luxon.DateTime.fromISO(value).toLocal().toISO({ suppressMilliseconds:true });
      }
      return value;
    }
  },
  mounted() {
    this.focusToggleDay();
  },
  methods:  {
    isActivated(description) {
      return description.length > 50;
    },
    focusToggleDay() {
      this.$refs.toggleDay.focus();
    },
    focusTabs() {
      document.getElementById('talks').focus();
    },
    focusToggleTimezone() {
      document.getElementById('timezone1').focus();
    },
    handleArrowKeys(e) {
      if(e.keyCode === 37 || e.keyCode === 39) {
        if(this.activeTab ===  'talks-tab') {
          this.activeTab = 'workshops-tab';
          document.getElementById('workshops').focus();
        } else if(this.activeTab === 'workshops-tab') {
          this.activeTab =  'talks-tab';
          document.getElementById('talks').focus();
        }
      }
    },
    isActive (tab) {
      return this.activeTab === tab;
    },
    setActive (tab) {
      this.activeTab = tab;
    },
    onDayChange($event) {
      this.agendaDay = $event.target.value;
    },
    onTimeChange($event) {
      this.eventTime = $event.target.value;
    },
    getLocalTimeZone() {
      return luxon.DateTime.now().toFormat('Z');
    }
  }
});
