import React from 'react';

export default function Contact() {
    return (
        <div className="bg-[#FAF8FB] antialiased font-nav px-8 py-12" id="contact">
            <div className='text-center w-full'>
                {/* svg supposed to be here */}
            </div>
            <div className='max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-zinc-50 text-gray-900 rounded-xl shadow-md'>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h2 className='text-4xl lg:text-5xl font-bold leading-tight'>Lets talk about something</h2>
                        <div className='text-gray-700 mt-8'>
                            Hate Forms?
                            Send us an <span className='underline'>Email</span> instead.
                        </div>
                    </div>
                    <div className='mt-8 text-center'>
                        {/* svg supposed to be */}
                    </div>
                </div>
                <div className=''>
                    <div>
                        <span
                            className='uppercase text-sm text-[#C0A6BD] font-semibold'>Full Name</span>
                            <input
                                className='w-full bg-[#C0A6BD] text-gray-900 placeholder-zinc-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                type="text"
                                placeholder='Michael Audrey Myers'/>
                    </div>
                    <div className='mt-8'>
                        <span className='uppercase text-sm text-[#C0A6BD] font-semibold'>Email</span>
                        <input className='w-full bg-[#C0A6BD] text-gray-900 placeholder-zinc-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' type="text" placeholder='mmyers@haddonfield.com'/>
                    </div>
                    <div className='mt-8'>
                        <span className='uppercase text-sm text-[#C0A6BD] font-semibold'>Message</span>
                        <textarea className='w-full h-32 bg-[#C0A6BD] text-gray-900 placeholder-zinc-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' placeholder='your text here'></textarea>
                    </div>
                    <div className='mt-8'>
                        <button className='text-[#D242CF] uppercase hover:text-zinc-50 border border-[#D242CF] hover:bg-[#D242CF] focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium leading-snug rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 w-full'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
