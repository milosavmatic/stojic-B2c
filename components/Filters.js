import Accordion from 'react-bootstrap/Accordion'
import Filter from './Filter/Filter'
import reset from "../assets/images/icons/reset.png"
import Image from 'next/image'

const Filters = ({
  filters,
  selectedFilters,
  setSelectedFilters,
  changeFilters,
  setChangeFilters,
  showSearch,
  setShowSearch,
  searchProducts,
}) => {
  return (
    <div className={`${'filters-holder'}`}>
      <div className={`${'reset-filters'}`}>
        <p onClick={() => setSelectedFilters([])}>
          Resetuj filtere <span className='reset-image'>
            <Image
              src={reset}
              alt=''
              className='image'
              width={15}
              height={15}
            />
          </span>
        </p>
      </div>
      <div className={`${'filters'}`}>
        {(filters ?? []).map((filter) => {
          return (
            <Accordion defaultActiveKey='0' key={filter.key}>
              <Accordion.Item
                eventKey={filter.key}
                className={`${'custom-accordion'}`}
              >
                <Accordion.Header className={`${'custom-header'}`}>
                  <p>{filter.name}</p>
                </Accordion.Header>
                <Accordion.Body>
                  <Filter
                    filter={filter}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )
        })}
        {/* {showSearch && <button onClick={searchProducts}>Pretraži</button>}
        <div className='styleCheckBox'>
          <input
            type='checkbox'
            name='change-filters'
            id='change-filters'
            checked={changeFilters}
            onChange={() => setChangeFilters(!changeFilters)}
          />
          <label htmlFor='change-filters'>Smanjuj filtere</label>
        </div>
        <div className='styleCheckBox'>
          <input
            type='checkbox'
            name='search-button'
            id='search-button'
            checked={showSearch}
            onChange={() => setShowSearch(!showSearch)}
          />
          <label htmlFor='search-button'>Prikazi dugme za pretragu</label>
        </div> */}
      </div>
    </div>
  )
}

export default Filters
