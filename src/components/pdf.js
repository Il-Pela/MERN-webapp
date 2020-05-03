/* import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import pdf from "../prova.pdf";

export class MyPdfViewer extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={pdf}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
} */

import React/*, { useState } */ from 'react';
/* import Pdf from '@mikecousins/react-pdf'; */

import pdf from "../prova.pdf";

export const MyPdfViewer = () => {
  /* const [page, setPage] = useState(1); */

  return (
    /*     <Pdf file={pdf} page={page} scale="1">
          {({ pdfDocument, pdfPage, canvas }) => (
            <>
              {!pdfDocument && <span>Loading...</span>}
              {canvas}
              {Boolean(pdfDocument && pdfDocument.numPages) && (
                <div>
                  <button disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="btn btn-secondary btn-block"
                  >PreviousPage</button>
                  <button disabled={page === pdfDocument.numPages}
                    onClick={() => setPage(page + 1)}
                    className="btn btn-secondary btn-block"
                  >NextPage</button>
    
                </div>)}
            </>
          )}
        </Pdf> */

    <div style={{ height: 700 }}>
      <object data={pdf}
        type="application/pdf"
        width="100%"
        height="700"
        frameBorder="0"
        scrolling="auto">
      </object>
    </div>
  );
};

