import React, { Fragment } from 'react'
import '../menulist/Menulink.scss'

const Menulist = ({ Icon, text }) => {
  return (
    <Fragment>
        <div className="menulink">
            {Icon}
            <span className="menulinktext">{text}</span>
            <span className="menulinktextname">{text === "Logout" && "(Femi)"}</span>
        </div>
    </Fragment>
  )
}

export default Menulist
