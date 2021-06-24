import React from 'react'
import NavItem from './NavItem'
import Icon from './Logo'
import TabItem from '../NavTabs/TabItem'
import { Data }  from '../NavTabs/TabData'

const NavBar = () => {
    
    const items = [
        {
          id: 1,
          url: '/',
          title: 'Shop',
        },
        {
          id: 2,
          url: '/blog',
          title: 'Blog',
        },
        {
          id: 3,
          url: '/about us',
          title: 'About Us',
        },
        {
          id: 4,
          url: '/contact us',
          title: 'Contact Us',
        },
    ]
    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ">
        <a class="navbar-brand" href="/">{Icon}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        {items.map((item) => (
           <NavItem key={item.id} url={item.url} title={item.title} />
        )    
        )}
        </li>
      </ul>
    </div>
  </div>
</nav>
     <div className="mt-3">
         {Data.map((tab)=>(
             <TabItem key={tab.id} url={tab.url} title={tab.title}/>
         ))}
     </div>
</>
    )
}

export default NavBar
