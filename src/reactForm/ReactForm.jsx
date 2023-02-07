import React from 'react'
import ModalViewDetail from './ModalViewDetail'
import Register from './Register'
import TableUser from './TabelUser'

export default function ReactForm() {
    return (
        <div className='container'>
            <Register />
            <TableUser />

            {/* <!-- Modal --> */}
            <ModalViewDetail />
        </div>
    )
}