export default function DataTable({ columns, rows }) {
  return (
    <div className="table-responsive">
      <table className="table proposal-table align-middle">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label || row.term}>
              {columns.map((column) => (
                <td key={column}>{row[column] ?? row[column.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
