import React from 'react'

function ThreeBanner() {
    return (
        <div class="mb-16 max-w-6xl mx-auto">
            {/* <!-- Promo Container --> */}
            <div class="grid gap-8 lg:grid-cols-3">
                {/* <!-- Promo Item 1 --> */}
                <div class="flex flex-col items-center text-center">
                    <a
                        href="https://www.eyebuydirect.com/fast-shipping-service"
                        aria-label="2-Day Delivery Glasses at your doorstep, in the blink of an eye. Shop now"
                        class="relative block w-full max-w-sm lg:max-w-full"
                    >
                        <img
                            src="https://img.ebdcdn.com/cms/A1_Desktop_380_fd77309752.jpg?q=70&amp;im=Resize,width=855,height=855,aspect=fill&amp;seo=01-01-2dd-d"
                            alt="Glasses at your doorstep, in the blink of an eye."
                            class="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                    <div class="mt-6">
                        <h3 class="text-4xl font-bold text-gray-900">2-Day Delivery</h3>
                        <p class="mt-3 text-lg font-normal text-gray-700">
                            Glasses at your doorstep, <p class="font-medium leading-8"> in the blink of an eye.</p>
                        </p>
                        <a
                            href="/fast-shipping-service"
                            class="inline-block mt-4 px-16 text-base border-[1px] border-black py-1.5 font-normal rounded-md shadow-md hover:border-[#d39d4e] hover:text-[#d39d4e]"
                        >
                            Shop now
                        </a>
                    </div>
                </div>

                {/* <!-- Promo Item 2 --> */}
                <div class="flex flex-col items-center text-center">
                    <a
                        href="https://www.eyebuydirect.com/campaign/onsale"
                        aria-label="Glasses On Sale Good looking out! Enjoy up to 50% off these eyewear picks. Shop now"
                        class="relative block w-full max-w-sm lg:max-w-full"
                    >
                        <img
                            src="https://img.ebdcdn.com/cms/Desktop_570x570_English_192e0a80bf.jpg?q=70&amp;im=Resize,width=855,height=855,aspect=fill&amp;seo=08-30-A2-banner-update-d"
                            alt="Good looking out! Enjoy up to 50% off these eyewear picks."
                            class="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                    <div class="mt-6">
                        <h3 class="text-4xl font-bold text-gray-900">Glasses On Sale</h3>
                        <p class="mt-3 text-lg font-normal text-gray-700">
                            Good looking out! Enjoy up to 50% off <p class="font-medium leading-8"> these eyewear picks.</p>
                        </p>
                        <a
                            href="/campaign/onsale"
                            class="inline-block mt-4 px-16 text-base border-[1px] border-black py-1.5 font-normal rounded-md shadow-md hover:border-[#d39d4e] hover:text-[#d39d4e]"
                        >
                            Shop now
                        </a>
                    </div>
                </div>

                {/* <!-- Promo Item 3 --> */}
                <div class="flex flex-col items-center text-center">
                    <a
                        href="https://www.eyebuydirect.com/quiz/glasses-frame-finder"
                        aria-label="Fit & Style Quiz Need some help figuring out which glasses are right for you? Find your perfect pair. Take the quiz"
                        class="relative block w-full max-w-sm lg:max-w-full"
                    >
                        <img
                            src="https://img.ebdcdn.com/cms/A_Quiz_desktop_2c33d380f1.jpg?q=70&amp;im=Resize,width=570,height=570,aspect=fill&amp;seo=12-02-quiz-d"
                            alt="Need some help figuring out which glasses are right for you? Find your perfect pair."
                            class="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                    <div class="mt-6">
                        <h3 class="text-4xl font-bold text-gray-900">Fit & Style Quiz</h3>
                        <p class="mt-3 text-lg font-normal text-gray-700">
                            Need some help figuring out which glasses are right for you? <p class="font-medium leading-8">
                                Find your perfect pair.</p>
                        </p>
                        <a
                            href="/quiz/glasses-frame-finder"
                            class="inline-block mt-4 px-16 text-base border-[1px] border-black py-1.5 font-normal rounded-md shadow-md hover:border-[#d39d4e] hover:text-[#d39d4e]"
                        >
                            Take the quiz
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ThreeBanner