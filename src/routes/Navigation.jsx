import AboutUs from '@/screens/About'
import Contact from '@/screens/Contact'
import FAQ from '@/screens/Faq'
import Home from '@/screens/Home'
import React from 'react'
import { Route, Routes } from 'react-router'

function Navigation() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="contact" element={<Contact/>} />
                <Route path="faq" element={<FAQ/>} />
            </Routes>
        </>
    )
}

export default Navigation
