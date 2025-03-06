import { cardapio } from './cardapio.js';

export default function Principal() {
    console.log(cardapio);
    
    return (
        <main>
            <div id="principal">
                <ul>
                    {cardapio.map((item, index) => (
                        <li key={index}>
                            <h2>{item.produto}</h2>
                            <figure>
                                <img src={item.imagemURL} alt={item.produto} width="280" />
                                <figcaption>
                                    {item.descricao}
                                </figcaption>
                            </figure>
                                <p>Preço: R${item.preco.toFixed(2)}</p>
                                
                                    <button type="button">
                                        Comprar
                                    </button>
                                
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}