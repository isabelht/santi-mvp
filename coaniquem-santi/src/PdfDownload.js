import React from 'react'

function PdfDownload() {
    const handleDownload = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/PDF/actividades_Santi_1.pdf'

        const link = document.createElement('a')
        link.href = pdfUrl
        link.download = 'actividades_Santi_1.pdf'
        link.click()
    }

    return(
        <div>
            <button onClick={handleDownload}>Descargar PDF</button>
        </div>
    )
}

export default PdfDownload