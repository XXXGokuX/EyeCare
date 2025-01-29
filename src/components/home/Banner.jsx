import React from 'react'
import { Link } from 'react-router';
function Banner() {
    return (
        <>
            <div id="hero-banner" class="relative mb-0 font-[Outfit]">
                <a
                    href="https://www.eyebuydirect.com/campaign/promotion?coupon=refresh"
                    target="_self"
                    class="block"
                >
                    <div class="relative bg-white">
                        <picture>
                            <source
                                media="(min-width: 1025px)"
                                srcset="https://img.ebdcdn.com/cms/H1_Desktop_1600_520_us_830c3cdf96.jpg?q=70&im=Resize,width=2400,height=780,aspect=fill&seo=01-20-30-off-$100+-d"

                            />
                            <source
                                media="(min-width: 768px)"
                                srcset="https://img.ebdcdn.com/cms/H1_Desktop_1600_520_us_830c3cdf96.jpg?q=70&im=Resize,width=1536,height=499,aspect=fill&seo=01-20-30-off-$100+-d"
                            />
                            <source
                                media="(min-width: 10px)"
                                srcset="https://img.ebdcdn.com/cms/H1_Full_Mobile_768_768_us_92d9ff3bcd.jpg?q=70&im=Resize,width=768,height=768,aspect=fill&seo=01-20-30-off-$100+-m"
                            />
                            <img
                                src="https://img.ebdcdn.com/cms/H1_Desktop_1600_520_us_830c3cdf96.jpg?q=70&im=Resize,width=2400,height=780,aspect=fill&seo=01-20-30-off-$100+-d"
                                alt="30% Off Orders $100+"
                                width="1600"
                                height="520"
                                class="w-full "
                                fetchpriority="high"
                            />
                        </picture>
                    </div>
                    <div
                        class="absolute left-6 bottom-6 md:bottom-1/4 md:left-1/2 text-center md:max-w-[55.56%] mx-auto bg-transparent "
                    >
                        <div class="text-[#036B68] font-bold">
                            <p class="text-[16px] md:text-[17px] leading-[1.2] -mt-[7.7%]">RESOLUTION REFRESH</p>
                            <p class="text-[32px] md:text-[53px] leading-[1.3] mt-2">
                                <strong>30% OFF</strong>
                            </p>
                            <p class="text-[32px] md:text-[53px] leading-[1.2] -mt-2 mb-1">
                                <strong className=' font-semibold '>ORDERS Rs. 10000+</strong>
                            </p>
                            <p class="text-[24px] md:text-[32px] leading-[1.4] mt-2">CODE: REFRESH</p>
                        </div>
                        <Link to="/contact">
                            <button
                                class="mt-2 mb-0 px-12 py-2 bg-[#D39D4E] text-white font-medium rounded"
                            >
                                Shop now
                            </button>
                        </Link>
                    </div>
                    <p
                        class="absolute bottom-0 right-0 p-2 text-right text-[12px] text-black font-normal"
                    >
                        Exclusions apply
                    </p>
                </a>
            </div>

        </>
    )
}

export default Banner;