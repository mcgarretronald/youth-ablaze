import React from 'react'
import Image from 'next/image'

export default function Contactcard() {
    return (
        <div className="px-5 ">
            {/* Office Hours Section */}
            <section className="flex flex-col md:flex-row justify-between mb-10">
                <div className="mb-6 md:mb-0">
                    
                    <div className="flex gap-5 items-center">
                        <Image
                            src="/clock.svg"
                            alt="Contact"
                            width={20}
                            height={50}
                        />
                        <h1 className="text-lg font-semibold">Office Hours</h1>
                    </div>
                    <ul className="list-none ml-10 gap-2 text-sm">
                        <li>Monday-Friday</li>
                        <li>9:00 am to 6:00 pm</li>
                    </ul>
                </div>
                {/* Main Office Section */}
                <div>
                    <div className="flex gap-5 items-center">
                        <Image
                            src="/location.svg"
                            alt="Contact"
                            width={20}
                            height={50}
                        />
                        <h1 className="text-lg font-semibold">Main Office</h1>
                    </div>
                    <ul className="list-none ml-10 gap-2 text-sm">
                        <li>Nairobi, Kenya</li>
                    </ul>
                </div>
            </section>

            {/* Reach Us Section */}
            <section>
                <div>
                    <div className="flex gap-5 items-center">
                        <Image
                            src="/phone.svg"
                            alt="Contact"
                            width={20}
                            height={50}
                        />
                        <h1 className="text-lg font-semibold">Reach Us</h1>
                    </div>
                    <ul className="list-none ml-10 gap-2 text-sm">
                        <li>+1-555-123-4567</li>
                        <li>+1-555-123-4567</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
