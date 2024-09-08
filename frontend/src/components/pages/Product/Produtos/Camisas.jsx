import { Fragment } from "react";
import Produto from "../components/Produto";

export default function Camisas() {
  const produtos = [
    {
      id: 13,
      title: "Camisa High Preta",
      price: 59.90,
      rating: 5,
      brand: "High",
      thumbnail: "https://img.irroba.com.br/filters:fill(fff):quality(80)/lojaiiie/catalog/camisetas/high-company/high01/high01preto1.jpg"
    },
    {
      id: 14,
      title: "Camisa Santa Cruz",
      price: 59.90,
      rating: 5,
      brand: "Santa Cruz",
      thumbnail: "https://images.tcdn.com.br/img/img_prod/560775/camiseta_santa_cruz_screaming_hand_front_preto_azul_12368_1_9a8568570af8998a07aec1e44079cecc.jpg"
    },
    {
      id: 15,
      title: "Camisa High",
      price: 59.90,
      rating: 5,
      brand: "High",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6Ks2kgE7yRqPLrIwg39iE-pKBkJdLdXP3w&usqp=CAU"
    },
    {
      id: 16,
      title: "Camisa High",
      price: 59.90,
      rating: 5,
      brand: "High",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoPlbxnRy7bRSKf87bwG8g2UZb8qonut73g&usqp=CAU"
    },
  ];
  return (
    <main>
      <h1>Camisas</h1>
      {produtos.map((produto) => (
        <Fragment key={produto.id}>
          <Produto produto={produto} />
        </Fragment>
      ))}
    </main>
  );
}
