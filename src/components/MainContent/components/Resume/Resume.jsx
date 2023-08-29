import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import personalResume from "./resume/maximdudai-cv.pdf";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = personalResume;
    link.download = "maximdudai-cv.pdf"; // Set the desired file name here

    link.dispatchEvent(new MouseEvent("click"));
  };

  useState(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  const finalPDFWidth = width < 550 ? 300 : width < 450 ? 200 : 500;
  return (
    <>
      <div className="portfolioResume py-5 w-full h-screen lg:h-full flex flex-col lg:flex-row-reverse justify-evenly items-center overflow-hidden max-h-screen">
        <div className="portfolioDownloadButton w-full md:w-1/2 lg:w-1/4 flex justify-center">
          <button
            onClick={() => {
              handleDownload(), window.open(personalResume, "_blank");
            }}
            className="flex justify-center p-2 rounded-md text-gray-200 items-center gap-x-2 w-full bg-black/50"
          >
            <p className="tracking-widest">Download</p>
            <p className="flex items-center gap-x-2">
              <FaFileDownload />
              <span className="text-gray-400 text-[12px]">.pdf</span>
            </p>
          </button>
        </div>

        <div className="portfolioFormatPDF mt-5 lg:mt-0 h-full overflow-y-scroll p-2 rounded border-2 border-black/10 dark:border-none dark:p-0">
          <Document file={personalResume}>
            <Page
              renderTextLayer={false}
              width={finalPDFWidth}
              pageNumber={1}
            />
            <Page
              renderTextLayer={false}
              width={finalPDFWidth}
              pageNumber={2}
            />
          </Document>
        </div>
      </div>
    </>
  );
};
export default Resume;
