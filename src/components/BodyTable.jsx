import { useSelector } from "react-redux"

const BodyTable = () => {
  const state = useSelector(state => state.list);
  return (
    <tbody>
      {state.map((val, idx) => (
        <tr key={idx}>
          <td>{val.base}</td>
          {val.money.map((val, idx) => (
            <td className='money' key={idx}>{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default BodyTable
