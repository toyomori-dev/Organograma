import './Colaborador.css';
const Colaborador = (props) => {
    return (<div className='Colaborador'> 
        <div className='cabecalho' style={{backgroundColor: props.corDeFundo }}>
            <img src={props.imagem} alt='Foto do colaborador' />

        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <p>{props.cargo}</p>
        </div>
    </div>)
}

export default Colaborador;