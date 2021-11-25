import React from 'react'
import Announcements from './Announcements'
import Footer from './Footer'
import Navbar from './Navbar'
import Newsletter from './Newsletter'

const Layout = ({children}) => {
    return (
        <div>
            <Announcements />
           <Navbar /> 
           {children}
           <Newsletter />
           <Footer />
        </div>
    )
}

export default Layout
