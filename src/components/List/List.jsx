import './index.scss'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'


export const List = ({data}) => {
    console.log(data.title)

  return (
<table>


            <tbody className='list-tbody' >
       
            <tr >
              <th>{data.title}</th>
              </tr>
              <tr>
                <div className='checkBox'>
                <th ><input type="checkbox" name="check"  checked = {data.completed} /></th>

                </div>
              </tr>
              <tr>
              <th>
              <button className='btn-img'> 
            <Link to={`/edit/${data.id}`} className='icon-Img'><img src="./edit.svg" alt="editImg" /></Link> 
            </button>
              </th>
              <th>
              <button className='btn-img'> 
              <Link to={`/delete/${data.id}`} className='iconImg'><img src="./delete.svg" alt="deleteImg" /></Link> 
            </button>
              </th>
            </tr>
            </tbody>
    
        </table> 
         )
}
