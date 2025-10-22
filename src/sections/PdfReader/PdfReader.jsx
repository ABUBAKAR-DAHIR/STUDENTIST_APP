import { Viewer, Worker } from '@react-pdf-viewer/core'
import React from 'react'
import { useSelector } from 'react-redux'
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

export default function PdfReader() {
    let currentPdf = useSelector((state) => state.selection.currentPdf)
    // let encodedPdf = encodeURI(currentPdf)
    // let url = new URL(currentPdf)
    // let safeParts = url.pathname
    //     .split('/')
    //     .map(encodeURIComponent)
    //     .join('/')

    // let encodedPdf = `${url.origin}${safeParts}`
    // let encodedPdf = encodeURI(currentPdf)
    console.log("Pdf link:  " + currentPdf);
    // console.log("encoded link:  " + encodedPdf);
    let defaultLayoutPluginInstance = defaultLayoutPlugin()
    
  return (
    <div className='h-screen'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={currentPdf} plugins={[defaultLayoutPluginInstance]}/>
        </Worker>
    </div>
  )
}
