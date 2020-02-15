import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import House from '../House/House';


export default class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: []
        }
    }



    componentDidMount(){
    axios.get(`/api/houses`,).then(res => {
        console.log('getHouses',res.data)
           this.setState({
            houses: res.data
        })
    })
}




    render(){

      const mappedData = this.state.houses.map(house => {
          return <House house={house}/>
      })

        return(
            <div>
                <section className='dashboard'>
                    <h1>
                        Dashboard
                    </h1>
                    
                        {mappedData}

                    <Link to ='/wizard'><button>Add New Property</button></Link>

                    <button>Delete</button>
                </section>
            </div>
        )
    }
}
