import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
  <div className="footer-content">
    <ul className="footer-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Info</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Bookings</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>
    <ul className="footer-links">
      <li><a href="#">Style Guide</a></li>
      <li><a href="#">Licenses</a></li>
      <li><a href="#">Instructions</a></li>
      <li><a href="#">Changelog</a></li>
      <li><a href="#">Password</a></li>
      <li><a href="#">404</a></li>
    </ul>
    <p className="footer-copy">&copy; Latte Cafe 2024. Powered by Nextflow.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer