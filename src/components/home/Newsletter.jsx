import React from 'react'

function Newsletter() {
    return (
        <div class="bg-[#d39d4e] text-white py-10 px-5">
            <div class="max-w-3xl mx-auto text-center">
                <h5 class="text-3xl md:text-5xl font-semibold">
                    Join The Exclusive Club
                </h5>
                <p class="text-lg font-normal mt-3">
                    See our latest collections & exclusive offers before the crowd!
                </p>
                <form class="mt-8 flex items-center justify-center">
                    <div class="relative flex items-center w-full max-w-md">
                        <span class="absolute inset-y-0 left-3 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M2.5 3.5h19M2.5 3.5l9 7.5m10-7.5l-9 7.5m0 0v6" />
                            </svg>
                        </span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            class="pl-12 pr-4 py-3 w-full bg-white text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                            required
                        />
                        <button
                            type="submit"
                            class="absolute inset-y-0 right-3 flex text-gray-500 font items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="3"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </form>
                <div
                    class="text-xs font-light leading-tight mt-5 max-w-xl mx-auto"
                    role="region"
                    aria-label="privacy-policy"
                >
                    By subscribing, I confirm that I am over 16 years of age and agree that
                    my personal data can be used by Luxottica Group S.p.A to send me news,
                    special offers, and other marketing communication as part of the
                    Eyebuydirect Loyalty Program. For more information, see our
                    <a href="/privacy-policy#financial-incentive" class="underline">
                        Notice of Financial Incentives
                    </a>
                    ,
                    <a href="/privacy-policy" class="underline">Privacy Policy</a>, and
                    <a href="/terms-of-use" class="underline">Terms & Conditions</a>.
                </div>
            </div>
        </div>

    )
}

export default Newsletter