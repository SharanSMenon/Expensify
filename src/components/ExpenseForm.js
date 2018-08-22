import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
// const now = moment();
// console.log(now.format("MMMM Do, YYYY"));


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount).toString() :'',
            note: props.expense ? props.expense.note :"",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calFocused: false,
            error:undefined
        }
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onTextChange = this.onTextChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onTextChange(e) {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange(e) {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange(createdAt) {
        if (createdAt) {
            this.setState(() => ({ createdAt }))

        }
    }
    onFocusChange({ focused }) {
        this.setState(() => ({ calFocused: focused }))
    }
    onSubmit(e){
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error:'Please provide a description and an amount'}));
        } else {
            this.setState(() => ({ error:undefined }))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount, 10),
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="input"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <br />
                    <input type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    {this.state.error && <p>{this.state.error}</p>}
                    <br />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <br />
                    <textarea
                        placeholder="Add a note"
                        value={this.state.note}
                        onChange={this.onTextChange}
                    ></textarea>
                    <br />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}