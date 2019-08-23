import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TableRow extends Component {

    render() {
        // console.log(this.props);
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.company}
                </td>
                <td>
                    {this.props.obj.age}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={() => {
                        if (window.confirm('Are you sure you wish to delete this item?')) this.props.deleteElement(this.props.obj.id)
                    }} className="btn btn-danger">Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default TableRow;