import React from 'react'

export default function About(props) {

    console.log('About props ', props)
    return (
        <div>
            In About page {props.name}
        </div>
    )
}
