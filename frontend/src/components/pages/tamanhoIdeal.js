import React, { useState } from "react";
import "./tamanhoIdeal.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TamanhoIdeal = () => {
  const [cintura, setCintura] = useState("");
  const [torax, setTorax] = useState("");
  const [tamanhoCalca, setTamanhoCalca] = useState("P");
  const [tamanhoCamiseta, setTamanhoCamiseta] = useState("P");
  const [resultado, setResultado] = useState("");

  const calcularTamanho = () => {
    let resultado = "";

    let tamanhoIdealCalca;
    if (cintura < 80) {
      tamanhoIdealCalca = "P";
    } else if (cintura < 90) {
      tamanhoIdealCalca = "M";
    } else if (cintura < 100) {
      tamanhoIdealCalca = "G";
    } else {
      tamanhoIdealCalca = "GG";
    }

    if (tamanhoCalca !== tamanhoIdealCalca) {
      resultado += `Para a cintura de ${cintura} cm, o tamanho ideal para calça é ${tamanhoIdealCalca}. `;
      if (tamanhoCalca === "M" && tamanhoIdealCalca === "G") {
        resultado += "(M) ficará justo ou apertado.";
      }
    }

    let tamanhoIdealCamiseta;
    if (torax < 88) {
      tamanhoIdealCamiseta = "P";
    } else if (torax < 100) {
      tamanhoIdealCamiseta = "M";
    } else if (torax < 112) {
      tamanhoIdealCamiseta = "G";
    } else {
      tamanhoIdealCamiseta = "GG";
    }

    if (tamanhoCamiseta !== tamanhoIdealCamiseta) {
      resultado += `Para o toráx de ${torax} cm, o tamanho ideal para camiseta é ${tamanhoIdealCamiseta}. `;
      if (tamanhoCamiseta === "M" && tamanhoIdealCamiseta === "G") {
        resultado += "(M) ficará justo ou apertado.";
      }
    }

    setResultado(resultado || "Os tamanhos escolhidos estão adequados.");
  };

  return (
    <div 
        className="col-12 text-center mb-4"
        style={{ backgroundColor: "white", color: "black" }}
    >
      <h2>Descubra o tamanho ideal!</h2>
      <div className="form-group mb-3">
        <label>
          Cintura (cm):
          <input
            type="number"
            className="form-control"
            value={cintura}
            onChange={(e) => setCintura(e.target.value)}
            placeholder="Medida da cintura"
          />
        </label>
      </div>

      <div className="form-group mb-3">
        <label>
          Toráx (cm):
          <input
            type="number"
            className="form-control"
            value={torax}
            onChange={(e) => setTorax(e.target.value)}
            placeholder="Medida do toráx"
          />
        </label>
      </div>

      <div className="d-flex justify-content-between">
        <div className="meu-tamanhos">
          <div className="form-group mb-3">
            <label>
              Tamanho para calça/bermuda:
              <select
                className="form-control"
                value={tamanhoCalca}
                onChange={(e) => setTamanhoCalca(e.target.value)}
              >
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
              </select>
            </label>
          </div>

          <div className="form-group mb-3">
            <label>
              Tamanho para camiseta/moleton:
              <select
                className="form-control"
                value={tamanhoCamiseta}
                onChange={(e) => setTamanhoCamiseta(e.target.value)}
              >
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
              </select>
            </label>
          </div>

          <button className="btn btn-primary" onClick={calcularTamanho}>
            Verificar Tamanho
          </button>
        </div>

        <div className="tabela-tamanhos mt-4">
          <h4>Referência de Tamanhos</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Tamanho</th>
                <th>Cintura (cm)</th>
                <th>Toráx (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P</td>
                <td>76 - 80</td>
                <td>84 - 88</td>
              </tr>
              <tr>
                <td>M</td>
                <td>81 - 90</td>
                <td>89 - 100</td>
              </tr>
              <tr>
                <td>G</td>
                <td>91 - 100</td>
                <td>101 - 112</td>
              </tr>
              <tr>
                <td>GG</td>
                <td>101 - 110</td>
                <td>113 - 124</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="resultado text-center mt-3">{resultado}</div>
    </div>
  );
};

export default TamanhoIdeal;
