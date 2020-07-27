import React,{Component} from 'react'
import Sidebar from './sidebar'
import logo from './assets/logoub.jpg'
 class Navbar extends Component {
     state={
         isToggle:false
     }
     handleClick=()=>{
         this.setState({
             isToggle:!this.state.isToggle
         })
     }
    render(){
    return (
        <div>
         <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1"><img src={logo} alt="logo" style={{height:'35px'}}/></span>
            <i className="fas fa-bars" onClick={this.handleClick}></i>
            
         </nav> 
         {this.state.isToggle 
            ? <Sidebar click={this.handleClick}/>
            : ''}
       </div>
    )
    }
}
export default Navbar
