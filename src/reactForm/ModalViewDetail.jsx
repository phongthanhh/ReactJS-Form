import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveDataForm, updateUser } from '../redux/action'

export default function ModalViewDetail() {
    const { user } = useSelector(state => state.ReactFormReducer)
    const dispatch = useDispatch()

    const handelOnChange = (e) => {
        let { name, value } = e.target

        // setFormValues((prev) => ({ ...prev, [name]: value }))

        let newValues = { ...user.value, [name]: value }

        // ! Validate
        let messError = ''
        if (value.trim() === '') messError = `${name} không được để trống !`

        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (name === 'email') {
            if (!regexp.test(value)) messError = ` Email Không đúng định dạng!`
        }

        let newError = { ...user.error, [name]: messError }

        dispatch(saveDataForm({ newValues, newError }))

    }

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
                                    <input disabled value={maSV} onChange={handelOnChange} name='maSV' type="text" className="form-control" placeholder="Mã SV" />
                                    <p className='text-danger mt-2 mb-0'>{error.maSV}</p>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Họ tên</label>
                                    <input value={hoTen} onChange={handelOnChange} name='hoTen' type="text" className="form-control" placeholder="Họ tên" />
                                    <p className='text-danger mt-2 mb-0'>{error.hoTen}</p>
                                </div>
                            </div>
                            <div className="row py-2">
                                <div className="col">
                                    <label htmlFor="">Số điện thoại</label>
                                    <input value={sdt} onChange={handelOnChange} name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                                    <p className='text-danger mt-2 mb-0'>{error.sdt}</p>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Email</label>
                                    <input value={email} onChange={handelOnChange} name='email' type="text" className="form-control" placeholder="Email" />
                                    <p className='text-danger mt-2 mb-0'>{error.email}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={() => {
                            dispatch(updateUser(user.value))
                        }} className="btn btn-primary" data-dismiss="modal">Save Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
