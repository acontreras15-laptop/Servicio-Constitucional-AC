import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>🚀 Hola, ya integramos React en mi proyecto HTML</h1>
      <p>Este contenido viene desde un componente de React.</p>
    </div>
  );
}

// Montamos la app en el div con id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
