import React, { Component } from 'react'

class Modal extends Component {
    render() {
        return (
<div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">MESAJ SİL</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>

                <div className="modal-body">
                    Seçtiğiniz İçerik Tamamen Silinecek Emin Misiniz?
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                    <button id="mesaj_sil" type="button" className="btn btn-primary" data-dismiss="modal">Sil</button>
                </div>

            </div>

        </div>

    </div>





    <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel2">Mail Gönder</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">E-mail:</label>
                            <input type="text" className="form-control" id="recipient-name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message-text" className="col-form-label">Mesaj:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                    <button type="button" className="btn btn-primary">Gönder</button>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}
export default Modal
