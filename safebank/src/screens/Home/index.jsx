import React from 'react'
import './home.css'
import { Saudacoes } from '../../components/Saudacoes'
import { CreditCard } from '../../components/CreditCard'

export const Home = () => {
  return (
    <div>
      <Saudacoes />

      <div className='saldo'>
        <div className='saldo__container'>
          <p className='saldo__nome'>Saldo em conta</p>
          <p className='saldo__valor'>R$ 1.987<a className='saldo__valor_centavos'>,89</a></p>
        </div>
        <img 
          src='/imagens/olho.svg' 
          alt=''
        />
      </div>

      <section className='creditcard'>
        <CreditCard />
      </section>
    </div>
  )
}
