import React, { useState } from "react";

export const AllEmp = () => {
  const [hrc, setHrc] = useState(0);
  const [devc, setDevc] = useState(0);
  return (
    <table>
      <tr>
        <td>HR Count</td>
        <td>
          <input type="number" onChange={(e) => setHrc(e.target.value)} />
        </td>
        <td>{hrc}</td>
      </tr>
      <tr>
        <td>Dev Count</td>
        <td>
          <input type="number" onChange={(e) => setDevc(e.target.value)} />
        </td>
        <td>{devc}</td>
      </tr>
      <tr>
        <td>
          <span>Total Count</span>
        </td>
        <td>
          <p>{Number(hrc) + Number(devc)}</p>
        </td>
      </tr>
    </table>
  );
};
