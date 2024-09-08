import { Fragment } from "react";
import Produto from "../components/Produto";

export default function Home() {
  const produtos = [
    {
      id: 17,
      type: 'MOLETOM',
      title: "Moletom THRASHER",
      price: 129.90,
      rating: 5,
      brand: "Thrasher",
      thumbnail: "data:image/jpeg;base64,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"
    },
    {
      id: 18,
      type: 'MOLETOM',
      title: "Moletom THRASHER",
      price: 129.90,
      rating: 5,
      brand: "Thrasher",
      thumbnail: "data:image/jpeg;base64,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"
    },
    {
      id: 19,
      type: 'MOLETOM',
      title: "Moletom BRO NX",
      price: 129.90,
      rating: 5,
      brand: "BRO NX",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-ozp-WDw6qHxQ7pxJzIbfAjzyepDS6kdsA&usqp=CAU"
    },
    {
      id: 20,
      type: 'MOLETOM',
      title: "Moletom HIGH",
      price: 129.90,
      rating: 5,
      brand: "High",
      thumbnail: "data:image/jpeg;base64,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"
    },
  ];
  return (
    <main>
      <h1>Moletons</h1>
      {produtos.map((produto) => (
        <Fragment key={produto.id}>
          <Produto produto={produto} />
        </Fragment>
      ))}
    </main>
  );
}
