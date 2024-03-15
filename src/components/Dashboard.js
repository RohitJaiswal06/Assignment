import React from 'react'
import './Dashboard.css'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container'>
      {/* sidebar */}
      <div className='sidebar'>
        
            <div className='sidebar-elements'>
            <Link to='/products'>
                <h2 style={{color:'white'}}>Products</h2>
            </Link>
            </div>
        
        <div className='sidebar-elements'>
            <Link to='/orders'>
                <h2 style={{color:'white'}}>Orders</h2>
            </Link>
        </div>
      </div>
      {/* main  */}
      <div className='main'>
        <div className='main-heading'>
            <h1>ERP SYSTEM</h1>
        </div>
        <div className='main-element'>
            <div className='main-card'>
            <Link to='/products'>
                <h4 style={{textAlign:"center",color:"white"}}>
                        Total Products
                </h4>
            </Link>
                <h1 style={{marginLeft:"10%"}}>2000 
                <span style={{fontSize:"20px",marginLeft:"7%",color:"rgba(56,169,97,1)"}}>100↑ products</span>
                </h1>
                
            </div>
            <div className='main-card'>
            <Link to='/orders'>
                <h4 style={{textAlign:"center",color:"white"}}>
                        Active Orders
                </h4>
            </Link>
                <h1 style={{marginLeft:"10%"}}>4000
                <span style={{fontSize:"20px",marginLeft:"7%",color:"red"}}>400↓ orders</span>
                </h1>
                
            </div>
            <div className='main-card'>
                <h4 style={{textAlign:"center"}}>Reports</h4>
                <h1 style={{marginLeft:"10%"}}>20K
                <span style={{fontSize:"20px",marginLeft:"7%",color:"yellow"}}>1000$↑ profit</span>
                </h1>
            </div>
        </div>
        <div className='calender'>
            <h2 style={{marginLeft:"3%"}}>Calender</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
