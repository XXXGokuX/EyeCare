import React from 'react'

function PickStyle() {
    return (
        <div class="m-12">
            <h3 class="text-4xl font-semibold text-center mb-8">Pick a style, any style:</h3>
            <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center">
                {/* <!-- Classic Style --> */}
                <li class="text-center">
                    <a
                        href="https://www.eyebuydirect.com/eyewear-trends/classic"
                        class="group flex flex-col items-center">
                        <img
                            src="https://img.ebdcdn.com/cms/Classic_circle_deskt_1f072d45a5.jpg?q=80&im=Resize,width=300,height=300,aspect=fill"
                            alt="Classic"
                            class="w-32 h-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <span class="mt-4 text-lg font-medium group-hover:text-[#d39d4e]">Classic</span>
                    </a>
                </li>
                {/* <!-- Eco-Friendly Style --> */}
                <li class="text-center">
                    <a
                        href="https://www.eyebuydirect.com/eyewear-trends/eco-friendly"
                        class="group flex flex-col items-center">
                        <img
                            src="https://img.ebdcdn.com/cms/ECO_circle_deskt_6a49fe770a.jpg?q=80&im=Resize,width=300,height=300,aspect=fill"
                            alt="Eco Friendly"
                            class="w-32 h-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <span class="mt-4 text-lg font-medium group-hover:text-[#d39d4e]">Eco Friendly</span>
                    </a>
                </li>
                {/* <!-- Artsy Style --> */}
                <li class="text-center">
                    <a
                        href="https://www.eyebuydirect.com/eyewear-trends/artsy"
                        class="group flex flex-col items-center">
                        <img
                            src="https://img.ebdcdn.com/cms/Artsy_circle_deskt_69de7ecb45.jpg?q=80&im=Resize,width=300,height=300,aspect=fill"
                            alt="Artsy"
                            class="w-32 h-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <span class="mt-4 text-lg font-medium group-hover:text-[#d39d4e]">Artsy</span>
                    </a>
                </li>
                {/* <!-- Retro Style --> */}
                <li class="text-center">
                    <a
                        href="https://www.eyebuydirect.com/eyewear-trends/retro"
                        class="group flex flex-col items-center">
                        <img
                            src="https://img.ebdcdn.com/cms/RETRO_circle_deskt_7471edeedd.jpg?q=80&im=Resize,width=300,height=300,aspect=fill"
                            alt="Retro"
                            class="w-32 h-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <span class="mt-4 text-lg font-medium group-hover:text-[#d39d4e]">Retro</span>
                    </a>
                </li>
                {/* <!-- Street Style --> */}
                <li class="text-center">
                    <a
                        href="https://www.eyebuydirect.com/eyewear-trends/street-style"
                        class="group flex flex-col items-center">
                        <img
                            src="https://img.ebdcdn.com/cms/STREET_circle_deskt_1eb3814dc3.jpg?q=80&im=Resize,width=300,height=300,aspect=fill"
                            alt="Street Style"
                            class="w-32 h-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <span class="mt-4 text-lg font-medium group-hover:text-[#d39d4e]">Street Style</span>
                    </a>
                </li>
                {/* <!-- Bold Style --> */}
                <li class="text-center">
                    <a
                        href="https://www.eyebuydirect.com/eyewear-trends/bold"
                        class="group flex flex-col items-center">
                        <img
                            src="https://img.ebdcdn.com/cms/Bold_circle_deskt_49f05eecfd.jpg?q=80&im=Resize,width=300,height=300,aspect=fill"
                            alt="Bold"
                            class="w-32 h-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <span class="mt-4 text-lg font-medium group-hover:text-[#d39d4e]">Bold</span>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default PickStyle