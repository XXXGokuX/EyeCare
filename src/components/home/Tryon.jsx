import React from 'react'

function Tryon() {
    return (
        <div class=" max-w-5xl m-16 flex flex-col lg:flex-row items-center lg:justify-between gap-8 px-6 lg:px-12 mx-auto">
            {/* <!-- Video Section --> */}
            <div class="relative w-full lg:w-1/2">
                <a href="https://www.amvieyewear.com/virtual-try-on" aria-label="A woman wearing glasses showing a virtual try-on feature.">
                    <video
                        autoplay
                        muted
                        loop
                        
                        playsinline
                        preload="metadata"
                        class="w-full h-auto shadow-lg"
                        poster="https://img.ebdcdn.com/cms/hp_virtual_tryon_ab_test_df5dc77a3e.png?q=85&im=Resize,width=600,height=390,aspect=fill"
                    >
                        <source src="https://img.ebdcdn.com/cms/hp_virtual_tryon_ab_test_1ff1384ead.mp4" type="video/mp4" />
                    </video>
                </a>
            </div>

            {/* <!-- Content Section --> */}
            <div class="w-full lg:w-1/2 text-center lg:text-left">
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Virtual Try-On</h3>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Find frames that fit your face with our handy Virtual Try-On feature, then just add your prescription lens!
                </p>
                <a href="https://www.amvieyewear.com/virtual-try-on">
                    <button
                        type="button"
                        class="px-6 py-1.5 rounded-md shadow-md border-[1px] border-black  transition-all hover:border-[#d39d4e] hover:text-[#d39d4e]"
                    >
                        Try frames now!
                    </button>
                </a>
            </div>
        </div>

    )
}

export default Tryon