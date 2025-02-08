import React, { useState } from 'react';
import { FaHandsHelping, FaGlobe, FaGift, FaChartLine, FaDollarSign } from 'react-icons/fa';
import Image from 'next/image';

export default function Contribute() {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="relative  py-10 md:py-20 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <section className="space-y-12">
                <h1 className="text-3xl md:text-5xl font-bold text-[#004B57]">
                    Empower Change Through Giving
                </h1>
                <p className="text-lg text-gray-600">
                    Your contributions fuel our mission to inspire and empower the next generation of leaders. Find out how you can make an impact.
                </p>

                {/* Icon List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#004B57]">
                    <div className="flex items-center gap-3">
                        <FaHandsHelping size={24} />
                        <p>Direct Community Impact</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaGlobe size={24} />
                        <p>Global Reach</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaGift size={24} />
                        <p>Flexible Giving Options</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaChartLine size={24} />
                        <p>Transparent Use of Funds</p>
                    </div>
                </div>

                {/* Button */}
                <div>
                    <button
                        onClick={handleButtonClick}
                        className="bg-[#008080] text-white py-2 px-6 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-[#004B57] transition duration-300"
                    >
                        <FaDollarSign />
                        Contribute Now
                    </button>
                </div>
            </section>

            {/* Image Section */}
            <section>
                <div className="overflow-hidden rounded-lg">
                    <Image
                        src={'/contribute.png'}
                        alt="Hands around a plant"
                        height={500}
                        width={500}
                        className="w-full object-cover"
                    />
                </div>
            </section>

            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg space-y-4 w-96">
                        <h2 className="text-xl font-bold text-center text-[#004B57]">
                            Contribution Accounts
                        </h2>
                        <p className="text-gray-600 text-center">
                            These are the accounts you can use to make your contribution:
                        </p>
                        <ul className="text-gray-700 space-y-2">
                            <li><strong>Bank Account:</strong> 123-456-789</li>
                            <li><strong>Mobile Money:</strong> +254 712 345 678</li>
                            <li><strong>PayPal:</strong> donate@youthablaze.org</li>
                        </ul>
                        <div className="flex justify-center">
                            <button
                                onClick={handleClosePopup}
                                className="bg-[#008080] text-white py-2 px-6 rounded-lg hover:bg-[#004B57] transition duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
