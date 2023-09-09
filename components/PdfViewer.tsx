// components/PdfViewer.tsx
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../lib/firebaseClient';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Document = dynamic(() => import('react-pdf').then((pdf) => pdf.Document), {
  ssr: false,
});

const Page = dynamic(() => import('react-pdf').then((pdf) => pdf.Page), {
  ssr: false,
});

interface PdfViewerProps {
  path: string;
}
const scale = 1.7;

const PdfViewerComponent: React.FC<PdfViewerProps> = ({ path }) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPdfUrl() {
      setLoading(true);
      const pdfRef = ref(storage, path);
      try {
        const url = await getDownloadURL(pdfRef);
        console.log("URL: ", url);
        setPdfUrl(url);
      } catch (error) {
        console.error("Error fetching PDF URL: ", error);
      }
      setLoading(false);
    }

    fetchPdfUrl();
  }, [path]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }

  console.log("Rendering with URL: ", pdfUrl);

  return (
    <div className="w-[1000px] flex flex-col center items-center" key="pdf_container">
      {loading ? (
        <div></div>
      ) : pdfUrl ? (
        <Document className="w-[1000px]" file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
            scale={scale} 
            className="w-[100000px]" 
            key={`page_${index + 1}`} 
            pageNumber={index + 1} />
          ))}
        </Document>
      ) : null}
    </div>
  );
};

export default PdfViewerComponent;