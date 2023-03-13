import './styles.css'
import React from 'react'

export default function Icon(props) {
    return (
        <a href={props.href}>
            <i className={`fa fa-${props.icon}`}></i> {props.content}
        </a>
    )
}