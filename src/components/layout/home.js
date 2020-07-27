import React from 'react'
import SidePanel from './sidePanel'
import Example from '../charts/charts'
export default function Home() {
    return (
        <div style={{marginTop:"18px"}}>
          <div className="row ">
            <div className="col-9 ">
                <SidePanel/>
            </div>
            <div className="col-3" >
              <Example/>
              </div>
          </div>
        </div>
        
    )
}
