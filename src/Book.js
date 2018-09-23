import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ViewDetail from './View_detail';
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-success hover">
          <div className="panel-heading">
            <h3 className="panel-title title">{this.props.name}</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-4">
              <img
                src={this.props.image}
                alt="hinh"
                height="200px"
                width="95%"
              />
            </div>
            <div className="col-md-8 info">
              <p>
                <b>Category:</b> {this.props.category}
              </p>
              <p>
                <b>Author:</b> {this.props.author}
              </p>
              <p>
                <b>Owner:</b> {this.props.current_owner}
              </p>
              <p>
                <b>Status:</b> {this.props.status}
              </p>
              <Link
                className="btn btn-success"
                to={this.props.link}
                onClick={() => this.setState({index: this.props.id})}
              >
                View Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
