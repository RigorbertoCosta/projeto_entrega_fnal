import { useState } from 'react';

import Item from '../components/Item';

export default function FinalizarCompra() {
    const [carrinho, setCarrinho] = useState( JSON.parse(localStorage.getItem('carrinho')) || [] );

    return (
        <main>
            <h1>Finalizar Compra</h1>
            <p className='text-center bold'>
                {carrinho.length} itens em seu carrinho.<br />
                Total: R$ {carrinho.reduce((acc, item) => acc += (item.quantity * item.price), 0)}
            </p>

            <form action="">
                <h2>Dados para entrega</h2>
                Rua: <input type="text" /><br/>
                Número: <input type="text" /><br/>
                Cidade: <input type="text" /><br/>

                <h2>Dados para pagamento</h2>
                Número do Cartão: <input type="text" />
                Nome do Titular do Cartão: <input type="text" />
                Data de vencimento: <input type="text" />
                CVV: <input type="text" />


                <button type="submit">Finalizar</button>
            </form>
        </main>
    );
}