import React from 'react'

function Footer() {
    return (
        <footer class="bg-gray-900 text-white">
            <div class="container mx-auto px-4 py-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* <!-- Follow Us --> */}
                    <div>
                        <h3 class="text-lg font-bold mb-4">Follow Us</h3>
                        <div class="flex space-x-4">
                            <a href="https://www.instagram.com/eyebuydirect/" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M721.050-1.69h-414.925c-168.653 0-305.818 137.165-305.818 305.818v414.925c0 168.653 137.165 305.818 305.818 305.818h414.925c168.653 0 305.818-137.165 305.818-305.818v-414.925c0-168.653-137.165-305.818-305.818-305.818zM923.597 719.053c0 111.872-90.675 202.547-202.547 202.547h-414.925c-111.872 0-202.547-90.675-202.547-202.547v-414.925c0-111.872 90.675-202.547 202.547-202.547h414.925c111.872 0 202.547 90.675 202.547 202.547v414.925z"></path>
                                    <path d="M513.587 246.067c-146.381 0-265.523 119.091-265.523 265.523s119.091 265.523 265.523 265.523 265.523-119.091 265.523-265.523-119.091-265.523-265.523-265.523zM513.587 673.792c-89.6 0-162.253-72.653-162.253-162.253s72.653-162.253 162.253-162.253c89.6 0 162.253 72.653 162.253 162.253 0 89.651-72.653 162.253-162.253 162.253z"></path>
                                    <path d="M843.264 248.064c0 35.148-28.493 63.642-63.642 63.642s-63.642-28.493-63.642-63.642c0-35.148 28.493-63.642 63.642-63.642s63.642 28.493 63.642 63.642z"></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/EyeBuyDirect/" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.google.com/maps/search/EyeBuyDirect/" target="_blank" rel="noopener noreferrer" title="Find us on Google Business">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.55 4.34a1.83 1.83 0 0 0-1.72-1.23H4.17A1.83 1.83 0 0 0 2.44 4.4L2 6.57h20l-.45-2.23ZM2 8.93v9.57a1.5 1.5 0 0 0 1.5 1.5h5.24v-6.52H5.9a.75.75 0 0 1-.75-.75V8.93H2Zm6.74 4.3v6.52h6.52v-6.52H8.74ZM18.1 8.93h-5.25v6.07a.75.75 0 0 1-.75.75h-2.8v6.52h7.2a1.5 1.5 0 0 0 1.5-1.5V8.93Zm-2.13 2.12a1.59 1.59 0 1 1-1.59 1.59 1.59 1.59 0 0 1 1.59-1.59Z"></path>
                                </svg>
                            </a>


                        </div>
                        <div class="flex md:flex-col gap-4 mt-8">
                            <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.resellerratings.com">
                                <img alt="Reseller Ratings" src="https://img.ebdcdn.com/public/images/links/logo-resellerratings.png" class="w-32 h-auto"/>
                            </a>
                            <a rel="nofollow noopener noreferrer" href="https://bizratesurveys.com/reviews/detail/www.eyebuydirect.com/143709" title="See EyeBuyDirect.com Reviews at Bizrate.com" target="_blank">
                                <img alt="Bizrate" src="https://img.ebdcdn.com/public/images/links/logo-bizrate.svg" class="w-40 h-auto"/>
                            </a>
                            <img alt="Newsweek" src="https://img.ebdcdn.com/public/images/links/newsweek.png" class="w-16 h-auto"/>
                        </div>
                    </div>

                    {/* <!-- Shop --> */}
                    <div>
                        <h3 class="text-lg font-bold mb-4">Shop</h3>
                        <ul class="space-y-2">
                            <li><a href="https://www.eyebuydirect.com/eyeglasses/women" class="hover:underline">Women’s Eyeglasses</a></li>
                            <li><a href="https://www.eyebuydirect.com/eyeglasses/men" class="hover:underline">Men’s Eyeglasses</a></li>
                            <li><a href="https://www.eyebuydirect.com/eyeglasses/cheap" class="hover:underline">Affordable Glasses</a></li>
                            <li><a href="https://www.eyebuydirect.com/eyeglasses" class="hover:underline">All Eyeglasses</a></li>
                            <li><a href="https://www.eyebuydirect.com/prescription-lens/digital-protection" class="hover:underline">Blue Light Glasses</a></li>
                            <li><a href="https://www.eyebuydirect.com/brands" class="hover:underline">All Brands</a></li>
                            <li><a href="https://www.eyebuydirect.com/promotions" class="hover:underline">Promotions</a></li>
                            <li><a href="https://www.eyebuydirect.com/discount-coupons" class="hover:underline">Discount Coupons</a></li>
                        </ul>
                    </div>

                    {/* <!-- Tips & Guides --> */}
                    <div>
                        <h3 class="text-lg font-bold mb-4">Tips & Guides</h3>
                        <ul class="space-y-2">
               
                            <li><a href="https://www.eyebuydirect.com/guides/frames-and-face-shapes" class="hover:underline">Frames for Your Face Shape</a></li>
                            <li><a href="https://www.eyebuydirect.com/guides/eye-care-tips" class="hover:underline">Eye Care Tips</a></li>
                            <li><a href="https://www.eyebuydirect.com/faq" class="hover:underline">Help & FAQ</a></li>
                            <li><a href="https://www.eyebuydirect.com/guides/pupillary-distance" class="hover:underline">Pupillary Distance (PD)</a></li>
                        </ul>
                    </div>

                    {/* <!-- Our Programs --> */}
                    <div>
                        {/* <h3 class="text-lg font-bold mb-4">Our Programs</h3>
                        <ul class="space-y-2">
                            <li><a href="https://www.eyebuydirect.com/referral-program" class="hover:underline">Referral Program</a></li>
                            <li><a href="https://www.eyebuydirect.com/loyalty-program" class="hover:underline">Loyalty Program</a></li>
                            <li><a href="https://www.eyebuydirect.com/affiliate-program" class="hover:underline">Affiliate Program</a></li>
                            <li><a href="https://www.eyebuydirect.com/student-discount" class="hover:underline">Student Discount</a></li>
                        </ul> */}
                        <h3 class="text-lg font-bold mb-4">Our Brands</h3>
                        <ul class="space-y-2">
                            <li><a href="https://www.framesdirect.com/" class="hover:underline">AMVI Eyeware</a></li>
                            <li><a href="https://www.readers.com/" class="hover:underline">HITHVI Eyeware</a></li>
                            <li><a href="https://www.readers.com/" class="hover:underline">HITSAY Eyeware</a></li>

                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p class="text-sm">© 2010-2025 amvieyewear.com | Crafted by Techvision Digital</p>
                    <ul class="flex justify-center space-x-4 mt-2 md:flex-row flex-col">
                        <li><a href="https://www.eyebuydirect.com/privacy-policy" class="hover:underline text-sm">Privacy Policy</a></li>
                        <li><a href="https://www.eyebuydirect.com/terms-and-conditions" class="hover:underline text-sm">Terms and Conditions of Use</a></li>
                        <li><a href="https://www.eyebuydirect.com/cookie-policy" class="hover:underline text-sm">Cookie Notice</a></li>
                        <li><a href="https://www.eyebuydirect.com/consumer-health-data-policy" class="hover:underline text-sm">Consumer Health Data Privacy Policy</a></li>
                        <li><a href="https://www.eyebuydirect.com/privacy-choices" class="hover:underline text-sm">Your Privacy Choices</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer
