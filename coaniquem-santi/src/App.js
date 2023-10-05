import React from 'react';
import PlaylistEmbed from "./PlaylistEmbed";
import PdfDownload from "./PdfDownload";

function App() {
    return(
        <div>
            <h1>Aniversario de Santi</h1>
            <h2>Ver playlist</h2>
            <PlaylistEmbed/>
            <h2>Descargar Actividades Santi</h2>
            <PdfDownload/>
        </div>
    )
}

export default App;
