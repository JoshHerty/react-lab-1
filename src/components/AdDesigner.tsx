import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Strawberry");
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  //   const [buttonActivated, setButtonColor] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState(44);
  return (
    <section className="AdDesigner">
      {/* <input type="color" /> */}
      <p className="ad-flavor">Ad Designer</p>
      <div className={`ad ${darkTheme === true ? "dark-theme" : ""}`}>
        <p>Vote for:</p>
        <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
      </div>
      <p>What to support</p>
      <button
        onClick={() => {
          setFlavor("Chocolate");
        }}
      >
        Chocolate
      </button>
      <button
        onClick={() => {
          setFlavor("Vanilla");
        }}
      >
        Vanilla
      </button>
      <button
        onClick={() => {
          setFlavor("Strawberry");
        }}
      >
        Strawberry
      </button>
      <div>
        <p>Color Theme</p>
        <button onClick={() => setDarkTheme(false)}>Light</button>
        <button onClick={() => setDarkTheme(true)}>Dark</button>
      </div>
      <p>Font Size</p>
      <div className="font-changer">
        <button
          onClick={() => {
            setFontSize(fontSize - 1);
          }}
        >
          Down
        </button>
        <p>{fontSize}</p>
        <button
          onClick={() => {
            setFontSize(fontSize + 1);
          }}
        >
          Up
        </button>
      </div>
    </section>
  );
};

export default AdDesigner;
