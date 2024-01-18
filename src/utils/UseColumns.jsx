import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre"
      },
      {
        Header: "Folio",
        accessor: "folio"
      },
      {
        Header: "Tipo de documento",
        accessor: "tipo_documento"
      },
      {
        Header: "Vigencia",
        accessor: "vigencia"
      },
      {
        Header: "Descarga",
        accessor: "descarga"
      }
    ],
    []
  );

  return columns;
}
