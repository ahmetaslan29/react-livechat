import React, { Component } from 'react'
import { Link } from 'react-router-dom';


 class inbox extends Component {






    render() {
        return (
<div>
    <div className="app sidebar-mini rtl">
        <main className="app-content">
            <div className="app-title">
                <div>
                    <h1><i className="far fa-envelope"></i>&nbsp;{this.props.infoprops.inbox}</h1>
                </div>
                <ul className="app-breadcrumb breadcrumb">
                    <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
                   <li className="breadcrumb-item"> <Link to="/admin/inbox">{this.props.infoprops.inbox}</Link></li>
                </ul>
            </div>
            <div className="row">
                <div className="col-md-3"><a className="mb-2 btn btn-block" id="mailolustur"  href="/" data-toggle='modal' data-target="#exampleModal2">{this.props.infoprops.createmail}</a>
                    <div className="tile p-0">
                        <h4 className="tile-title folder-head">{this.props.infoprops.folders}</h4>
                        <div className="tile-body">
                            <ul className="nav nav-pills flex-column mail-nav">
                                <li className="nav-item active">
                                    <span className="nav-link pointer" ><i className="fa fa-inbox fa-fw"></i> {this.props.infoprops.inbox}
                                    <span className="badge badge-pill badge-primary float-right">1</span></span></li>
                                <li className="nav-item pointer"><span className="nav-link"><i className="fa fa-paper-plane"></i>&nbsp;{this.props.infoprops.outbox}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="tile">
                            <div className="btn-group float-right">
                                <button className="btn btn-primary btn-sm" type="button" id="mesaj_yenile"><i className="fas fa-sync-alt"></i></button>
                            </div>
                        <div className="table-responsive mailbox-messages"><hr/>
                            <table className="table table-hover">
                                <tbody id="gor">
                                <tr>
                                    <td><a href="read-mail" className="mesaj_goruntule" ><i className="fa fa-star"></i></a></td>
                                    <td><Link to="/admin/inbox/readmail"><span className="mesaj_goruntule">Ahmet</span> </Link></td>
                                   
                                    <td className="mail-subject">merhaba<b></b></td>
                                    <td><i className="fa fa-paperclip"></i></td>
                                    <td>2019-12-18 11:59:39</td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-right">
                            <span className="text-muted mr-2">Showing 1-15 out of 60</span>
                            <div className="btn-group">
                                <button className="btn btn-primary btn-sm" type="button"><i className="fa fa-chevron-left"></i></button>
                                <button className="btn btn-primary btn-sm" type="button"><i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
        )
    }
}
export default inbox;
