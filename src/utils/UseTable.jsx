/* eslint-disable react/jsx-key */
import { useTable, useSortBy } from "react-table";
import useRows from "/src/utils/UseRows";
import useColumns from "/src/utils/UseColumns";
import "/src/app/styles.css";

export default function useTables() {
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;
  return (
    <div className="flex flex-col font-texts justify-center desktop:px-28 tablet:px-10 py-4 w-full">
      <div className="font-texts font-bold text-surface-50 text-sm p-4 bg-[#36558D]"><h3>Información del documento</h3></div>
      <table {...getTableProps()} className="border border-surface-300">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{
                        textAlign: "center",
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}