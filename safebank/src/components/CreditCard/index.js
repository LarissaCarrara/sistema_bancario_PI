import './creditcard.css'

export const CreditCard = () => {
  return (
    <div className='cartao__container'>
        
        <div className='cartao'>
        </div>
        <img 
            src='/imagens/mastercard.svg'
            alt='logo da mastercard'
            className='cartao__bandeira'
        />
        <div className='cartao__conteudo'>
            <p className='cartao__numero'>**** **** **** 2131</p>
            <p className='cartao__nome'>Larissa M Carrara</p>
        </div>
    </div>
  )
}
