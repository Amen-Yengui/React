function ListGroup() {
    // const villes = ['Tunis', 'Sousse', 'Tozeur', 'Sfax', 'Sidi Bouzid', 'Tataouine'];
    const villes = [];
    
    // if (villes.length === 0)
    //     return (
    //         <>
    //             <h1>Villes</h1>
    //             <p> Liste vide </p>
    //         </>)

    return (
        <>
            <h1> List Group </h1>
            <ul className="list-group">
                {/* {villes.length === 0 ? <p> Liste vide </p> : null} */}
                {villes.length === 0 && <p>Liste vide </p>}
                {villes.map((ville, index) => <li key={index}> {ville} </li>)}
            </ul>
        </>)
}
export default ListGroup





