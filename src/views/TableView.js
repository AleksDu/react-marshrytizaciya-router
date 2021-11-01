import { useState, useEfect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SortSelector from "../components/SortSelector/SortSelector";
import Table from "../components/Table";
const initialState = [
  { id: 1, value: 100 },
  { id: 2, value: 400 },
  { id: 3, value: 200 },
  { id: 4, value: 500 },
  { id: 5, value: 300 },
];

const sortOptions = [
  { value: "ascending", label: "По возрастанию" },
  { value: "descending", label: "По убыванию" },
];

export default function TableView() {
  const history = useHistory();
  const location = useLocation();
    const [exspenses, setExspenses] = useState(initialState);
    const sortOrder = new URLSearchParams(location.search)get('sortBy') ?? 'ascending'
    const onSortOrderChange = (order) => {
        // console.log(order);
        // console.log(history);
        // console.log(location);
        history.push({...location, search: `sortBy${order}`});
    };
    useEffect(() => {
        if (location.search !== '') { return }
        history.push({...location, search: `sortBy=ascending`})
    }, [history, location])
  return (
    <>
      <SortSelector
        options={sortOptions}
        onChange={onSortOrderChange}
        value={sortOrder}
      />
      <Table items={exspenses} />
    </>
  );
}
