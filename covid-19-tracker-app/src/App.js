 import React from 'react';

import { Cards, Chart, CountryPicker } from "./components";

import styles from './App.module.css';

import {fecthData} from './api';

import coronaImage  from "./images/image.png"

class App extends React.Component{
    state = {
        data:{},
        country:"",
    }
    async componentDidMount(){

        const fecthedData = await fecthData();

      this.setState({data:fecthedData})
        
    }


    handleCountryChange= async(country)=>{
       // console.log(country)
        const fecthedData = await fecthData(country);
        //fecth the data
        // console.log(fecthedData);

       //set the state
       this.setState({data:fecthedData,country:country})
        
        
    }



    render(){
        const {data,country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
              
             <Cards data={data}/>
             <CountryPicker handleCountryChange={this.handleCountryChange}/>
             <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;