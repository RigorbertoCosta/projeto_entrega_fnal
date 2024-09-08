import React, { useContext, useState } from 'react';
import { Context } from '../../../context/UserContext';

export function CartProvider() {
  const { carrinho, updateCarrinho } = useContext(Context)

    function esvaziarCarrinho() {
        localStorage.removeItem('carrinho');
        updateCarrinho([]);
    }
       
    return (
        <main>
            <h1>Carrinho</h1>
            {carrinho.map(item => <div className='item' key={item.id}>
            <div className='float-left'>
                <strong>{item.title}</strong><br />
                Qtd: {item.quantity}
            </div>
            <div className='float-right text-right'>
                Valor unitário: R$ {item.price}<br />
                Subtotal: R$ {item.quantity * item.price}
            </div>
            <hr className='clear-both mb-10' />
        </div>)}
            {carrinho.length > 0 ?
                <>
                    <p className='text-center bold'>Total: R$ {carrinho.reduce((acc, item) =>
                        acc += (item.quantity * item.price), 0).toFixed(2)}
                    </p>
                    <button onClick={esvaziarCarrinho}>Esvaziar carrinho</button>
                    <button onClick={() => console.log('finalizar')}>Finalizar Compra</button>
                </>    
                    :
                <p>Você ainda não adicionou itens ao seu carrinho.</p>}
            
        </main>
    );
}