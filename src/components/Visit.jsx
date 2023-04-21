import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';


export const Visit = ({event}) => {

    return (
        <div>
          <span> {event["id"]}</span>
          <span> {event["date"]}</span>
          <h1> hare3 hare </h1>
        </div>
    )
}