import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';
import { Visit } from "./Visit";


export const Timeline = ({data}) => {
    return (
        <div>
            <h1>Timeline here ....11</h1>
           { data.map(item => <Visit key={item.id} event={item} />) }
        </div>
    )
}