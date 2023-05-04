

function App() {
  return (
    <div className="container">
     <div className = "title">
      <h2>SUA NOVA TRAJETÓRIA PROFISSIONAL COMEÇA AGORA</h2>
      <h4>Acesse e candidate-se à milhares de vagas.</h4>
      <h4>Entre e comece a se candidatar:</h4>
     </div>
     <div className= "containerInput">
     <input
     type="text"
     placeholder="Nome e sobrenome"
     />
     <input
     type="text"
     placeholder="E-mail"
     
     />
     <input
     type="text"
     placeholder="Senha"
     
     />
     <input
     type="text"
     placeholder="CEP"
     
     />
     <input
     type="text"
     placeholder="Cargo desejado"
     
     />

     <button className="buttonSearch">
      CADASTRAR-SE
     </button>
    </div>
    </div>
  );
}

export default App;
