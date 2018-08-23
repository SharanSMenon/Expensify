import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
class ExpenseListFilters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            calenderFocused:null
        }
        this.onDatesChange = this.onDatesChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this);
    }
    onDatesChange({startDate, endDate}){
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange(calenderFocused){
        this.setState(() => ({calenderFocused}))
    }
    render() {
        return (
            <div>
                <input type="text"
                    defaultValue={this.props.filters.text}
                    placeholder="Search..."
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value == "date") {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value == "amount") {
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId="start_date_datePicker"
                    endDate={this.props.filters.endDate}
                    endDateId={"endite_date_date_picker"}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}
const mapStateToprops = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToprops)(ExpenseListFilters);