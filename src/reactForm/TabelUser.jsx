import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delUser, viewDetailUser } from '../redux/action'

export default function TableUser() {

    const { arrUser } = useSelector(state => state.ReactFormReducer)
    const dispatch = useDispatch()


    const renderTable = () => {
        return arrUser.map(user => {
            return <tr key={user.maSV}>
                <th scope="row">{user.maSV}</th>
                <td>{user.hoTen}</td>
                <td>{user.sdt}</td>
                <td>{user.email}</td>
                <td><button data-toggle="modal" data-target="#exampleModal" onClick={() => {
                    dispatch(viewDetailUser(user))
                }} className='btn btn-info mr-2'>Xem</button>
                    <button onClick={() => {
                        dispatch(delUser(user))
                    }} className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        })
    }


    return (
        <div className="row py-4">
            <div classname="col-12 py-5" style={{ width: '100%' }}>
                <div style={{ paddingBottom: '20px' }}>
                    <div>
                        <label className='mr-2' htmlFor="site-search">Search the site:</label>
                        <input onChange={(e) => {
                            console.log(e.target.value)
                        }} type="search" id="site-search" name="q" />
                    </div>

                </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr >
                            <th scope="col">Mã SV</th>
                            <th scope="col">Họ Tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}