import "./App.css";
import Container from "./components/Container";
import Result from "./components/Result";
import { useEffect, useState } from "react";

function App() {
  const [dataApi, setDataApi] = useState({});
  const [containerValue, setContainerValue] = useState();

  const onChangeContainerValue = (data) => {
    setContainerValue(data);
  };

  var url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
  var token = "c0ff003363d7aa985e2a97b1bf4a3e1d17faff0d";
  var query = containerValue;
  console.log(containerValue);

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  };

  useEffect(() => {
    if (!containerValue) {
      return;
    }
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const { suggestions: newData } = data;
        const firstData = newData[0];

        const newObj = {
          valueShort: firstData.data.name.short_with_opf,
          valueFull: firstData.data.name.full_with_opf,
          valueOfInnKpp: [
            ...firstData.data.inn,
            ..."/",
            ...firstData.data.kpp,
          ].join(""),
          valueAddress: firstData.data.address.data.postal_code,
        };

        setDataApi(newObj);
      })
      .catch((error) => console.log("error", error));
  }, [containerValue]);

  console.log(dataApi);

  return (
    <>
      <Container onEnteredData={onChangeContainerValue} />
      <Result
        valueShort={dataApi.valueShort}
        valueFull={dataApi.valueFull}
        valueOfInnKpp={dataApi.valueOfInnKpp}
        valueAddress={dataApi.valueAddress}
      />
    </>
  );
}

export default App;
