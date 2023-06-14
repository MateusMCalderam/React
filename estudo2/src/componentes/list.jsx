import PropTypes from 'prop-types'
import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <li>Item 1</li>
            <li>Item 2</li>
            <Item 
            marca="Ferrari"
            lançamento={1985}/>
            <Item 
            marca="Audi"
            lançamento={1990}/>
            <Item 
            marca={0}
            lançamento="1990"/>
            <Item />
        </>
    )
}


Item.propTypes = {
    marca: PropTypes.string,
    lançamento: PropTypes.number,
}
Item.defaultProps = {
    marca: 'Faltou a marca',
    lançamento: 0,
}
export default List