import React from 'react'

function Follow() {
    return (
        <div class="m-12 flex flex-col md:flex-row md:gap-12 gap-4">

            <div class="title_and_follow flex flex-col justify-center">
                {/* <!-- Title and Content --> */}
                <div class="mb-8">
                    <h4 class="text-black text-3xl font-bold leading-tight mb-4">@amvieyewear</h4>
                    <p class="text-black text-base font-normal mb-6">
                        Follow us on social for the latest trends and tag #amvieyewear in your new eyewear!
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
                        <div class="text-center">
                            <a href="https://www.instagram.com/amvi/" target="_blank" rel="noopener noreferrer" title="Follow @amvi">
                                <svg class="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M721.050-1.69h-414.925c-168.653 0-305.818 137.165-305.818 305.818v414.925c0 168.653 137.165 305.818 305.818 305.818h414.925c168.653 0 305.818-137.165 305.818-305.818v-414.925c0-168.653-137.165-305.818-305.818-305.818zM923.597 719.053c0 111.872-90.675 202.547-202.547 202.547h-414.925c-111.872 0-202.547-90.675-202.547-202.547v-414.925c0-111.872 90.675-202.547 202.547-202.547h414.925c111.872 0 202.547 90.675 202.547 202.547v414.925z"></path>
                                    <path d="M513.587 246.067c-146.381 0-265.523 119.091-265.523 265.523s119.091 265.523 265.523 265.523 265.523-119.091 265.523-265.523-119.091-265.523-265.523-265.523zM513.587 673.792c-89.6 0-162.253-72.653-162.253-162.253s72.653-162.253 162.253-162.253c89.6 0 162.253 72.653 162.253 162.253 0 89.651-72.653 162.253-162.253 162.253z"></path>
                                    <path d="M843.264 248.064c0 35.148-28.493 63.642-63.642 63.642s-63.642-28.493-63.642-63.642c0-35.148 28.493-63.642 63.642-63.642s63.642 28.493 63.642 63.642z"></path>
                                </svg>
                            </a>
                            <p class="text-sm mt-2 font-medium">@amvi</p>
                        </div>

                        <div class="text-center">
                            <a href="https://www.instagram.com/hithvi/" target="_blank" rel="noopener noreferrer" title="Follow @hithvi">
                                <svg class="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M721.050-1.69h-414.925c-168.653 0-305.818 137.165-305.818 305.818v414.925c0 168.653 137.165 305.818 305.818 305.818h414.925c168.653 0 305.818-137.165 305.818-305.818v-414.925c0-168.653-137.165-305.818-305.818-305.818zM923.597 719.053c0 111.872-90.675 202.547-202.547 202.547h-414.925c-111.872 0-202.547-90.675-202.547-202.547v-414.925c0-111.872 90.675-202.547 202.547-202.547h414.925c111.872 0 202.547 90.675 202.547 202.547v414.925z"></path>
                                    <path d="M513.587 246.067c-146.381 0-265.523 119.091-265.523 265.523s119.091 265.523 265.523 265.523 265.523-119.091 265.523-265.523-119.091-265.523-265.523-265.523zM513.587 673.792c-89.6 0-162.253-72.653-162.253-162.253s72.653-162.253 162.253-162.253c89.6 0 162.253 72.653 162.253 162.253 0 89.651-72.653 162.253-162.253 162.253z"></path>
                                    <path d="M843.264 248.064c0 35.148-28.493 63.642-63.642 63.642s-63.642-28.493-63.642-63.642c0-35.148 28.493-63.642 63.642-63.642s63.642 28.493 63.642 63.642z"></path>
                                </svg>
                            </a>
                            <p class="text-sm mt-2 font-medium">@hithvi</p>
                        </div>

                        <div class="text-center">
                            <a href="https://www.instagram.com/hitsay/" target="_blank" rel="noopener noreferrer" title="Follow @hitsay">
                                <svg class="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M721.050-1.69h-414.925c-168.653 0-305.818 137.165-305.818 305.818v414.925c0 168.653 137.165 305.818 305.818 305.818h414.925c168.653 0 305.818-137.165 305.818-305.818v-414.925c0-168.653-137.165-305.818-305.818-305.818zM923.597 719.053c0 111.872-90.675 202.547-202.547 202.547h-414.925c-111.872 0-202.547-90.675-202.547-202.547v-414.925c0-111.872 90.675-202.547 202.547-202.547h414.925c111.872 0 202.547 90.675 202.547 202.547v414.925z"></path>
                                    <path d="M513.587 246.067c-146.381 0-265.523 119.091-265.523 265.523s119.091 265.523 265.523 265.523 265.523-119.091 265.523-265.523-119.091-265.523-265.523-265.523zM513.587 673.792c-89.6 0-162.253-72.653-162.253-162.253s72.653-162.253 162.253-162.253c89.6 0 162.253 72.653 162.253 162.253 0 89.651-72.653 162.253-162.253 162.253z"></path>
                                    <path d="M843.264 248.064c0 35.148-28.493 63.642-63.642 63.642s-63.642-28.493-63.642-63.642c0-35.148 28.493-63.642 63.642-63.642s63.642 28.493 63.642 63.642z"></path>
                                </svg>
                            </a>
                            <p class="text-sm mt-2 font-medium">@hitsay</p>
                        </div>
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

                        <span class="text-white font-medium text-center text-xs">@amvieyewear</span>
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

                        <span class="text-white font-medium text-center text-xs">@amvieyewear</span>
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

                        <span class="text-white font-medium text-center text-xs">@amvieyewear</span>
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

                        <span class="text-white font-medium text-center text-xs">@amvieyewear</span>
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

                        <span class="text-white font-medium text-center text-xs">@amvieyewear</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Follow
