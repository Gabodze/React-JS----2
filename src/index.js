import React from 'react';
import ReactDOM from 'react-dom/client';


function App(){
  return (
    <React.Fragment>
      <h1>React.Fragment-ის საშუალებით</h1>
      <h2>ჩვენ შეგვიძლია</h2>
      <h3>ერთი ან რამოდენიმე ელემენტი გამოვიტანოთ ეკრანზე</h3>

    </React.Fragment>
  )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);