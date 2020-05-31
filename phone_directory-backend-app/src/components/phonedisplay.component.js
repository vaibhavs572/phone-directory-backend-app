import React, {Component} from 'react';
import axios from 'axios';

export default class PhoneInput extends Component {

    constructor(props) {
        super(props);

        this.onChangename = this.onChangename.bind(this);
        this.onChangephone = this.onChangephone.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            phone: '',
            email: ''
        }
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangephone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Nmae: ${this.state.name}`);
        console.log(`Phone: ${this.state.phone}`);
        console.log(`Email: ${this.state.email}`);

        const newTodo={
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
        .then(res => console.log(res.data));

        this.setState({
            name: '',
            phone: '',
            email: ''
        })
    }




    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangename}
                                />
                    </div>
                    <div className="form-group">
                        <label>PhoneNumber: </label>
                        <input  type="text" pattern="[0-9]*"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangephone}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="Email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeemail}
                                />
                    </div>
                        
                    <div className="form-group">
                        <input type="submit" value="ADD" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}