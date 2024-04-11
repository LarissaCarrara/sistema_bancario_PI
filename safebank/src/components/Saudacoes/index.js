import React from 'react';
import './saudacoes.css';

export const Saudacoes = () => {
  return (
    <div className='saudacoes'>
        <div className='saudacoes__texto'>
            <p className='saudacoes__titulo'>Hi, User 👋</p>
            <p className='saudacoes__subtitulo'>Good morning</p>
        </div>
            <img 
                src='/imagens/img_perfil.png'
                alt='Icone de perfil' 
            />

    </div>
  );
}
;