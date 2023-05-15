import React from 'react'

function login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action=''>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter email' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' className='form-control rounded-0'></input>
                </div>
                <button className='btn btn-success w-100'><strong>Sign In</strong></button>
                <p>If you don't have create one.</p>
                <button className='btn btn-default border w-100 bg-light'><strong>Sign Up</strong></button>

            </form>
        </div>
    </div>
  )
}

export default login