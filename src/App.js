import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Rodape from "./Componentes/Rodape";
import Times from "./Componentes/Times";
import { useState } from "react";

function App() {
  const times = [ 
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map(time => <Times key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}  
      <Rodape />
    </div>
  );}

export default App;
