import React from 'react'

function TwoBanner() {
    return (
        <div class="mb-8 grid gap-8 lg:grid-cols-2">
            {/* <!-- Promo Item 1 --> */}
            <div class="group relative bg-gray-900 text-white  overflow-hidden shadow-lg">
                <a
                    href="https://www.amvieyewear.com/collections/heart-shaped-glasses"
                    aria-label="Eyewear Love - More heart styles to adore. Shop now"
                    class="block"
                >
                    <img
                        src="https://img.ebdcdn.com/cms/B2_Desktop_982_660_9c0783a49f.jpg?q=70&im=Resize,width=1473,height=990,aspect=fill&seo=01-13-B1-eyewear-love-collection-d"
                        alt="More heart styles to adore"
                        class="w-full h-auto transition-transform duration-300 hover:scale-105 group-hover:scale-105"
                    />
                    <div class="absolute bottom-0 w-full flex flex-col justify-center items-center p-6">
                        <h3 class="text-2xl md:text-5xl font-bold mb-2">Eyewear Love</h3>
                        <p class="text-sm md:text-lg font-medium mb-4">More heart styles to adore.</p>
                        <button class="px-6 py-1.5 md:px-12 md:py-1.5 text-base border-[1px] border-[#d39d4e] bg-[#d39d4e] text-white font-normal rounded-md shadow-md hover:bg-white/45 hover:text-black hover:border-white">
                            Shop now
                        </button>
                    </div>
                </a>
            </div>

            {/* <!-- Promo Item 2 --> */}
            <div class="group relative bg-gray-900 text-white overflow-hidden shadow-lg">
                <a
                    href="https://www.amvieyewear.com/campaign/brands"
                    aria-label="Premium Brands - Designer eyewear at affordable prices. Shop now"
                    class="block"
                >
                    <img
                        src="https://img.ebdcdn.com/cms/B2_Desktop_982_660_181ba93dd4.jpg?q=70&im=Resize,width=1473,height=990,aspect=fill&seo=07-04-B2-new-DB-d"
                        alt="Designer eyewear at affordable prices"
                        class="w-full h-auto transition-transform duration-300 hover:scale-105 group-hover:scale-105"
                    />
                    <div class="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
                        <h3 class="text-2xl md:text-5xl font-bold mb-2">Premium Brands</h3>
                        <p class="text-sm md:text-lg font-medium mb-4">Designer eyewear at affordable prices.</p>
                        <button class="px-6 py-1.5 md:px-12 md:py-1.5 text-base border-[1px] border-[#d39d4e] bg-[#d39d4e] text-white font-normal rounded-md shadow-md hover:bg-white/45 hover:text-black hover:border-white">
                            Shop now
                        </button>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default TwoBanner