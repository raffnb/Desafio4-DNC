import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'
import WarningBox from '../../components/WarningBox/WarningBox'




const Delete = () => {
  return (
    <div>
        <Header />

        <section className='section-delete'>
        <h1 className='title'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <WarningBox frase = "Deletar" />
        </section>

    </div>
  )
}

export default Delete