function ComponentPalabras(prop) {
      //Palabras: elimino los espacios en blanco al final/principio del array
    //con trim() para que no cuente como palabras hasta que escriba un espacio
    //y un caracter. Luego convierto el nuevo strin en un array y lo asigno
    //con setSaveWords.
    const textTrim=prop.palabras.trim() 
    const arraySplit = (textTrim.split([" "]))
    const arrayFiltrado = arraySplit.filter(
        string => string !=="" && string !== "/n"
    );
   
    return (
        <>
            <p>Contador de palabras</p>
            <p>Numero de palabras: {arrayFiltrado.length}</p>
        </>
    );
}
export default ComponentPalabras 