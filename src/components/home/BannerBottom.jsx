import React from 'react'

function BannerBottom() {
    return (
        <div class="flex flex-col md:flex-row items-center justify-around bg-gray-100 p-4 mb-12 space-y-4 md:space-y-0">
            {/* <!-- Value Proposition 1 --> */}
            <div class="flex items-center space-x-2">
                <img
                    src="https://img.ebdcdn.com/cms/14d_free_return_937e5ffc72.svg"
                    alt="14-Day Free Returns"
                    class="w-6 h-6"
                />
                <span class="text-gray-600 text-sm">14-Day Free Returns</span>
            </div>

            <div class="w-px h-6 bg-gray-300 hidden md:block"></div>

            {/* <!-- Value Proposition 2 --> */}
            <div class="flex items-center space-x-2">
                <img
                    src="https://img.ebdcdn.com/cms/7d_customer_service_34a04a57ed.svg"
                    alt="24/7 Customer Service"
                    class="w-6 h-6"
                />
                <span class="text-gray-600 text-sm">24/7 Customer Service</span>
            </div>

            <div class="w-px h-6 bg-gray-300 hidden md:block"></div>

            {/* <!-- Value Proposition 3 --> */}
            <div class="flex items-center space-x-2">
                <img
                    src="https://img.ebdcdn.com/cms/hsa_accepted_910c4cb4c8.svg"
                    alt="Vision Insurance"
                    class="w-6 h-6"
                />
                <span class="text-gray-600 text-sm">Vision Insurance</span>
            </div>

            <div class="w-px h-6 bg-gray-300 hidden md:block"></div>

            {/* <!-- Value Proposition 4 --> */}
            <div class="flex items-center space-x-2">
                <img
                    src="https://img.ebdcdn.com/cms/sitejabber_logo_743cadadce.svg"
                    alt="216k+ Reviews"
                    class="w-24"
                />
                <img
                    src="https://img.ebdcdn.com/cms/sitejabber_stars_0b6f45f6b0.svg"
                    alt="216k+ Reviews Stars"
                    class="w-20"
                />
                <span class="text-gray-600 font-semibold text-sm">216k+ Reviews</span>
            </div>
        </div>
    )
}

export default BannerBottom