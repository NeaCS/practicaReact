import React, { useState } from "react";

/* export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se envió")
    
  }
  
  
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>

         Input de texto }
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          OnChange captura el cambio del estado de Input 
          onChange={(e) => setNombre(e.target.value)}
        />
     input de radio 
        <p>Elige tu sabor JS Favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="Vanilla">Vanilla</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>

        <p>Eligue tu lenguaje favorito</p>
        <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
          <option value="">---</option>
          <option value="js">js</option>
          <option value="php">php</option>
          <option value="go">go</option>
          <option value="rb">ruby</option>
        </select>
        <br/>
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input type="checkbox" id="terminos" name="terminos" onChange={(e)=> setTerminos(e.target.checked)}/>
        <br/>
        <input type="submit" />
      </form>
    </>
  );
}
 */

export default function Formularios() {

  /* guardar las respuestas en un objeto */
 /*  un estado para el objeto que devuelve el formulario */
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }

  const handleChecked = (e) => {
    setForm({...form, [e.target.name]:e.target.checked})
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se envió")
    
  }
  
  
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>

        {/*  Input de texto } */}
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
        /*   OnChange captura el cambio del estado de Input  */
          onChange={handleChange}
        />
   {/*   input de radio  */}
        <p>Elige tu sabor JS Favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="Vanilla">Vanilla</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>

        <p>Eligue tu lenguaje favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">js</option>
          <option value="php">php</option>
          <option value="go">go</option>
          <option value="rb">ruby</option>
        </select>
        <br/>
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>
        <br/>
        <input type="submit" />
      </form>
    </>
  );
}