import React, { createContext, useState } from 'react';

const ValueInsertedContext = createContext();

export const ValueInsertedProvider = ({children}) => {
  var accessed = [];
  var notAccessed = [];
  var values = [];
  var mortos = [];

  var originalTable = [
    ['FP',  'a', 'b', 'c'],
    [ 0,  0, 1, 2],
    [ 1,  1, 1, 1],
    [ 2,  3, 5, 6],
    [`*${3}`, 3, 5, 3],
    [ 4,  3, 5, 5],
    [`*${5}`, 6, 8, 6],
    [ 6,  6, 6, 6],
    [ 7,  4, 6, 6],
    [`*${8}`, 8, 5, 8]
  ];

  const [currentTable, setCurrentTable] = useState(originalTable)
  const [lines, setLines] = useState(0);
  const [columns, setColumns] = useState(0);
  const [tableInput, setTableInput] = useState([])

  return(
    <ValueInsertedContext.Provider
      value={{
        originalTable,
        currentTable,
        setCurrentTable,
        accessed,
        notAccessed,
        values,
        lines,
        mortos,
        setLines,
        columns,
        setColumns,
        tableInput,
        setTableInput
      }}>
      {children}
    </ValueInsertedContext.Provider>
  );
};

export default ValueInsertedContext;