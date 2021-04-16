import { useSelector } from "react-redux"

const HeadTable = () => {
  const state = useSelector(state => state.head);

  return (
    <thead>
      <tr>
        {state.map((val, idx) => <th key={idx}>{val}</th>)}
      </tr>
    </thead>
  )
}

export default HeadTable
