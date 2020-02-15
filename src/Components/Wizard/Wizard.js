import React,{Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Wizard extends Component {
    constructor(){
        super();
            this.state = {
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: 0
            }
    }


    handleChange = (e) => {
        console.log('handleChange', e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postHouse = (house) => {
        axios.post(`/api/houses`, house).then(res => {
            console.log('postHouse', house)
            this.setState({
                houses: res.data
            })
        })
    }

    addHouse = () => {
        const {name, address, city, state, zipcode} = this.state

        let newHouse = {
            name,
            address,
            city,
            state,
            zipcode,
        }
        this.postHouse(newHouse)

        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        })

    }


    render(){

            const{name, address, city, state, zipcode} = this.state
        return(
            <div>
                <section className='wizard'>
                    <h1> Add New Listing </h1>
                    <h3>Name: </h3>
                    <input name='name' value={name} onChange={this.handleChange}/>
                    <h3>Address: </h3>
                    <input name='address' value={address} onChange={this.handleChange}/>
                    <h3>City: </h3>
                    <input name='city' value={city} onChange={this.handleChange}/>
                    <h3>State:: </h3>
                    <input name='state' value={state} onChange={this.handleChange}/>
                    <h3>Zipcode: </h3>
                    <input name='zipcode' value={zipcode} onChange={this.handleChange}/>

                    <House />
                    <Link to ='/'><button>Cancel</button></Link>
                    <button onClick={this.addHouse}>Complete</button>
                    <button>Next Step</button>
                </section>
                
            </div>
        )
    }
}