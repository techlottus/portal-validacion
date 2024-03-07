import { useMemo } from "react";
import download from "/src/download.png";
import Image from "next/image";
import callAPI from "/src/services/Service";
const result = callAPI();

var idAcct = Promise.resolve(result).then((value) => {
  idAcct = value[0];
});
var name = Promise.resolve(result).then((value) => {
  name = value[1];
});
var proName = Promise.resolve(result).then((value) => {
  proName = value[6];
});
var file = Promise.resolve(result).then((value) => {
  file = value[8];
});
var expDate = Promise.resolve(result).then((value) => {
  expDate = value[10];
});

function downloadAsPDF() {
  const downloadLink = document.createElement("a");
  const fileName = proName + ".pdf";
  downloadLink.href = "data:application/pdf;base64," + file;
  downloadLink.download = fileName;
  downloadLink.click();
}

export default function useRows() {
  if (file.length === 0 || file.length === null) {
    const rows = useMemo(
      () => [
        {
          nombre: name,
          folio: idAcct,
          tipo_documento: proName,
          vigencia: expDate,
        },
      ],
      []
    );
    return rows;
  } else {
    const rows = useMemo(
      () => [
        {
          nombre: name,
          folio: idAcct,
          tipo_documento: proName,
          vigencia: expDate,
          descarga: (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }} className="mobile:py-2 mobile:px-4 mobile:rounded mobile:bg-surface-800 mobile:text-surface-100 mobile:flex mobile:align-middle"
            >
              <a href="#" onClick={(e) => downloadAsPDF()} className="mobile:flex mobile:items-center" >
                <span className="material-icons w-8 mobile:flex mobile:align-middle mobile:justify-center">download</span>
                <span className="text-surface-100 font-bold hidden mobile:flex align-middle ">Descargar</span>
                {/* <Image src={download} alt="download" height={30} width={30} /> */}
              </a>
            </div>
          ),
        },
      ],
      []
    );
    return rows;
  }
}
