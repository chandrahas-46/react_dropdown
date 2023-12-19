import {  useState } from "react";
import Style from './dropdown.module.css';

function Dropdown() {
  const items = ["Yes", "Probably Not"];
  // Used a hook for showing the selected Itme
  const [selectedOption, setSelectedOption] = useState("");
  const [optionArray, setOptionArray] = useState([]);

  const handleButtonOver = () => {
    setOptionArray(items);
  };

  const handleOptionClick = (item) => {
    setOptionArray([]);
    setSelectedOption(item);
  };

  // render the dropdown
  return (
    <>
      <div>
        <h1>Should you use a dropdown?</h1>
        <div className={Style.dropdown}>
          <h2>{selectedOption}</h2>
          <button className={Style.dropdownBtn} onMouseOver={handleButtonOver}>
            Select 
          </button>

          <ul className={Style.dropdownList}>
            {optionArray.map((item, index) => (
              <li key={index} onClick={() => handleOptionClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dropdown;

