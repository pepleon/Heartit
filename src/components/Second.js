import React, { useState, useEffect } from 'react';
import useShows from '../hooks/useShows';

const Second = () => {
  const [selectedOption, setSelectedOption] = useState('cars');
  const { shows, loading, error } = useShows(selectedOption);

  const [cardColors, setCardColors] = useState([
    '#2B7397',
    '#32959D', 
    '#9C7777', 
  ]);

  const cleanSummary = (summary) => {
   
    return summary
    .replace(/<\/?p>/g, "")  
    .replace(/<\/?b>/g, "") 
    .replace(/<\/?i>/g, "") 
    .replace(/<\/?strong>/g, "")
    .replace(/<\/?em>/g, ""); 
  };




  const truncateSummary = (summary, maxLength = 100) => {
    if (summary.length > maxLength) {
      return summary.substring(0, maxLength) + '...';
    }
    return summary;
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    console.log(`Fetching data for: ${selectedOption}`);
  }, [selectedOption]);

  return (
    <div className="clearfix">
      <div className="card card-custom">
        <div className="card-body">
          <h2 className="card-title card-title-custom text-center mb-4">SECTION II</h2>

          <div className="mb-3 parent-container">
            <select
              id="dropdown1"
              className="form-select2"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option value="cars">Cars</option>
              <option value="bikes">Bikes</option>
              <option value="planes">Planes</option>
            </select>
          </div>


          <div className="row mb-3 d-flex justify-content-center">
            {shows && shows.slice(0, 3).map((show, index) => {
              const name = show?.show?.name;
              const summary = show?.show?.summary;
              const clickDivColor = cardColors[index];

              return (
                <div key={index} className="col-md-4 mx-5 mb-2" style={{ height: '300px', width: '270px' }}>
                  <div
                    className="card"
                    style={{
                      borderColor: clickDivColor,
                      borderWidth: '2px',
                      borderRadius: '10px',
                      height: '100%',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="card-body text-center card-content"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 0,
                        height: '100%',
                      }}
                    >
                      <div style={{ flexGrow: 1, padding: '16px' }}>
                        <h5 className="card-title card-title-custom" style={{color: clickDivColor}}>{name}</h5>
                        <p>{cleanSummary(truncateSummary(summary))}</p>
                        <p>Price: 4499/-</p>
                      </div>
                      <div
                        style={{
                          marginTop: 'auto',
                          backgroundColor: clickDivColor,
                          textAlign: 'center',
                          padding: '10px',
                          width: '100%',
                          borderBottomLeftRadius: '8px',
                          borderBottomRightRadius: '8px',
                          color: 'white',
                        }}
                      >
                        <p style={{ margin: 0 }}>Click</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
