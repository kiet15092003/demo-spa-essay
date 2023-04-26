import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import FooterImg from "../images/footer.jpg"
import BestSellerOne from "../images/bestSeller1.jpg"
import BestSellerTwo from "../images/bestSeller2.jpg"
import '../styles/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row d-flex">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="footer-image">
                            <p className="footer-title">About Us</p>
                            <img src={FooterImg}></img>
                            <p>
                                COPYRIGHT © Single Page Application
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <p className="footer-title">Information</p>
                        <ul>
                            <li><a href="#"> New Products </a></li>
                            <li><a href="#"> Menu </a></li>
                            <li><a href="#"> Our Blog </a></li>
                            <li><a href="#"> About Our Shop </a></li>
                            <li><a href="#"> Our Evaluate </a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <p className="footer-title">Top Sellers</p>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-4 imagesTopSeller'><img src={BestSellerOne}></img></div>
                                <div className='col-4 imagesTopSeller'><img src={BestSellerTwo}></img></div>
                                <div className='col-4 imagesTopSeller'><img src={BestSellerOne}></img></div>
                            </div>
                            <div className='row mt-3 mb-3'>
                                <div className='col-4 imagesTopSeller'><img src={BestSellerOne}></img></div>
                                <div className='col-4 imagesTopSeller'><img src={BestSellerTwo}></img></div>
                                <div className='col-4 imagesTopSeller'><img src={BestSellerOne}></img></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <p className="footer-title">Contact</p>
                        <div>
                            <div>
                                <a href="#" className="btn-footer">
                                    <FaGoogle/>
                                    spa-demo.vn
                                </a>
                            </div>
                            <div>
                                <a href="#" className="btn-footer">
                                    <FaPhone/> 0123456789
                                </a>
                            </div>
                            <div className="footer-icon">
                                <FaFacebook size='30px'/> <FaInstagram size='30px'/> <FaTwitter size='30px'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer