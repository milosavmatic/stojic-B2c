import { useState } from 'react'
import { RangeSlider } from 'rsuite'

const Filter = ({ filter, selectedFilters, setSelectedFilters }) => {
  const changeHanler = (data) => {
    const tmp = [...selectedFilters]
    const filtered = tmp.filter((item) => item.column === data.column)
    if (data.value.selected.length === 0) {
      if (filtered.length > 0) {
        const index = tmp.indexOf(filtered[0])
        tmp.splice(index, 1)
      }
    } else {
      if (filtered.length > 0) {
        tmp = tmp.map((item) => (item.column === data.column ? data : item))
      } else {
        tmp.push(data)
      }
    }
    setSelectedFilters([...tmp])
  }

  let selected = selectedFilters.filter((item) => item.column === filter.key)[0]
  selected = selected ? selected.value.selected : []

  switch (filter.type) {
    case 'range':
      return (
        <FilterRange
          filter={filter}
          onChange={changeHanler}
          selected={selected}
        />
      )
    case 'in':
    default:
      return (
        <FilterIn filter={filter} onChange={changeHanler} selected={selected} />
      )
  }
}

export default Filter

const FilterIn = ({ filter, onChange = () => {}, selected }) => {
  const [checked, setChecked] = useState(selected)

  const checkedChanged = ({ target }) => {
    if (target.checked) {
      if (!checked.includes(target.value)) {
        const tmp = [...checked, target.value]
        setChecked(tmp)

        onChange({
          column: filter.key,
          value: { selected: tmp },
        })
      }
    } else {
      const tmp = [...checked]
      var index = tmp.indexOf(target.value)
      if (index !== -1) {
        tmp.splice(index, 1)
      }

      setChecked(tmp)
      onChange({ column: filter.key, value: { selected: tmp } })
    }
  }

  return (
    <>
      {(filter?.params?.items ?? []).map((item) => (
        <div key={item.id} className='styleCheckBox'>
          <input
            type='checkbox'
            name={item.label}
            checked={checked.includes(item.label)}
            onChange={checkedChanged}
            value={item.label}
          />
          <label>{item.label}</label>
        </div>
      ))}
    </>
  )
}

const FilterRange = ({ filter, onChange, selected }) => {
  const [selectedValue, setSelectedValue] = useState(
    selected.length === 2
      ? selected
      : [Number(filter.params.min), Number(filter.params.max)]
  )
  const onRangeChange = (data) => {
    onChange({ column: filter.key, value: { selected: data } })
  }
  return (
    <RangeSlider
      min={Number(filter.params.min)}
      max={Number(filter.params.max)}
      value={selectedValue}
      defaultValue={[Number(filter.params.min), Number(filter.params.max)]}
      onChange={(value) => {
        setSelectedValue(value)
      }}
      onChangeCommitted={onRangeChange}
    />
  )
}
