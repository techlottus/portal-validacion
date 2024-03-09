import { useMemo } from "react";
import callAPI from "/src/services/Service";
import cn from "classnames";
import moment, { now } from "moment/moment";
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
  console.log("entro");
  var element = document.createElement("a");
  var fileName = proName + ".pdf";
  element.setAttribute("href", "data:application/pdf;base64," + file);
  element.setAttribute("download", fileName);
  document.body.appendChild(element);
  element.click();
}

export default function useRows() {
  if (file.length === 0 || file === null) {
    const rows = useMemo(
      () => [
        {
          nombre: name,
          folio: idAcct,
          tipo_documento: proName,
          vigencia: (
            <span
              className={cn({
                ["text-error-500"]: moment().isAfter(moment(expDate)),
              })}
            >
              {expDate}{" "}
              <span
                className={cn({
                  ["hidden"]: !moment().isAfter(moment(expDate)),
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
          nombre: name,
          folio: idAcct,
          tipo_documento: proName,
          vigencia: (
            <span
              className={cn({
                ["text-error-500"]: moment().isAfter(moment(expDate)),
              })}
            >
              {expDate}{" "}
              <span
                className={cn({
                  ["hidden"]: !moment().isAfter(moment(expDate)),
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
