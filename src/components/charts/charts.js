import React, { Component } from 'react';
import info from '../data/data.json'
import {
  PieChart, Pie, Cell,Legend,Tooltip
} from 'recharts';


const COLORS =[ '#03a9f4', '#ae9c46'];


export default class Example extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
     <div className="container chart" style={{position:'relative'}}>
       <h6>Portfolio <span style={{position:"absolute",left:'180px',fontSize:'0.6rem'}}><button>AssetWise</button></span></h6>
       <PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
        
        <Pie
          data={info}
          cx={90}
          cy={90}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="investedAmount"
          nameKey="name"
        >
          {
            info.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip/>
        <Legend verticalAlign="middle" height={46} layout="vertical" align="center"/>
      </PieChart>
      </div>
    );
  }
}
