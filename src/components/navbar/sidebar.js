import React from 'react'
import '../layout/side.css'
 const Sidebar= (props)=> {
    return (
        <div>
        <div id="sidebar">
        <i className="fas fa-arrow-right" id="arrow" onClick={()=>props.click()} ></i>
           <form>
            <select className="custom-select">
                <option selected>Select...</option>
                <option value="1">ADDR</option>
                <option value="2">MFEM</option>
                <option value="3">JPEM</option>
                <option value="1">KEMQ</option>
                <option value="1">KLDW</option>
                <option value="1">KOIN</option>
                
            </select>
         <div className="form-group">
            <label for="formGroupExampleInput"></label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Price"/>
        </div>
        <div className="form-group">
            <label for="formGroupExampleInput2"></label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Quantity"/>
        </div>
        <div className="form-group">
            <label for="formGroupExampleInput2"></label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Invested Amount"/>
        </div>
        <button id="button">Submit</button>
            </form>
        </div>
        </div>
    )
}
export default Sidebar;


 

 
