import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        axios.get('http://localhost:3000/user')
            .then(response => {
                // console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteElement(id) {
        axios.delete('http://localhost:3000/user/' + id)
            .then(() => {
                console.log("Deleted: " + id);
                this.props.history.push('/index');
            })
            .catch(err => console.log(err));

    }

    tabRow() {
        return this.state.persons.map((object, i) => {
            return <TableRow obj={object}
                             key={i}
                             deleteElement={this.deleteElement}

            />;
        });
    }

    render() {
        console.log(this.state,'state');
        return (
            <div>
                <h3>Persons List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Age</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}
