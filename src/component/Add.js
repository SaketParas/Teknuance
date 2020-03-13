import React, { Component } from 'react';
import { connect } from 'react-redux';
import { company_data } from './../Redux/Action';
import { Link } from 'react-router-dom';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            ids: '',
            desc: '',
        }
    }
    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    input_submit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        let random_number = Math.floor(Math.random(2000) * 1000);
        let data = {
            name: this.state.name,
            ids: this.state.ids,
            desc: this.state.desc,
            id: random_number
        }
        console.log(data);
        this.props.form_data(data);
    }

    render() {
        return (
            <React.Fragment>
                <div class="card mt-5">
                    <div class="card-header">
                        <h5 class="text-primary">Enter your Details</h5>
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    Name :<input type="text" class="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.input_change} />
                                </div>
                                <div class="col">
                                    id :<input type="text" class="form-control" placeholder=" Your id please" name="ids" value={this.state.ids} onChange={this.input_change} />
                                </div>
                                <div class="col">
                                    Description :<input type="text" class="form-control" placeholder="Description" name="desc" value={this.state.desc} onChange={this.input_change} />
                                </div>
                                <div class="col mt-2">
                                    <button type="submit" class="btn btn-outline-success mt-3">Add Details</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-muted">
                        <Link to="/Table" class="btn btn-outline-danger mt-3">User Details</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        form_data: (data) => dispatch(company_data(data))
    }
}
export default connect(null, mapDispatchToProps)(Add) 