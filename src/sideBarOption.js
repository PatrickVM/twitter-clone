import React from 'react'
import './SidebarOption.css'

const sidebarOption = ({Icons, text}) => {
    return (
        <div className='sidebarOption'>
            <Icons/>
            <h2>{text}</h2>
        </div>
    )
}

export default sidebarOption
