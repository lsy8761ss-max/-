import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const add = () => {
    if (!text) return;
    setList([...list, { text, date: new Date().toLocaleDateString() }]);
    setText("");
  };

  return (
    <div className="container">
      <h1>감성 가계부</h1>

      <div className="input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="수입 / 지출 내용"
        />
        <button onClick={add}>추가</button>
      </div>

      <ul>
        {list.map((v, i) => (
          <li key={i}>
            {v.date} - {v.text}
          </li>
        ))}
      </ul>
    </div>
  );
}