import React, {useState} from 'react'
import Header from '../header/header'
import Input from '../components/input'
import Button from '../components/button'
import { NavLink } from 'react-router-dom'
import Footer from '../components/footer'
import PaginationPathA from './paginationPathA'
import AddDevice from '../pagination/add-device'
import {ReactComponent as Bin} from '../images/bin.svg'


const PaginationA3 = () => {

    const [ data, setData ] = useState([])

    const [ appliance, setAppliance ] = useState('')
    const [ watt, setWatt ] = useState('')
    const [ quantity, setQuantity ] = useState('')
    const [ hours, setHours ] = useState('')
    const [ remove, setRemove ] = useState(<Bin/>)
    const [ id, setId ] = useState('')

    
    const check = (e) => {
        // e.preventDefault()
        const dataObject = {
            appliance: appliance,
            hours: hours,
            quantity: quantity,
            watt: watt,
            remove: remove,
            id: data.length ,
            removeOnClick: handleDelete,
            // removeOnClick: setRemove()
        }

        setData(data.concat(dataObject))
        setAppliance("")
        setWatt("")
        setQuantity("")
        setHours("")
    }
    console.log('data is', data)

    const handleDelete = () => {

        // let newData = [...data]
        // console.log('new data is', newData)
        // // newData.splice(id, 1);
        // console.log(data.length)
        // setData( newData )
    }


    const handleAppliancesChange = (e) => {
        setAppliance(e.target.value)
    }

    const handleWattChange = (e) => {
        setWatt(e.target.value)
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleHoursChange = (e) => {
        setHours(e.target.value)
    }

    return(
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathA/>
                </div>

                <p className="appliance-header">Add your Residential Appliances here</p>


                <div className="paginationA1-details add-device-display residential-appliances">
                    <div>

                        <form className=" residential-appliances" >
                            <div>
                                <label>Appliances</label>
                                <Input  type="text" 
                                    value={appliance}
                                    onchange={handleAppliancesChange}
                                    name={appliance}
                                    placeholder="Electric Cooker"
                                />
                            </div>
                            <div className="power-quantity">
                                <div>
                                    <label>Power rating (Watts)</label>
                                    <Input  type="number" 
                                        value={watt}
                                        onchange={handleWattChange}
                                        name={watt}
                                    />
                                </div>
                                <div>
                                    <label>Quantity</label>
                                    <Input type="number" 
                                        value={quantity}
                                        onchange={handleQuantityChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Hours on per day</label>
                                <Input type="number" 
                                    value={hours}
                                    onchange={handleHoursChange}
                                />
                            </div>
                            <div className="add-device" onClick={check}>+ Add more appliance</div>
                            <div className="add-device-mobile">
                                <p className="remove" >{data.length > 0 ? 'Remove all' : ''}</p>
                                { data.map( data => 
                                    <AddDevice data={data} />
                                )}
                            </div>
                            <div>
                                <NavLink to="/paginationA4"><Button text="Calculate"/></NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="add-devices">
                        <p className="remove" >{data.length > 0 ? 'Remove all' : console.log('it isnt')}</p>
                        { data.map( data => 
                            <AddDevice data={data} />
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationA3