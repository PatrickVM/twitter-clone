import React from 'react'

const sideBarOption = ({Icons, text}) => {
    return (
        <div>
            <Icons/>
            <h2>{text}</h2>
        </div>
    )
}

export default sideBarOption
