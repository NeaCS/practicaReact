import React, { Component } from 'react';

function Pokemons (props) {
    return (
        <figure>
        <img src={props.avatar} alt={props.name} />
        <figcaption>{props.name}</figcaption>
        </figure>
    )

}

export default class AjaxApi extends Component { 
    state = {
        pokemons: []
    }

componentDidMount(){
    let url = "http://pokeapi.co/api/v2/pokemon/"
    fetch(url)
    .then(res=>res.json())
    .then(json => console.log(json))
    
}


    render() {
    return (
    <>
        <h2>Peticiones Asíncronas en Componentes de Clase</h2>
    </>
    )
}}