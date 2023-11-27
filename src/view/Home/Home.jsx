import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'
import { List } from '../../components/List/List'




const Home = ({data}) => {
  console.log(data)
  return (
    <div className='home-principal'>
     <Header />
      <section className='main-section'>
        <h1 >Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

        <thead>
            <tr className='title-tarefas'>
              <th>Tarefa</th>
              <th>Status</th>
              <th>Opções</th>
              
            </tr>
            
            </thead>
            <hr />

        <div className="home-list">
          {
           data.map((db)=>(
            <List key={db.id} data={db} />
           ))}
        </div>
        <ul className='newList'>
          <li>Nova Tarefa</li>
          <li>+</li>
        </ul>
        
     
      </section>

    </div>
    
  )
}

export default Home