import React from 'react'
import { useSelector } from 'react-redux'

export default function ModalViewDetail() {
    const { user } = useSelector(state => state.ReactFormReducer)

    const { maSV, hoTen, sdt, email } = user.value
    const { error } = user

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ maxWidth: '1000px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form  >
                            <div className="row py-2">
                                <div className="col">
                                    <label htmlFor="">Mã SV</label>
                                    <input value={maSV} name='maSV' type="text" className="form-control" placeholder="Mã SV" />
                                    <p className='text-danger mt-2 mb-0'></p>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Họ tên</label>
                                    <input value={hoTen} name='hoTen' type="text" className="form-control" placeholder="Họ tên" />
                                    <p className='text-danger mt-2 mb-0'></p>
                                </div>
                            </div>
                            <div className="row py-2">
                                <div className="col">
                                    <label htmlFor="">Số điện thoại</label>
                                    <input value={sdt} name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                                    <p className='text-danger mt-2 mb-0'></p>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Email</label>
                                    <input value={email} name='email' type="text" className="form-control" placeholder="Email" />
                                    <p className='text-danger mt-2 mb-0'></p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
