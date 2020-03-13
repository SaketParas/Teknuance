import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove } from './../Redux/Action'
import { Link, } from 'react-router-dom';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            final_data: [],
            page: 1,
            per_page: 5,
            search: '',
        }
    }
    handleDropDown = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: Number(e.target.value) })
    }
    handleDelete = (id) => {
        console.log(id);
        this.props.remove(id)
    }
    handle_change = (e) => {
        this.setState({ page: Number(e) })
    }

    render() {
        console.log(this.props.add.stored_data)
        this.state.final_data = this.props.add.stored_data
        let data = this.state.final_data
        let pageNo = this.state.page
        let per_page_no = this.state.per_page
        var total_page = Math.ceil(data.length / per_page_no)
        let start = (pageNo - 1) * per_page_no
        let end = start + per_page_no
        let pagination_data = data.slice(start, end)
        console.log(pagination_data);
        var button_number = []
        for (var i = 1; i <= total_page; i++) {
            button_number.push(i)
        }
        var button = button_number.map(a => {
            return (
                <button className="btn btn-primary mr-1" onClick={() => this.handle_change(a)}>{a}</button>
            )
        })

        let show_user = pagination_data.reverse().map(e => {
            return (
                <div class="row mt-3">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div>  Name:{e.name}</div>
                                <h5>Id: {e.ids}</h5>
                                <h5>Description:{e.desc}</h5>
                                <button onClick={() => this.handleDelete(e.id)}><i class="fa fa-trash-o"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                    </div>
                </div>
            )
        })
        return (
            <div>
                <div class="card text-center mt-2">
                    <div class="card-header">
                        <h3 class="text-primary">User Details</h3>
                    </div>
                    <div class="card-body">
                        {show_user}
                    </div>
                    <div class="card-footer text-muted">
                        {button}
                        <select className="form-control offset-2  btn btn-primary" style={{ width: "120px" }} onChange={this.handleDropDown} name="per_page">
                            <option value="" selected>Per Page</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                        <Link to="/Add" class="btn btn-outline-danger ml-5">Add User</Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        remove: (send) => dispatch(remove(send))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Table) 