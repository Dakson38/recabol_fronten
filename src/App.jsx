import React, { useState } from 'react';
import './App.css'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFNotaOrden from './components/PDF/NotaOrden';
import PDFNotaEntrega from './components/PDF/NotaEntrega';
import PDFReporteRechazo from './components/PDF/ReporteRechazo';
import MenuRecabol from './components/secretario/MenuRecabol';
import Perfil from './components/common/Perfil';


const App = () => {
  const [state, setState] = useState(false);
  const notaOrden = [
    { id: 1, orden: '12345', alfa: 'A', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },
    { id: 2, orden: '12345', alfa: 'A', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },
    { id: 3, orden: '12345', alfa: 'A', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },
    { id: 4, orden: '12345', alfa: 'A', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },
    { id: 5, orden: '12345', alfa: 'A', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },

  ];
  const notaOrden2 = [
    { id: 1, alfa: 'B', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },
    { id: 2, alfa: 'B', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },
    { id: 3, alfa: 'B', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },
    { id: 4, alfa: 'B', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },
    { id: 5, alfa: 'B', marca: 'marca1', medida: '3213gf', serie: 'dsjid89', trabajo: 'parcheado', cotizacion: '599' },

  ];

  return (
    <div className='contenedor-recabol'>

      <PDFDownloadLink document={<PDFNotaOrden notaOrden={notaOrden} />} fileName='notaOrden.pdf'>
        <button>DESCARGAR PDF ORDEN </button>
      </PDFDownloadLink>
      <PDFDownloadLink document={<PDFNotaEntrega notaEntrega={notaOrden2} />} fileName='notaOrden.pdf'>
        <button>DESCARGAR PDF ENTREGA </button>
      </PDFDownloadLink>
      <PDFDownloadLink document={<PDFReporteRechazo reporte={[]} />} fileName='notaOrden.pdf'>
        <button>DESCARGAR PDF REPORTE RECHAZO </button>
      </PDFDownloadLink>

      <PDFViewer width="1200px" height="500px">
        <PDFNotaOrden notaOrden={notaOrden2} />
      </PDFViewer>
      <PDFViewer width="1200px" height="500px">
        <PDFNotaEntrega notaEntrega={notaOrden} />
      </PDFViewer>
      <PDFViewer width="1200px" height="500px">
        <PDFReporteRechazo reporte={[]} />
      </PDFViewer>
    </div>
  );
};

export default App;
