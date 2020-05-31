import React, {Component} from 'react';
import axios from 'axios';

export default class EditList extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    phone: response.data.phone,
                    email: response.data.email
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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
        const obj = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
        };
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Directory</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text" 
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input  type="text" pattern="[0-9]*"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangephone}
                                />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeemail}
                                />
                    </div>
        
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-primary" />
                        </div>
                    
                </form>
                </div>
        )
    }
}
