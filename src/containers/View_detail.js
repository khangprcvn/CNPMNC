import React, { Component } from 'react';
import { connect } from 'react-redux';
class ViewDetail extends Component {
  render() {
    const index = this.props.searchBook.id;
    const book = this.props.searchBook.books[index];
    return (
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row mt-3">
          <div className="col-md-8 col-sm-12">
            <div className="row">
              <div className="col-md-3 col-sx-12 text-lg-left text-md-left text-center">
                <img
                  className="rounded"
                  src={book.image}
                  height="200px"
                  width="95%"
                  alt={book.name}
                />
              </div>

              <div className="col-md-9 col-sx-12">
                <h1 className="item-title text-capitalize text-lg-left text-md-left text-center">
                  <span>{book.name}</span>
                </h1>
                <div className="font-weight-light text-lg-left text-md-left text-center">
                  {book.author}
                </div>
                <div className="category text-lg-left text-md-left text-center">
                  <h6>
                    <a className="badge badge-pill badge-primary text-capitalize">
                      <span class="badge badge-pill badge-primary">
                        {book.category}
                      </span>
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="row p-3 text-justify">
              <p style={{ margin: '10px' }}>{book.content}</p>
            </div>
          </div>
          <div className="border p-3 col-md-4 col-sm-12">
            <div className="mb-4">
              <a className="btn btn-primary" href="/sh/35879/">
                Chia sẻ vào tủ sách
              </a>
              <a
                className="btn btn-outline-primary fb-xfbml-parse-ignore"
                target="_blank"
              >
                Chia sẻ Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchBook: state.searchBook
});

export default connect(mapStateToProps)(ViewDetail);
