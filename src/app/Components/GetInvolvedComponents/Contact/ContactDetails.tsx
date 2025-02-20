import React from 'react';

export default function ContactDetails() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    {/* Canada Office */}
                    <div>
                        <h3 className="text-lg font-semibold text-teal-500 mb-2">Nairobi Office</h3>
                        <p className="text-gray-700">Monday-Friday</p>
                        <p className="text-gray-700">9:00 am to 6:00 pm</p>
                    </div>

                    {/* Our Address */}
                    <div>
                        <h3 className="text-lg font-semibold text-teal-500 mb-2">Our Address</h3>
                        <p className="text-gray-700">Nairobi</p>
                        <p className="text-gray-700">Kenya</p>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h3 className="text-lg font-semibold text-teal-500 mb-2">Get In Touch</h3>
                        <p className="text-gray-700">+1-246-888-0653</p>
                        <p className="text-gray-700">+1-222-632-0194</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
