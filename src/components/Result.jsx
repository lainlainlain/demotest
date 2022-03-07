import React from "react";

const Result = ({ valueShort, valueFull, valueOfInnKpp, valueAddress }) => {
  return (
    <section className="result">
      <p id="type"></p>
      <div className="row">
        <label>Краткое наименование</label>
        <input id="name_short" value={valueShort}></input>
      </div>
      <div className="row">
        <label>Полное наименование</label>
        <input id="name_full" value={valueFull}></input>
      </div>
      <div className="row">
        <label>ИНН / КПП</label>
        <input id="inn_kpp" value={valueOfInnKpp}></input>
      </div>
      <div className="row">
        <label>Адрес</label>
        <input id="address" value={valueAddress}></input>
      </div>
    </section>
  );
};

export default Result;
