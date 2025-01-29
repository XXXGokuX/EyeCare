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
                            <a href="https://twitter.com/eyebuydirect/" target="_blank" rel="noopener noreferrer" title="Follow us on Twitter">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M908.39 473.037c57.293-4.71 96.154-30.771 111.104-66.099-20.685 12.698-84.838 26.522-120.269 13.363-1.741-8.346-3.686-16.23-5.581-23.398-26.982-99.123-119.45-178.995-216.32-169.37 7.834-3.174 15.77-6.093 23.706-8.755 10.65-3.84 73.216-13.978 63.386-36.096-8.294-19.405-84.736 14.694-99.123 19.149 18.995-7.168 50.432-19.456 53.76-41.267-29.082 3.994-57.651 17.766-79.77 37.734 7.987-8.602 14.029-19.046 15.309-30.31-77.619 49.613-122.982 149.555-159.642 246.528-28.774-27.853-54.323-49.818-77.21-62.054-64.256-34.458-141.107-70.451-261.734-115.2-3.738 39.936 19.712 92.979 87.245 128.307-14.643-1.997-41.37 2.406-62.771 7.526 8.704 45.722 37.171 83.405 114.278 101.632-35.277 2.304-53.453 10.291-69.99 27.597 16.026 31.795 55.194 69.222 125.594 61.542-78.285 33.741-31.898 96.256 31.795 86.938-108.698 112.23-280.013 103.987-378.419 10.138 256.87 350.054 815.258 207.002 898.509-130.15 62.362 0.512 99.021-21.606 121.702-45.978-35.891 6.042-87.91-0.256-115.558-11.776z"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/EyeBuyDirect/" target="_blank" rel="noopener noreferrer" title="Follow us on YouTube">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M896 138.24h-768c-71.68 0-128 56.32-128 128v512c0 66.56 56.32 128 128 128h773.12c66.56 0 128-56.32 128-128v-512c-5.12-71.68-61.44-128-133.12-128zM665.6 547.84l-235.52 163.84c-15.36 10.24-40.96 0-40.96-20.48v-327.68c0-20.48 20.48-30.72 40.96-20.48l235.52 163.84c15.36 10.24 15.36 30.72 0 40.96z"></path>
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@eyebuydirect" target="_blank" rel="noopener noreferrer" title="Follow us on TikTok">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.625 9.04613C18.7577 9.04613 16.8919 8.48787 15.3752 7.37V14.9641C15.3752 18.7619 12.342 22 8.37375 22C4.40825 22 1.375 18.8733 1.375 14.9641C1.375 11.0564 4.40825 7.92825 8.37375 7.92825C8.72438 7.92825 9.19187 7.92825 9.5425 8.041V12.0615C9.19187 11.9488 8.84125 11.8374 8.37375 11.8374C6.62475 11.8374 5.34188 13.2894 5.34188 14.8527C5.34188 16.6402 6.74163 17.8681 8.37512 17.8681C10.0086 17.8681 11.4084 16.4161 11.4084 14.8527V0H15.2584C15.2584 2.904 17.5917 5.24837 20.3913 5.24837L20.625 9.0475" fill="white"></path>
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
                        <h3 class="text-lg font-bold mt-8 mb-4">Our Brands</h3>
                        <ul class="space-y-2">
                            <li><a href="https://www.framesdirect.com/" class="hover:underline">AMVI</a></li>
                            <li><a href="https://www.readers.com/" class="hover:underline">HITHVI</a></li>
                            <li><a href="https://www.readers.com/" class="hover:underline">HITSAY</a></li>

                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p class="text-sm">© 2010-2025 eyebuydirect.com | Crafted by Techvision Digital</p>
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