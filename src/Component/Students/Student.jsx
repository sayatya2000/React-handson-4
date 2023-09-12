import React from 'react'
import "./Student.css"
const Student = () => {
  return (
    <>
    <div style={{background: "linear-gradient(90deg, hsla(154, 53%, 82%, 1) 0%, hsla(24, 88%, 65%, 1) 50%, hsla(216, 56%, 16%, 1) 100%)",height:"100vh"}}>
       {/* <h1>Students</h1> */}

       <div className='head'>
        <div className='detail'>Students Details</div>
        <button className='btn'>Add New Student</button>
       </div>
       <div>
       <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>change</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Sayatya Das</td>
                  <td>23</td>
                  <td>MERN</td>
                  <td>January</td>
                  <td>Edit</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>Sayatya Das</td>
                  <td>23</td>
                  <td>MERN</td>
                  <td>January</td>
                  <td>Edit</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>Sayatya Das</td>
                  <td>23</td>
                  <td>MERN</td>
                  <td>January</td>
                  <td>Edit</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>Sayatya Das</td>
                  <td>23</td>
                  <td>MERN</td>
                  <td>January</td>
                  <td>Edit</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>Sayatya Das</td>
                  <td>23</td>
                  <td>MERN</td>
                  <td>January</td>
                  <td>Edit</td>
                </tr>
            </tbody>
          </table>
       </div>
    </div>
    
    </>
  )
}

export default Student