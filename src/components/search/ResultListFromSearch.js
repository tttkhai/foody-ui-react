import React from 'react';
import { useSelector } from 'react-redux';

const ResultListFromSearch = () => {
    const { restaurant } = useSelector(state=> ({...state}))
    console.log("restaurantList: "+JSON.stringify(restaurant))
    switch({restaurant}){
        case null:
            return ;
        case false:
            return <div>No results</div>
        default:
            return (
            <div>
                {restaurant.map(res=>{
                    return (<div key={res.id}>res.name </div>)
                })}
            </div>
            )
    }
}

export default ResultListFromSearch