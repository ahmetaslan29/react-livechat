import React, { Component } from 'react'

class page_user extends Component {
    render() {
        return (
<div>
    <body className="app sidebar-mini rtl       pace-done">
        <main className="app-content">
            <div className="tab-pane" id="user-settings">
                <div className="tile user-settings">
                    <h4 className="line-head">Ayarlar</h4>
                    <form>
                        <div className="row mb-4">
                            <div className="col-md-8">
                                <label>İsim</label>
                                <input className="form-control" type="text" id="isim" value="php isim"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-4">
                                <label>E-mail</label>
                                <input className="form-control" type="text" id="email" value="php eposta"/>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-8 mb-4">
                                <label>Parola</label>
                                <input className="form-control" type="password" id="parola"/>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-8 mb-4">
                                <label>Parola Onayla</label>
                                <input className="form-control" type="password" id="parola2"/>
                            </div>
                        </div>
                        <div className="row mb-10">
                            <div className="col-md-12">
                                <button className="btn btn-primary guncelle" type="button">
                                    <i className="fa fa-fw fa-lg fa-check-circle"></i>Kaydet
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </body>
</div>
        )
    }
}
export default page_user;