import React from 'react'
import { useSelector } from 'react-redux'

export default function ModalViewDetail() {
    const valueUser = useSelector(state => state.ReactFormReducer)
    console.log('PhongThanh 🚀 ~> valueUser', valueUser)
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
                                    <input name='maSV' type="text" className="form-control" placeholder="Mã SV" />
                                    <p className='text-danger mt-2 mb-0'></p>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Họ tên</label>
                                    <input name='hoTen' type="text" className="form-control" placeholder="Họ tên" />
                                    <p className='text-danger mt-2 mb-0'></p>
                                </div>
                            </div>
                            <div className="row py-2">
                                <div className="col">
                                    <label htmlFor="">Số điện thoại</label>
                                    <input name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                                    <p className='text-danger mt-2 mb-0'></p>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Email</label>
                                    <input name='email' type="text" className="form-control" placeholder="Email" />
                                    <p className='text-danger mt-2 mb-0'></p>
                                </div>
                            </div>
                            <div className="py-3">
                                <button className='btn btn-info mr-3'>Thêm </button>
                                <button onClick={(e) => {

                                }} className='btn btn-info mr-3'>Update</button>
                                <button type='reset' className='btn btn-danger'>Reset</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
