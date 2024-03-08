import { useMemo } from "react";
import callAPI from "/src/services/Service";
const result = callAPI();

var file = Promise.resolve(result).then((value) => {
  file = value[8];
});

export default function useColumns() {
  if (file.length === 0 || file === null) {
    const columns = useMemo(
      () => [
        {
          Header: "Nombre",
          accessor: "nombre",
        },
        {
          Header: "Folio",
          accessor: "folio",
        },
        {
          Header: "Tipo de documento",
          accessor: "tipo_documento",
        },
        {
          Header: "Vigencia",
          accessor: "vigencia",
        },
      ],
      []
    );
    return columns;
  } else {
    const columns = useMemo(
      () => [
        {
          Header: "Nombre",
          accessor: "nombre",
        },
        {
          Header: "Folio",
          accessor: "folio",
        },
        {
          Header: "Tipo de documento",
          accessor: "tipo_documento",
        },
        {
          Header: "Vigencia",
          accessor: "vigencia",
        },
        {
          Header: "Descarga",
          accessor: "descarga",
        },
      ],
      []
    );
    return columns;
  }
}
