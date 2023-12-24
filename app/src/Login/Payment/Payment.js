import React from 'react'
import {Link} from 'react-router-dom'

const Payment = () => {
    return (
        <div>
            <section class="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
                <div class="h-full">
                    <div>
                        <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                            <img class="rounded-t shadow-lg" src="https://img.freepik.com/free-photo/secure-mobile-payment-with-phone-cards-pos_107791-17380.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais" width="460" height="180" alt="Pay background" />
                        </div>

                        <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                            <div class="bg-white px-8 pb-6 rounded-b shadow-lg">
                                <div class="text-center mb-6">
                                    <h1 class="text-xl leading-snug text-gray-800 font-semibold mb-2">🔥 Payment Methods 🔥</h1>
                                </div>

                                <div class="flex justify-center mb-6">
                                    <div class="relative flex w-full p-1 bg-gray-50 rounded">
                                        <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                                            <span class="absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out translate-x-full'"></span>
                                        </span>
                                        <button class="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >Pay With Card</button>
                                        <button class="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >Pay With UPI</button>
                                    </div>
                                </div>

                                <div x-show="card">
                                    <div class="space-y-4">

                                        <div>
                                            <label class="block text-sm font-medium mb-1" for="card-nr">Card Number <span class="text-red-500">*</span></label>
                                            <input id="card-nr" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="1234 1234 1234 1234" />
                                        </div>

                                        <div class="flex space-x-4">
                                            <div class="flex-1">
                                                <label class="block text-sm font-medium mb-1" for="card-expiry">Expiry Date <span class="text-red-500">*</span></label>
                                                <input id="card-expiry" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="MM/YY" />
                                            </div>
                                            <div class="flex-1">
                                                <label class="block text-sm font-medium mb-1" for="card-cvc">CVC <span class="text-red-500">*</span></label>
                                                <input id="card-cvc" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="CVC" />
                                            </div>
                                        </div>

                                        <div>
                                            <label class="block text-sm font-medium mb-1" for="card-name">Name on Card <span class="text-red-500">*</span></label>
                                            <input id="card-name" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="V-store" />
                                        </div>

                                        <div>
                                            <label class="block text-sm font-medium mb-1" for="card-email">Email <span class="text-red-500">*</span></label>
                                            <input id="card-email" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" placeholder="V-store@company.com" />
                                        </div>
                                    </div>

                                    <div class="mt-6">
                                        <div class="mb-4">
                                            <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pay $253.00</button>
                                        </div>
                                        <div class="text-xs text-gray-500 italic text-center">You'll be charged $253, including $48 for VAT in Italy</div>
                                    </div>
                                </div>


                                <div x-show="!card" x-cloak>
                                    <div>
                                        <div class="mb-4">
                                            <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pay with PayPal - $253.00</button>
                                        </div>
                                        <div class="text-xs text-gray-500 italic text-center">You'll be charged $253, including $48 for VAT in Italy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div x-show="open" class="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
                <Link to='/' class="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
                    <div>👉 <a class="hover:underline ml-1" href="https://cruip.com/mosaic/?ref=codepen-cruip-customers-table">V-Store.com</a></div>
                    <button class="text-gray-500 hover:text-gray-400 ml-5">
                        <span class="sr-only">Close</span>
                        <svg class="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                            <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div >
    )
}

export default Payment