/* eslint-disable react/jsx-key */
import { useTable, useSortBy } from "react-table";
import useRows from "/src/utils/UseRows";
import useColumns from "/src/utils/UseColumns";
import "/src/app/styles.css";
import cn from "classnames";
import { useState } from "react";

export default function useTables() {
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;
  const [open, setOpen] = useState(true);
  const handleClickMore = () => {
    setOpen(open ? false : true);
  };
  return rows ? (
    <div className="flex flex-col font-texts justify-center  py-4 w-full">
      <div className="font-texts font-bold text-surface-50 text-sm p-4 bg-[#36558D]">
        <h3 className="flex  justify-start mobile:justify-center">
          Información del documento
        </h3>
      </div>

      <table
        {...getTableProps()}
        className="border border-surface-300 mobile:hidden w-full"
      >
        <thead className="w-full">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="flex flex-col font-texts justify-center text-sm w-full">
                    {column.render("Header")}
                  </div>
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
                      <div className="flex flex-col font-texts text-sm justify-center w-full">
                        {cell.render("Cell")}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <table
        {...getTableProps()}
        className=" block tablet:hidden desktop:hidden border-none"
      >
        <tbody {...getTableBodyProps()} className="flex w-full border-none">
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="w-full">
                <div className="flex-col w-full">
                  {row.cells.map((cell, i) => {
                    return (
                      <div
                        className={cn(
                          "flex-col py-3 font-texts text-sm justify-center w-full border-b border-b-surface-300 align-middle",
                          {
                            ["border-none"]: i > 3,
                            ["hidden"]: !open && i > 0 && i < 4,
                          }
                        )}
                      >
                        <button
                          className={cn(
                            "rounded-full w-6 h-6 bg-error-500 align-middle",
                            { ["hidden"]: i > 0 }
                          )}
                          onClick={handleClickMore}
                        >
                          <span className="material-icons text-surface-50 align-middle justify-center text-sm">
                            {open ? "remove" : "add"}
                          </span>
                        </button>
                        <span
                          className={cn("text-surface-400 align-middle", {
                            ["hidden"]: i < 1 || i > 3,
                          })}
                        >
                          {headerGroups[index].headers[i]["Header"]}:
                        </span>{" "}
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <span>NO FOLIO</span>
  );
}
