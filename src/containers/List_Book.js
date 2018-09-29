import React, { Component } from 'react';
import { connect } from 'react-redux';
import searchBook from '../actions/search_book';
import { Link, Switch, Route } from 'react-router-dom';
import viewDetail from '../actions/view_detail';
import ViewDetail from '../containers/View_detail';
class ListBook extends Component {
  
  render() {
    console.log(this.props);
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="container">
              <h2 style={{ textAlign: 'center' }}>List Book</h2>
              <div className="ui category search form-group">
                <div className="ui icon input">
                  <input
                    style={{ width: '1150px' }}
                    className="prompt"
                    type="search"
                    placeholder="Search book in store"
                    onChange={event =>
                      this.props.dispatch(searchBook(event.target.value))
                    }
                  />
                  <i className="search icon" />
                </div>
                <div className="results" />
              </div>
              {this.props.dataBook.books.map(book => (
                <div className="col-md-6" key={book.id}>
                  <div className="panel panel-success hover">
                    <div className="panel-heading">
                      <h3 className="panel-title title">{book.name}</h3>
                    </div>
                    <div className="panel-body">
                      <div className="col-md-4">
                        <img
                          src={book.image}
                          alt="hinh"
                          height="200px"
                          width="95%"
                        />
                      </div>
                      <div className="col-md-8 info">
                        <p>
                          <b>Category:</b> {book.category}
                        </p>
                        <p>
                          <b>Author:</b> {book.author}
                        </p>
                        <p>
                          <b>Owner:</b> {book.current_owner}
                        </p>
                        <p>
                          <b>Status:</b> {book.status}
                        </p>
                        <Link
                          className="btn btn-success"
                          to={book.link}
                          onClick={() =>
                            this.props.dispatch(viewDetail(book.link, book.id))
                          }
                        >
                          View Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        />
        <Route exact path={this.props.link} component={ViewDetail} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  dataBook: state.searchBook
});

export default connect(mapStateToProps)(ListBook);
