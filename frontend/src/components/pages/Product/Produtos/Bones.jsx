import { Fragment } from "react";
import Produto from "../components/Produto";

export default function Bones() {
  const produtos = [
    {
      id: 5,
      type: 'BONE',
      title: "Boné Five Panel",
      price: 59.90,
      rating: 5,
      brand: "High",
      thumbnail: "data:image/jpeg;base64,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"
    },
    {
      id: 6,
      type: 'BONE',
      title: "Boné Five Panel",
      price: 59.90,
      rating: 5,
      brand: "Santa Cruz",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv48sua2Vd4BndFpdJeLIuBkqa9rMtDh6CdA&usqp=CAU"
    },
    {
      id: 7,
      type: 'BONE',
      title: "Boné Five Panel",
      price: 59.90,
      rating: 5,
      brand: "High",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtO6keQVELMDIih-5cJXKzZlhtsVpTF_yxkA&usqp=CAU"
    },
    {
      id: 8,
      type: 'BONE',
      title: "Boné Five Panel",
      price: 59.90,
      rating: 5,
      brand: "Wats",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_-WTXj-O8c7F7Dr6EyLfOD_Y9RhZGle-Ng&usqp=CAU"
    },
  ];
  return (
    <main>
      <h1>Bonés</h1>
      {produtos.map((produto) => (
        <Fragment key={produto.id}>
          <Produto produto={produto} />
        </Fragment>
      ))}
    </main>
  );
}
