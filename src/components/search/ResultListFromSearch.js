import React from 'react';
import { useSelector } from 'react-redux';

const ResultListFromSearch = () => {
    const { restaurant } = useSelector(state=> ({...state}))
    const displayColumn=['Name', 'Address', 'Phone Number', 'Distance']
    console.log("restaurantList: "+JSON.stringify(restaurant))
    switch(restaurant){
        case null:
            return(<></>);
        default:
            if(restaurant.length<=0){
                return <div>No results</div>
            } else {
                return (
                    <div style={{marginTop: '30px'}}>
                        <label style={{fontSize: '16px'}}>Result: </label>
                        <table>
                            <thead>
                            <tr>
                                {displayColumn.map((item)=>{
                                    return <th key={item}>{item}</th>
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {restaurant.map(res=>{
                                return (
                                    <tr key={res.id}>
                                        <td>{res.name}</td>
                                        <td>{res.address} </td>
                                        <td>{res.phoneNumber} </td>
                                        <td>{res.distance} {res.distance<1?'mile':'miles'}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                )
            }
    }
}

export default ResultListFromSearch