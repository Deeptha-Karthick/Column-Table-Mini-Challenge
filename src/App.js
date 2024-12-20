import "./styles.css";
import { useState, useMemo } from "react";

export default function App() {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(7);

  const generateConfig = (rows, columns) => {
    return Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: columns }, (_, colIndex) => {
        let range = rows + colIndex * rows;
        let start = range - rows + 1;
        return colIndex % 2 === 0
          ? start + rowIndex // Top-down for even columns
          : range - rowIndex; // Bottom-up for odd columns
      })
    );
  };

  const config = useMemo(() => generateConfig(rows, columns), [rows, columns]);

  /*


1 10 11 16
2 9. 12. 17
3 8. 13  18
4 7. 14. 19
5 6. 15. 20

1st col => col*5 => 0*5 + 5, 1*5 + 5, 2*5 + 5, 3*5 + 5
col odd -> row-> 0 till row_>row length -> increase value
col even-> row-> row length - row->0 increase value
j-> even -> Top - Down 
j->odd -> Bottom - top

*/

  console.log("config", config);
  return (
    <div className="App">
      <h1>Column Table</h1>
      <div className="column-container">
        {config.map((row, rowIndex) => {
          return (
            <div className="rows">
              {row.map((col, colIndex) => {
                return <div className="cell">{col}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
/*


1 10 11 16
2 9. 12. 17
3 8. 13  18
4 7. 14. 19
5 6. 15. 20

1st col => col*5 => 0*5 + 5, 1*5 + 5, 2*5 + 5, 3*5 + 5
col odd -> row-> 0 till row_>row length -> increase value
col even-> row-> row length - row->0 increase value
j-> even -> Top - Down 
j->odd -> Bottom - top
*/
