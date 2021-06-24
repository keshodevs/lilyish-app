import React from 'react'

const TabItem = ({url, title}) => {
    return (
        <div>
            <ul class="nav container row">
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href={url}>{title}</a>
            </li>
         </ul>
        </div>
    )
}

export default TabItem
