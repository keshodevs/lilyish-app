import React from 'react'

const NavItem = ({url, title}) => {
    return (
        <>
          <li className="nav-item">
            <a className="nav-link" href={url}>
                 {title}
            </a>
         </li>  
        </>
    )
}

export default NavItem
