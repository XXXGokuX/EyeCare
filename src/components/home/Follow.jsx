import React from 'react'

function Follow() {
    return (
        <div class="m-12 flex flex-col md:flex-row md:gap-12 gap-4">

            <div class="title_and_follow flex flex-col justify-center">
                {/* <!-- Title and Content --> */}
                <div class="mb-8">
                    <h4 class="text-black text-3xl font-bold leading-tight mb-4">@eyebuydirect</h4>
                    <p class="text-black text-base font-normal mb-6">
                        Follow us on social for the latest trends and tag #eyebuydirect in your new eyewear!
                    </p>
                    <a href="https://www.eyebuydirect.com/community" target="_blank">
                        <button class="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800">
                            Shop the Look
                        </button>
                    </a>
                </div>

                {/* <!-- Follow Us Section --> */}
                <div class="mb-8">
                    <span class="block text-black text-lg font-bold mb-2">Follow us</span>
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
                </div>
            </div>

            {/* <!-- Social Media Items --> */}
            <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-4 md:max-w-3xl">
                {/* <!-- Item 1 --> */}
                <div class="relative group md:row-span-2 md:col-span-2">
                    <img
                        src="https://img.ebdcdn.com/upload/banner/202405/220718172910.jpg"
                        alt="Lowen"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="flex-grow flex items-center justify-center">
                            <a
                                href="/eyeglasses/frames/lowen-tortoise-xl-27733"
                                target="_blank"
                                class="text-sm text-black bg-white/45 px-12 py-1.5 rounded-sm hover:bg-white hover:underline"
                            >
                                Lowen
                            </a>
                        </div>

                        <span class="text-white font-medium text-center text-xs">@eyebuydirect</span>
                    </div>

                </div>
                {/* <!-- Item 2 --> */}
                <div class="relative group">
                    <img
                        src="https://img.ebdcdn.com/upload/banner/202405/220722196195.jpg"
                        alt="Quin"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="flex-grow flex items-center justify-center">
                            <a
                                href="/eyeglasses/frames/lowen-tortoise-xl-27733"
                                target="_blank"
                                class="text-sm text-black bg-white/45 px-12 py-1.5 rounded-sm hover:bg-white hover:underline"
                            >
                                Lowen
                            </a>
                        </div>

                        <span class="text-white font-medium text-center text-xs">@eyebuydirect</span>
                    </div>
                </div>
                {/* <!-- Item 3 --> */}
                <div class="relative group">
                    <img
                        src="https://img.ebdcdn.com/upload/banner/202405/220710294011.jpg"
                        alt="Everest"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="flex-grow flex items-center justify-center">
                            <a
                                href="/eyeglasses/frames/lowen-tortoise-xl-27733"
                                target="_blank"
                                class="text-sm text-black bg-white/45 px-12 py-1.5 rounded-sm hover:bg-white hover:underline"
                            >
                                Lowen
                            </a>
                        </div>

                        <span class="text-white font-medium text-center text-xs">@eyebuydirect</span>
                    </div>
                </div>
                {/* <!-- Item 4 --> */}
                <div class="relative group">
                    <img
                        src="https://img.ebdcdn.com/upload/banner/202405/220722196195.jpg"
                        alt="Additional Image"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="flex-grow flex items-center justify-center">
                            <a
                                href="/eyeglasses/frames/lowen-tortoise-xl-27733"
                                target="_blank"
                                class="text-sm text-black bg-white/45 px-12 py-1.5 rounded-sm hover:bg-white hover:underline"
                            >
                                Lowen
                            </a>
                        </div>

                        <span class="text-white font-medium text-center text-xs">@eyebuydirect</span>
                    </div>
                </div>

                {/* <!-- Item 5 --> */}
                <div class="relative group">
                    <img
                        src="https://img.ebdcdn.com/upload/banner/202405/220722196195.jpg"
                        alt="Additional Image"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="flex-grow flex items-center justify-center">
                            <a
                                href="/eyeglasses/frames/lowen-tortoise-xl-27733"
                                target="_blank"
                                class="text-sm text-black bg-white/45 px-12 py-1.5 rounded-sm hover:bg-white hover:underline"
                            >
                                Lowen
                            </a>
                        </div>

                        <span class="text-white font-medium text-center text-xs">@eyebuydirect</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Follow