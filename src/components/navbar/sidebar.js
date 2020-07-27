import React,{useState} from 'react'
import '../layout/side.css'
import {connect} from "react-redux";

 const Sidebar= (props)=> {
     const [value,setvalue]=useState('')
     const [result,setResult]=useState([])
     const handleChange=(e)=>{
        let value=e.target.value;
        setvalue(value)
        let data=props.options.filter(data => data.scrip === value)
        setResult(data)
     }

     if(value === ''|| result.length === 0){
        return (
            <div>
            <div id="sidebar">
            <i className="fas fa-arrow-right" id="arrow" onClick={()=>props.click()} ></i>
               <form>
                <select className="custom-select" onChange={(e) => handleChange(e)}>
                    <option >Select...</option>
                    {props.options.map(option=>{
                        return(
                        <option value={option.scrip} key={option.scrip} >{option.scrip}</option>
                        )
                    })}
                </select>
             <div className="form-group">
                <label for="formGroupExampleInput"></label>
               
                <input type="text" className="form-control" id="formGroupExampleInput" value="Price" />
                   
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2"></label>
                <input type="text" className="form-control" id="formGroupExampleInput2" value="Quantity"/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2"></label>
                <input type="text" className="form-control" id="formGroupExampleInput2" value="Invested Amount"/>
            </div>
            <button id="button">Submit</button>
                </form>
            </div>
            </div>
        )
     }else{
        return (
            <div>
            <div id="sidebar">
            <i className="fas fa-arrow-right" id="arrow" onClick={()=>props.click()} ></i>
               <form>
                <select className="custom-select" onChange={(e) => handleChange(e)}>
                    <option >Select...</option>
                    {props.options.map(option=>{
                        return(
                        <option value={option.scrip} key={option.scrip} >{option.scrip}</option>
                        )
                    })}
                </select>
             <div className="form-group">
                <label for="formGroupExampleInput"></label>
               
                <input type="text" className="form-control" id="formGroupExampleInput" value={result[0].price} />
                   
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2"></label>
                <input type="text" className="form-control" id="formGroupExampleInput2" value={result[0].quantity}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2"></label>
                <input type="text" className="form-control" id="formGroupExampleInput2" value={result[0].investedAmount}/>
            </div>
            <button id="button">Submit</button>
                </form>
            </div>
            </div>
        )
     }
  
}
const mapStateToProps =(state)=>{
    return{
        options:state.data,
       
    }
}


export default connect(mapStateToProps)(Sidebar);


 

 
