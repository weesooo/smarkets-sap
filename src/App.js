import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import Axios from "axios";
import "./assets/Cards.css";
import { Card, Image } from "semantic-ui-react";
import "./assets/Cards.css";

//External Crypto API, Flexbox, Axios, Sementatic UI, Material UI, useState, useEffect

function App() {
  const [CryptoData, SetCryptoData] = useState([]);

  const RequestURL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=2&sparkline=false";

  useEffect(() => {
    Axios.get(RequestURL)
      .then((res) => {
        SetCryptoData(res.data);
      })
      .catch((error) => console.log(error)); //Error handling
  }, []); //Empty array so we can stop the infinite requests to the API and render it only once

  return (
    <div className="app">
      <Header />
      <div className="cards">
        <div className="cards">
          <div className="cards">
            {CryptoData.map((data) => (
              <Card>
                <Image
                  className="card_image"
                  src={data.image}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header className="card_header">{data.name}</Card.Header>
                  <Card.Header className="card_header">
                    ${data.current_price.toFixed(2)}
                  </Card.Header>
                  <Card.Header className="card_header">
                    {data.price_change_percentage_24h.toFixed(2)}%
                  </Card.Header>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
}

export default App;
