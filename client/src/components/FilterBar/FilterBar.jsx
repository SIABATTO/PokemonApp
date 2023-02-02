import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import style from "./FilterBar.module.css"

export const FilterBar = ({ orderName, filterOrigin, filterTypes }) => {
  const allTypes = useSelector(state => state.types);

  const [setOrder] = useState("");

  const dispatch = useDispatch();
    function handleSortByName(e) {
    dispatch(orderName(e.target.value))
    setOrder(`Ordenado${e.target.value}`)
}


  return (
    <div className={style.FilterContainer}>
      <select defaultValue="Order" onChange={(e) => handleSortByName(e)}>
        <option disabled>Order</option>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
      </select>

      <select defaultValue="Origin" onChange={(e) => filterOrigin(e)}>
        <option disabled>Origin</option>
        <option value='all'>All Origins</option>
        <option value='created'>Created</option>
        <option value='existing'>Existing</option>
      </select>

      <select defaultValue="Type" onChange={(e) => filterTypes(e)}>
        <option disabled>Type</option>
        <option value='all'>All Types</option>
        {allTypes?.map((t) => (<option value={t.name} key={t.id}> {t.name}</option>))}
      </select>

      {/* <button onClick={(e) => reload(e)}>Reload Home</button> */}
    </div>
  )
}

export default FilterBar;