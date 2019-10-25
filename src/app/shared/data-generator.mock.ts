import { names } from './names.mock';
import { ColDef } from 'ag-grid-community';

const NUM_ROWS = 100 * 1000;
const NUM_NUMERIC_COLS = 10;
const NUM_STRING_COLS = 10;

const startTime = Date.now();
export const rowData = makeRowData(NUM_ROWS, NUM_NUMERIC_COLS, NUM_STRING_COLS);
export const colDefs = makeColumnDefs(NUM_NUMERIC_COLS, NUM_STRING_COLS);
console.log(`Synchronous Data generation done in: ${Date.now() - startTime}ms!`)

function makeRowData(numRows, numNumericCols, numStringCols) {
  const data = [];
  for (let i = 0; i < numRows; i++) {
    const newRow = {};

    for (let j = 0; j < numNumericCols; j++) {
      newRow[`num${j}`] = generateNumber(0, 100000, 2);
    }
    for (let j = 0; j < numStringCols; j++) {
      newRow[`str${j}`] = getRandomListItem(names);
    }

    data.push(newRow);
  }
  return data;
}

function makeColumnDefs(numNumericCols, numStringCols) {
  const colDefs: ColDef[] = [];
  for (let i = 0; i < numNumericCols; i++) {
    colDefs.push({
      field: `num${i}`,
      type: ['myCustomNumberType']
    });
  }
  for (let i = 0; i < numStringCols; i++) {
        colDefs.push({
          field: `str${i}`,
          type: ['myCustomStringType']
        });
  }
  return colDefs;
}


function generateNumber(min, max, numDecimals) {
  return min + Math.floor(Math.random() * max) + parseFloat(Math.random().toFixed(numDecimals));
}

function getRandomListItem(list) {
  return list[generateNumber(0, list.length, 0)];
}
