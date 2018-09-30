import React from 'react';
import AddBook from '../actions/add_book';
import { connect } from 'react-redux';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      category: '',
      status: '',
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange1 = this.handleOnChange1.bind(this);
    this.handleOnChange2 = this.handleOnChange2.bind(this);
    this.handleOnChange3 = this.handleOnChange3.bind(this);
    this.handleOnChange4 = this.handleOnChange4.bind(this);
    this.handleOnChange5 = this.handleOnChange5.bind(this);
  }
  handleOnChange1(event) {
    this.setState({ name: event.target.value });
  }
  handleOnChange2(event) {
    this.setState({ author: event.target.value });
  }
  handleOnChange3(event) {
    this.setState({ category: event.target.value });
  }
  handleOnChange4(event) {
    this.setState({ status: event.target.value });
  }
  handleOnChange5(event) {
    this.setState({ content: event.target.value });
  }
  handleSubmit(event) {
    this.props.dispatch(AddBook(this.state));
    event.preventDefault();
  }
  render() {
    return (
      <div className="wrapper border p-3 rounded">
        <div className="container fluid">
          <h2 className="text-center">Add Book</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="row">
                <label className="col-md-4 col-form-label" for="name">
                  Name:{' '}
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Name..."
                    value={this.state.value}
                    onChange={this.handleOnChange1}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label className="col-md-4 col-form-label" for="category">
                  Category:{' '}
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    id="category"
                    className="form-control"
                    placeholder="Category..."
                    value={this.state.value}
                    onChange={this.handleOnChange2}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label className="col-md-4 col-form-label" for="author">
                  Author:{' '}
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    id="author"
                    className="form-control"
                    placeholder="Author..."
                    value={this.state.value}
                    onChange={this.handleOnChange3}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label className="col-md-4 col-form-label" for="status">
                  Status:{' '}
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    id="status"
                    className="form-control"
                    placeholder="Status..."
                    value={this.state.value}
                    onChange={this.handleOnChange4}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label className="col-md-4 col-form-label" for="desc">
                  Content:{' '}
                </label>
                <div className="col-md-8">
                  <textarea
                    id="desc"
                    className="form-control"
                    placeholder="Content..."
                    value={this.state.value}
                    onChange={this.handleOnChange5}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Form);