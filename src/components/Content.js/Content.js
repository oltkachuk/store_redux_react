import React from 'react'
import ItemList from '../ItemList/ItemList'

const Content = (props) => {
    return (
        <main className="container listItem">
            <ItemList items={props.items} addToCart={props.addToCart}/>
        </main>
    )
}

export default Content