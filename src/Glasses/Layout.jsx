import React, { Component } from 'react'
import dataGlasses from '../data/dataGlasses.json'

export default class Layout extends Component {
    state = {
        glasses: dataGlasses
    }
    renderlist = () => {
        return dataGlasses.map((Glasses, i) => { 
            return <img onClick={()=> {this.changeGlasses(Glasses)}} src={Glasses.url} alt="" className="col-2" style={{ width: '110px', cursor: 'pointer',  backgroundColor:'white', width:'180px', padding:'18px'}} key={i}  />
         })
    }
    changeGlasses = (newGla) => {
        this.setState({
            glasses:newGla
            
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: "url(./glassesImage/background.jpg)", backgroundSize: "cover", height: "100%"}}>
                <div style={{backgroundColor: "#00000033", height: "100vh"}}>
                    <h3 style={{ color: "#f0f8ff" }} className="text-center text-light p-5">
                        TRY GLASSES APP ONLINE
                    </h3>
                    <div className='container'>
                        <div className='row text-center'>
                            <div className="col-3 " >
                                <img src="./glassesImage/model.jpg" alt="model.jpg" />
                               
                            </div>
                            <div className="col-3 " >
                                <div >
                                    <img  src="./glassesImage/model.jpg" alt="model.jpg" />
                                </div>
                              
                                <img src={this.state.glasses.url} alt="" />
                                <div >
                                    
                                    <span  style={{background: '#ce781c'}}>{this.state.glasses.name}</span><br/> <span style={{background: '#ce781c'}}>{this.state.glasses.price}</span><br/>
                                    <span  style={{background: '#ce781c'}}>{this.state.glasses.desc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                        {this.renderlist()}
                    </div>
                </div>

            </div>
        )
    }
}
