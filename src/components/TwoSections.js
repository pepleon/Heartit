
import React from 'react';
import './Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Second from './Second';
import Drop from './Drop';

const TwoSections = () => {
  return (
    <div className="container mt-3">

      <div className="row">
        
        <div className="">
          <div className="card card-custom">
            <div className="card-body">
              <h2 className="card-title card-title-custom text-center mb-4">SECTION I</h2>
              <form>
              
                <div className="mb-3 mt-5">
                  <label className="card-content">Question 1</label>
                  <div className='custom-checkbox'>
                    <div className="form-check ">
                      <input className="form-check-input" type="radio" name="question1" value="option1" defaultChecked />
                      <label className="form-check-label card-content">Radio Button Option</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="question1" value="option2" />
                      <label className="form-check-label card-content">Radio Button Option</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="question1" value="option3" />
                      <label className="form-check-label card-content">Radio Button Option</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="question1" value="option4" />
                      <label className="form-check-label card-content">Radio Button Option</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="dropdown1" className="card-content">Dropdown Menu</label>
                  <select id="dropdown1" className="form-select">
                    <option defaultValue>Drop Down Option</option>
                  </select>
                </div>
              
                <div className="mb-3">
                  <label className="card-content">Question 2</label>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="question2" value="option1" defaultChecked />
                      <label className="form-check-label card-content">Checkbox Button Option</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="question2" value="option2" />
                      <label className="form-check-label card-content">Checkbox Button Option</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="question2" value="option3" />
                      <label className="form-check-label card-content">Checkbox Button Option</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="question2" value="option4" />
                      <label className="form-check-label card-content">Checkbox Button Option</label>
                    </div>
                  </div>
                </div>
               
            
               
<div className="d-flex justify-content-center">
  <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#01818C' }}>SUBMIT</button>
</div> 
              
              </form>
            </div>
          </div>
        </div>
       
      
      </div>
<Second/>
<div >
<Drop/>
<Drop/>
</div>

    </div>
  );
};

export default TwoSections;
