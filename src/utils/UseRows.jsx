import { useMemo } from "react";
import callAPI from "/src/services/Service";
import cn from "classnames";
import moment, { now } from "moment/moment";
const result = callAPI();

var row = Promise.resolve(result).then((value) => {
  row = value[0];
});

function downloadAsPDF() {
  const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const contentType = "application/pdf";
  const blob = b64toBlob(row.file, contentType);
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.target = "_parent";
  a.download = row.procedureName + ".pdf";
  (document.body || document.documentElement).append(a);

  setTimeout(() => {
    a.click();
    a.remove();
  }, 100);
}

export default function useRows() {
  if (row.file.length === 0 || row.file === null) {
    const rows = useMemo(
      () => [
        {
          nombre: row.studentName,
          folio: row.id,
          tipo_documento: row.procedureName,
          vigencia: (
            <span
              className={cn({
                ["text-error-500"]: moment().isAfter(
                  moment(
                    new Date(row.expirationDate).toLocaleDateString("es-MX")
                  )
                ),
              })}
            >
              {new Date(row.expirationDate).toLocaleDateString("es-MX")}{" "}
              <span
                className={cn({
                  ["hidden"]: !moment().isAfter(
                    moment(
                      new Date(row.expirationDate).toLocaleDateString("es-MX")
                    )
                  ),
                })}
              >
                VENCIDO
              </span>
            </span>
          ),
        },
      ],
      []
    );
    return rows;
  } else {
    const rows = useMemo(
      () => [
        {
          nombre: row.studentName,
          folio: row.id,
          tipo_documento: row.procedureName,
          vigencia: (
            <span
              className={cn({
                ["text-error-500"]: moment().isAfter(
                  moment(
                    new Date(row.expirationDate).toLocaleDateString("es-MX")
                  )
                ),
              })}
            >
              {new Date(row.expirationDate).toLocaleDateString("es-MX")}{" "}
              <span
                className={cn({
                  ["hidden"]: !moment().isAfter(
                    moment(
                      new Date(row.expirationDate).toLocaleDateString("es-MX")
                    )
                  ),
                })}
              >
                VENCIDO
              </span>
            </span>
          ),
          descarga: (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="mobile:py-2 mobile:px-4 mobile:rounded mobile:bg-surface-800 mobile:text-surface-100 mobile:flex mobile:align-middle"
            >
              <a
                href="#"
                onClick={(e) => downloadAsPDF()}
                className="mobile:flex mobile:items-center"
              >
                <span className="material-icons w-8 mobile:flex mobile:align-middle mobile:justify-center">
                  download
                </span>
                <span className="text-surface-100 font-bold hidden mobile:flex align-middle ">
                  Descargar
                </span>
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
