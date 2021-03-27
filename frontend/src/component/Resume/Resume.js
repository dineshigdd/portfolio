import React, { useState } from 'react';
import './Resume.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Document, Page } from 'react-pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import resumePDF from "./resume.pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



function Resume() {
    const [numPages, setNumPages] = useState(2);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
        <div style={{ width: 600 }} className="resume-container">
        <ArrowLeftIcon 
                    style={{ fontSize: '6rem', marginTop:'60px' , height: '7em'} }
                    onClick={()=>setPageNumber( (pageNumber == 2 ) ? pageNumber - 1:  pageNumber + 0)}/>

          <Document
            file= { resumePDF }
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>

          <ArrowRightIcon 
                style={{ fontSize: '6rem', marginTop:'60px',  height: '7em' } }
                onClick={()=>setPageNumber( (pageNumber == 1 ) ? pageNumber + 1 :  pageNumber + 0)}/>

      
        </div>
        
        {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
        </>
            
      );

      const App = () => (
        <div>
          <PDFDownloadLink document={<Resume />} fileName= { resumePDF }>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        </div>
      )

}

export default Resume
