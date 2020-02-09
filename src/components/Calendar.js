import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

class Calendar extends Component {
    render() {
        var today = new Date();
        return (
            <div>
                <InfiniteCalendar
                    width={1000}
                    height={500}
                    selected={today}
                />
            </div>
        )
    }
}

export default Calendar
