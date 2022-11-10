import React, { Component } from 'react'

export default class Ciclovida extends Component {
    constructor(props){
        super(props);
        console.log(0, "el componente se inicializa, aún no está en el DOM");
        this.state = {
            hora: new Date().toLocaleTimeString()
        }

        this.temporizador=null;

};

componentDidMount() {
    console.log(1, "el componente ya está en el dom")
}

componentDidUpdate(prevProps, prevState){
    console.log(2, "el componente o las props del documentos cambiaron")
    console.log(prevProps);
    console.log(prevState)
}

componentWillUnmount () {
    console.log(3, "el componente se eliminó del DOM")

}


        tictac = (e) => {
            this.temporizador = setInterval(() => {
                this.setState ({
                    hora: new Date ().toLocaleTimeString()
                }

                )
            }, 1000);
            
        }
        iniciar = () => {
            this.tictac();

        }

        detener = () => {
            clearInterval(this.temporizador);
        }

        

    
    render() {
        console.log(4, "el componente se dibuja o redibuja")
        return (
            <>
            <h2>Ciclo de vida de los componentes de clase</h2>
            <h3>{this.state.hora}</h3>
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            
            </>
        )
    }

}