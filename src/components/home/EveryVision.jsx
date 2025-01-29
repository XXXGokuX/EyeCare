import React from 'react'

function EveryVision() {
    return (
        <div class="m-12 font-outfit">
            <div class="flex items-center justify-center">
                <span class="relative max-w-full">
                    <span class="block w-full h-auto">
                        <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27395%27%20height=%2744%27/%3e"
                            class="block max-w-full h-auto"
                        />
                    </span>
                    <img
                        alt="Every Vision of You"
                        src="https://img.ebdcdn.com/cms/vision_c2dc660ed2.svg"
                        class="absolute inset-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                    />
                </span>
            </div>
            <div class="text-center mt-8">
                <h1 class="text-2xl font-bold leading-snug text-black">
                    It’s always a good day to buy glasses online.
                </h1>
                <p class="text-lg leading-relaxed text-black mt-5 mb-10 font-normal">
                    Express your every vision with affordable&nbsp;
                    <a href="/eyeglasses" class="underline text-[#d39d4e]">eyeglasses</a> and prescription
                    <a href="/sunglasses" class="underline text-[#d39d4e]">sunglasses</a>.<br />
                    Shop thousands of glasses with
                    <a href="/virtual-try-on" class=" font-bold font-serif mx-1">AMVI</a>,
                    <a href="/fast-shipping-service" class=" font-bold font-serif mx-1">HITHVI</a>, and 
                    <a href="/fast-shipping-service" class=" font-bold font-serif mx-1">HITSAY</a>
                </p>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                <a href="https://www.eyebuydirect.com/eyeglasses">
                    <button class="px-6 py-2 text-sm font-normal border-[1px] border-black rounded hover:text-[#d39d4e] hover:border-[#d39d4e]">Shop eyeglasses</button>
                </a>
                <a href="https://www.eyebuydirect.com/sunglasses">
                    <button class="px-6 py-2 text-sm font-normal border-[1px] border-black rounded hover:text-[#d39d4e] hover:border-[#d39d4e]">Shop sunglasses</button>
                </a>
            </div>
        </div>

    )
}

export default EveryVision