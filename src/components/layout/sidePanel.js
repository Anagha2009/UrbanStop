import React, { Component } from 'react';
import './side.css';
import {connect} from 'react-redux';
class SidePanel extends Component {
      averageCalc=(x,y)=>{
      let avg = Number(x)/Number(y);
      return avg.toFixed(1);
       }
      marketCalc=(x,y)=>{
        let value = Number(x)*Number(y);
        return value;
        }
      profitLossCalc=(x,y)=>{
            let pl=x - Number(y);
            return pl.toFixed(0);
        }
      returnCalc=(x,y)=>{
          let ret= (x*100)/y;
                return ret.toFixed(1)
            }
      render() {
        const {data} =this.props;
        return (
            <div>
            {data && data.map(info=>{
                const marketValue= this.marketCalc(info.price,info.quantity)
                const profitloss = this.profitLossCalc(marketValue,info.investedAmount)
                const returnValue=this.returnCalc(profitloss,info.investedAmount)

                return(
                    <div key={info.scrip}>
                    <div className="row">
                        <div className="col-lg-2">
                         <div className="card">
                           <div className="row">
                               <div className="col-1  style-col">
                                    <i className="fas fa-bars" style={{marginTop:"30px",marginLeft:"20px"}}></i>
                                    </div>
                                    <div className="col-4 style-col" style={{marginTop:'15px'}}>
                                         <span id="scrip" >{info.scrip} </span><br/> <span id="price">${info.price}</span>
                                  </div>
                             
                            <div className="col-6 style-col">
                                <p>
                                    <span id="span1">iShares</span> <br/><span id="span2" className="text-center">by BlackDoc</span> <br/><span id="span3">S&P 500 index</span><br/><span id="span4">US equity</span>
                                </p>
                           </div>
                           </div>
                       </div>
                       </div>
                       <div className="col-lg-3">
       
                       <div className="card">
                               <div className="row" style={{paddingTop:'8px'}}>
                               <div className="col-1" style={{textAlign:'left'}}>
                               <i className="fas fa-database"></i>
                               <i className="fas fa-at"></i>
                               <i className="fas fa-money-bill"></i>
                               </div>
                               <div className="col-6"style={{textAlign:'left'}}>
                               Quantity<br/>
                               Avg.Cost<br/>
                               Invested Amt
                               </div>
                               <div className="col-4" style={{textAlign:'right'}}>
                               <strong>{info.quantity}</strong><br/>
                               <strong>${this.averageCalc(info.investedAmount,info.quantity)}</strong><br/>
                               <strong style={{whiteSpace:"nowrap"}}>${info.investedAmount}</strong>
                               </div>
                               </div>
                       </div>
                       </div>
                       <div className="col-lg-3">
       
                       <div className="card">
                       <div className="row" style={{paddingTop:'4px'}}>
                               <div className="col-8" style={{textAlign:'left'}}>
                               <strong>Market Value</strong><br/>
                               % of portfolio value<br/>
                              </div>
                               <div className="col-4" style={{textAlign:'right'}}>
                               <strong>${marketValue}</strong><br/>
                               <strong>{info.portfolio}%</strong><br/>
                               </div>
                               </div>
                               <div className="row">
                                   <div className="col">
                               <div className="progress progress1">
                               <div className="progress-bar bg-success" role="progressbar" style={{width:info.portfolio}} aria-valuenow={info.portfolio} aria-valuemin="0" aria-valuemax="100"></div>
                             
                                </div>
                                </div>
                               </div>
                       </div>
                       </div>
                       <div className="col-lg-3">
       
                       <div className="card">
                       <div className="row" style={{paddingTop:'4px'}}>
                               <div className="col-8" style={{textAlign:'left'}}>
                               <strong>Unrealized P/L</strong><br/>
                               % of Return<br/>
                              </div>
                               <div className="col-4" style={{textAlign:'right'}}>
                               <strong>{profitloss}</strong><br/>
                               <strong>{returnValue}%</strong><br/>
                               </div>
                               </div>
                                
                               <div className="row">
                                   {/* if negative values appear*/}
                                   <div className="col left-progress">                               
                                   <div className="progress justify-content-end">
                                        <div className="progress-ba" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                   </div>

                                    <div className="col right-progress">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: marketValue}} aria-valuenow={marketValue} aria-valuemin="0" aria-valuemax="100"></div>
                                     </div>

                                    </div>
                                    
                               </div>
                               
                     
                       </div>
                       </div>
                       <div className="col-lg-1">
       
                       <div className="card">
                           <div className="card5">
                       <button type="button" >BUY</button>
                       <button type="button" >SELL</button>
                       </div>
                       </div>
                       </div>
                   </div>
                   </div>
       
                )
            })}
            </div>
        
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        data:state.data
    }
} 
export default connect(mapStateToProps)(SidePanel);
