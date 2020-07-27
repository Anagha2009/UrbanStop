import React from 'react'
import '../layout/side.css'
import {connect} from "react-redux";
import { fillData } from '../store/reducers/actions/dataActions';
 const Sidebar= (props)=> {
    return (
        <div>
        <div id="sidebar">
        <i className="fas fa-arrow-right" id="arrow" onClick={()=>props.click()} ></i>
           <form>
            <select className="custom-select">
                <option selected>Select...</option>
                {props.options.map(option=>{
                    return(
                    <option name={option.scrip} onClick={()=>props.fillData(option.scrip)}>{option.scrip}</option>
                    )
                })}
            </select>
         <div className="form-group">
            <label for="formGroupExampleInput"></label>
           
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Price" />
               
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
const mapStateToProps =(state)=>{
    return{
        options:state.data,
       
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
       fillData:(data)=>dispatch(fillData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);


 

 
