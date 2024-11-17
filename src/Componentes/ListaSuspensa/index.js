import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    return (
        <div className="ListaSuspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value="">Selecione uma opção</option>
               {props.items.map(item => {
                   return <option key={item}>{item}</option>
                })}
            </select>
        </div> 
    )
}
export default ListaSuspensa;