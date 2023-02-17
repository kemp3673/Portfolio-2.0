import axios from "axios";
import FileDownload from "js-file-download";

// Purpose: To download the resume from the server
const resumeDownloader = (e) => {
  if (e) {
    e.preventDefault();
  }
  axios
    .get("/downloadPDF", {
      responseType: "blob",
    })
    .then((res) => {
      FileDownload(res.data, "Nicholas_Kempkes_resume.pdf");
    })
    .catch((err) => {
      alert("Error downloading file. Please try again later.");
    });
};

export default resumeDownloader;