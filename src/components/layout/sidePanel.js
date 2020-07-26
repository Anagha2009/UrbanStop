import React, { Component } from 'react'
import './side.css';
class SidePanel extends Component {
    render() {
        return (
         <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-2">
                  <div className="card">
                    <div className="row">
                        <div className="col">
                             <i class="fas fa-bars"></i>
                             </div>
                             <div className="col-4">
                             <span id="scrip" >ADDR <br/> <span id="price">$987.1</span></span>
                           </div>
                      
                     <div className="col-6">
                         <p>
                             iShares <br/>by BlackDoc <br/>S&P 500 index<br/> US equity
                         </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3">

                <div className="card">
                        <div className="row">
                        <div className="col-1">
                        <i class="fas fa-database"></i>
                        <i class="fas fa-at"></i>
                        <i class="fas fa-money-bill"></i>
                        </div>
                        <div className="col-6">
                        Quantity<br/>
                        Avg.Cost<br/>
                        Invested Amt
                        </div>
                        <div className="col-4">
                        34346<br/>
                        355366<br/>
                        $63759
                        </div>
                        </div>
                </div>
                </div>
                <div className="col-lg-3">

                <div className="card">
                <div className="row">
                        <div className="col-8">
                        Market Value<br/>
                        %of portfolio value<br/>
                       </div>
                        <div className="col-4">
                        34346<br/>
                        355366<br/>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                        <div className="progress">
                      <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                         </div>
                        </div>
                </div>
                </div>
                <div className="col-lg-3">

                <div className="card">
                <div className="row">
                        <div className="col-8">
                        Unrealized P/L<br/>
                        %of Return<br/>
                       </div>
                        <div className="col-4">
                        34346<br/>
                        355366<br/>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                        <div className="progress">
                      <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
    }
}
export default SidePanel;
