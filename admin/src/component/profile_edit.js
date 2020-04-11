import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class profile_user extends Component {
    render() {
            return ( 
<div>
<div className="app sidebar-mini rtl">
    <main className="app-content">
        <div className="app-title">
            <div>
                <h1><i className="fa fa fa-edit"></i>{this.props.infoprops.profil}</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb">
                <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
                <li className="breadcrumb-item"><Link to="/admin/profile_user"><span > {this.props.infoprops.profil}</span></Link></li>
            </ul>
        </div>
        <div className="row user">
            <div className="col-md-3">
                <div className="tile p-0">
                    <ul className="nav flex-column nav-tabs user-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#user-edit" data-toggle="tab">{this.props.infoprops.profil}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#user-add" data-toggle="tab">{this.props.infoprops.newmanagament}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-9">
                <div className="tab-content">
                    <div className="tab-pane active" id="user-edit">
                        <div className="tab-pane" id="user-edit">
                            <div className="tile user-settings">
                                <h4 className="line-head">{this.props.infoprops.profil}</h4>
                                <form>
                                    <div className="row mb-4">
                                        <div className="col-md-8">
                                            <label>{this.props.infoprops.name}</label>
                                            <input className="form-control" type="text" id="isim"defaultValue="php İsim"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 mb-4">
                                        <label>{this.props.infoprops.email}</label>
                                        <input className="form-control" type="text" id="email" defaultValue="<?php email"></input>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-md-8 mb-4">
                                        <label>{this.props.infoprops.pass}</label>
                                        <input className="form-control" type="password" id="parola"/>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-md-8 mb-4">
                                        <label>{this.props.infoprops.passconfirm}</label>
                                        <input className="form-control" type="password" id="parola2"/>
                                    </div>
                                </div>
                                <div className="row mb-10">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary yoneticiguncelle" type="button">
                                            <i className="fa fa-fw fa-lg fa-check-circle"></i>Kaydet
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="user-add">
                    <div className="tile user-settings">
                        <h4 className="line-head">{this.props.infoprops.newmanagament}</h4>
                            <form method="post" encType="multipart/form-data">
                                <div className="row mb-4">
                                    <div className="col-md-8">
                                        <label className="control-label">Profil Resmi Yükle</label>
                                        <input className="form-control" type="file" name="image" id="image"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-8">
                                        <label>{this.props.infoprops.name}</label>
                                        <input className="form-control" type="text" id="isimekle"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 mb-4">
                                        <label>{this.props.infoprops.email}</label>
                                        <input className="form-control" type="text" id="emailekle"/>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>{this.props.infoprops.pass}</label>
                                        <input className="form-control" type="password" id="parolaekle"/>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>{this.props.infoprops.passconfirm}</label>
                                        <input className="form-control" type="password" id="parolaekle2"/>
                                    </div>
                                </div>
                                <div className="row mb-10">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary yoneticiekle" type="submit" name="submit">
                                            <i className="fa fa-fw fa-lg fa-plus-circle"></i>Ekle
                                        </button>
                                    </div>
                                </div>
                            </form>
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
export default profile_user;