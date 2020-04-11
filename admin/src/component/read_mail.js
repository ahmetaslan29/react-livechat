import React, { Component } from "react";
import { Link } from "react-router-dom";
import { onDeleteUser } from "../js/chat.js";
import UserConsumer from "../Context";
class read_mail extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch} = value;
          return (
            <div>
              <div className="app sidebar-mini rtl">
                <main className="app-content">
                  <div className="app-title">
                    <div>
                      <h1>
                        <i className="fa fa-envelope-o"></i>{" "}
                        {this.props.infoprops.inbox}
                      </h1>
                    </div>
                    <ul className="app-breadcrumb breadcrumb">
                      <li className="breadcrumb-item">
                        <i className="fa fa-home fa-lg"></i>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/admin/inbox">
                          <a href="/">{this.props.infoprops.inbox}</a>
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/admin/inbox/readmail">
                          <span>{this.props.infoprops.readmail}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-md-8">
                    <div className="tile">
                      <div className="tile-title-w-btn">
                        <h5 className="title" id="gelenmesaj">
                          {this.props.infoprops.message}
                        </h5>
                        <div className="btn-group">
                          <Link to="/admin/inbox">
                            <span className="btn btn-primary">
                              <i className="fa fa-arrow-left"></i>
                            </span>
                          </Link>
                          <span
                            className="btn btn-primary sil"
                            onClick={onDeleteUser.bind(this, dispatch)}>
                            <i className="fa fa-lg fa-trash"></i>
                          </span>
                        </div>
                      </div>
                      <div className="tile-body mesaj_sil">
                        php mesaj_goruntule
                      </div>
                    </div>
                    <div className="tile" id="gelenmesajbaslik">
                      <div className="messages"></div>
                      <div className="sender">
                        <textarea
                          className="form-control is-valid"
                          type="text"
                          placeholder="Send Message"
                          id="m"
                          defaultValue=""></textarea>
                        <br />
                        <button
                          className="btn btn-primary float-right"
                          id="chat_send">
                          <i className="fa fa-lg fa-fw fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default read_mail;
