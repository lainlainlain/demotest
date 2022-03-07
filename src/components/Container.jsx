import { useRef } from "react";

const Container = ({ onEnteredData }) => {
  const dataInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredData = dataInputRef.current.value;
    onEnteredData(enteredData);
  };

  return (
    <section className="container">
      <form onSubmit={submitHandler}>
        <p>
          <strong>Компания или ИП</strong>
        </p>
        <input
          id="party"
          name="party"
          type="text"
          placeholder="Введите название, ИНН, ОГРН или адрес организации"
          ref={dataInputRef}
        />
      </form>
    </section>
  );
};

export default Container;
