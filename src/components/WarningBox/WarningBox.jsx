import './index.scss'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class WarningBox extends Component{
  render(){

    return (
      <div className='Warning-box'>
        <h1 className='Warning-box__title' >Deseja {this.props.frase} esse item?</h1>
        <p className='parag'>Colocar as descrições das tarefas aqui.</p>
        
        <div className='btn-option'>
  
        <button >
              <Link to={`/`}>Não</Link>
          </button>
  
          <button className='btn'>
              <Link to={`/`}>Sim</Link>
          </button>
        </div>
  
  
      </div>
    )
    
  }
}






