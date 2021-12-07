import React,{ useState} from "react";
export default function TodoInput(props) {
    const { addOneItem } = props;
    const [input, setInput] = useState("");
    return [
      <input
        id="inputbox"
        placeholder="Add item"
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />,
      <button id="add"
        onClick={() => {
          if (input !== "") {
            addOneItem(input);
            setInput("");
          }
        }}
      >
        Add
      </button>
    ];
  }