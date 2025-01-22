import React from 'react'

function Questions() {
    return (
        <div class="m-12 px-6 max-w-screen-xl mx-auto">
            {/* <!-- Title --> */}
            <div class="text-center mb-6">
                <h4 class="text-2xl md:text-5xl font-semibold text-gray-900">
                    Have Glasses Questions?
                </h4>
            </div>

            {/* <!-- Description --> */}
            <div class="text-center max-w-2xl mx-auto mb-10">
                <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                    We’ve got answers. Learn how to find styles for your face shape while buying prescription glasses, understand your prescription, and even measure your pupillary distance at home without an eye exam!
                </p>
            </div>

            {/* <!-- Guides Grid --> */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:max-w-3xl mx-auto">
                {/* <!-- Guide 1 --> */}
                <div class="text-center">
                    <div class="flex justify-center mb-4">
                        <img
                            src="https://img.ebdcdn.com/cms/how_to_read_3748e14eba.svg"
                            alt="How to Read a Prescription"
                            class="w-20 h-20"
                        />
                    </div>
                    <a
                        href="https://www.eyebuydirect.com/guides/how-to-read-a-prescription"
                        class="hover:text-[#d39d4e] underline text-lg font-medium"
                    >
                        How to Read a Prescription
                    </a>
                </div>

                {/* <!-- Guide 2 --> */}
                <div class="text-center">
                    <div class="flex justify-center mb-4">
                        <img
                            src="https://img.ebdcdn.com/cms/pupillary_d16eaa810b.svg"
                            alt="Pupillary Distance"
                            class="w-20 h-20"
                        />
                    </div>
                    <a
                        href="https://www.eyebuydirect.com/guides/how-to-measure-your-pd"
                        class="hover:text-[#d39d4e] underline text-lg font-medium"
                    >
                        Pupillary Distance
                    </a>
                </div>

                {/* <!-- Guide 3 --> */}
                <div class="text-center">
                    <div class="flex justify-center mb-4">
                        <img
                            src="https://img.ebdcdn.com/cms/face_shape_450d90d849.svg"
                            alt="Frames & Face Shapes"
                            class="w-20 h-20"
                        />
                    </div>
                    <a
                        href="https://www.eyebuydirect.com/guides/frames-and-face-shapes"
                        class="hover:text-[#d39d4e] underline text-lg font-medium"
                    >
                        Frames & Face Shapes
                    </a>
                </div>

                {/* <!-- Guide 4 --> */}
                <div class="text-center">
                    <div class="flex justify-center mb-4">
                        <img
                            src="https://img.ebdcdn.com/cms/how_to_buy_a117c83c2c.svg"
                            alt="How to Buy Glasses Online"
                            class="w-20 h-20"
                        />
                    </div>
                    <a
                        href="https://www.eyebuydirect.com/guides/how-to-buy-prescription-eyeglasses-online"
                        class="hover:text-[#d39d4e] underline text-lg font-medium"
                    >
                        How to Buy Glasses Online
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Questions