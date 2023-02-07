import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushUser, saveDataForm } from '../redux/action'



export default function Register() {
    // const [formValues, setFormValues] = useState({
    //     maSV: '',
    //     hoTen: '',
    //     sdt: '',
    //     email: '',
    // })

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.ReactFormReducer)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        let isValid = true
        for (const property in user.error) {
            if (user.error[property] !== '')
                isValid = false
        }

        for (const property in user.value) {
            if (user.value[property] === '')
                isValid = false
        }

        if (isValid) dispatch(pushUser(user.value))

    }

    const { maSV, hoTen, sdt, email } = user.value
    const { error } = user
    return (
        <div className="row">
            <div className="col-12">
                <h2 className='bg-dark text-white text-left'>Thông tin sinh viên</h2>
                <form onSubmit={handleSubmit} >
                    <div className="row py-2">
                        <div className="col">
                            <label htmlFor="">Mã SV</label>
                            <input value={maSV} name='maSV' onChange={handelOnChange} type="text" className="form-control" placeholder="Mã SV" />
                            <p className='text-danger mt-2 mb-0'>{error.maSV}</p>
                        </div>
                        <div className="col">
                            <label htmlFor="">Họ tên</label>
                            <input value={hoTen} name='hoTen' onChange={handelOnChange} type="text" className="form-control" placeholder="Họ tên" />
                            <p className='text-danger mt-2 mb-0'>{error.hoTen}</p>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col">
                            <label htmlFor="">Số điện thoại</label>
                            <input value={sdt} name='sdt' onChange={handelOnChange} type="text" className="form-control" placeholder="Số điện thoại" />
                            <p className='text-danger mt-2 mb-0'>{error.sdt}</p>
                        </div>
                        <div className="col">
                            <label htmlFor="">Email</label>
                            <input value={email} name='email' onChange={handelOnChange} type="text" className="form-control" placeholder="Email" />
                            <p className='text-danger mt-2 mb-0'>{error.email}</p>
                        </div>
                    </div>
                    <div className="py-3">
                        <button className=' btn btn-info mr-3'>Thêm </button>
                        {/* <button onClick={(e) => {

                        }} className='btn btn-info mr-3'>Update</button>
                        <button type='reset' className='btn btn-danger'>Reset</button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}
