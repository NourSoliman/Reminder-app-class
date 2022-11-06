import React, { Component } from 'react'
import { add_Reminder, remove_Reminder , clear_Reminder } from '../actions'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
class App extends Component {
    state = {
        text: ``,
        date: new Date(),
        desc: ``,
    }
    render_Reminder = () => {
        const { reminders } = this.props;
        const length = reminders.length
        console.log( `from reminders ` , reminders);
        return (
            <ul>
                {
                (length ? reminders.map(reminder => {
                        return (
                            <li className='list-group-item' key={reminder.id}>
                                <div>Text: {reminder.text}</div>
                                <div>Date: {moment(new Date(reminder.date).fromNow())}</div>
                                <div>{reminder.desc}</div>
                                <div className='remove btn btn-danger' onClick={() => this.props.remove_Reminder(reminder.id)}>X</div>
                            </li>
                        )
                    }):<p>There's no tasks to show</p>)
                }
            </ul>
        )
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <img src="" />
                <div><h2>Reminder app</h2></div>
                <input type="text"
                    value={this.state.text}
                    className='form-control'
                    placeholder='Write any task....'
                    onChange={(e) => this.setState({ text: e.target.value })}>
                </input>
                <input type="text" className='form-control' placeholder='Please enter a desc' onChange={(e) => this.setState({desc: e.target.value})} value={this.state.desc}></input>
                {/* <input type="datetime-local"
                    value={this.state.date}
                    className='form-control'
                    placeholder='Enter a Date....'
                    onChange={(e) => this.setState({ date: e.target.value })}>
                </input> */}
                <DatePicker 
                selected={this.state.date}
                value={this.state.date}
                className='form-control'
                onChange={(date) => this.setState({date:date})}
                showTimeSelect
                timeFormat='HH:mm'
                dateFormat="MMMM d,yyyy h:mm aa"
                timeCaption='time'>
                </DatePicker>

                <div className='d-grid gap-2'>
                    <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                            this.props.add_Reminder(this.state.text, this.state.date)
                            this.setState({ text: ``})
                        }}>
                        Add Reminder
                    </button>
                    {this.render_Reminder()}
                    <button className="btn btn-danger btn-block"
                    onClick={()=>this.props.clear_Reminder()}>
                        clear Reminder
                    </button>
                </div>
            </div>
        )
    }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         addReminder : () => dispatch(add_Reminder())
//     }
// function mapStatetoProps(state) {
//     return {
//         reminders : state
//     }
// }
// }
export default connect(state => {
    return {
        reminders: state    
    }
}, { add_Reminder , remove_Reminder , clear_Reminder })(App)