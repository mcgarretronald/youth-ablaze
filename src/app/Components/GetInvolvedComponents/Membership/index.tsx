import React from 'react';
import { FaUsers, FaNetworkWired, FaAward, FaBook } from 'react-icons/fa';

export default function Membership() {
    return (
        <div className="py-[10%] px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2">
            <div className="">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#1A202C] mb-8 text-center">
                    Membership Perks
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Perk 1 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-[#008080] text-white p-4 rounded-lg">
                        <FaUsers size={20} />
                    </div>
                    <h2 className="text-lg font-semibold text-[#1A202C]">Leadership Workshops</h2>
                    <p className="text-gray-600">
                        Exclusive access to workshops that enhance your leadership skills.
                    </p>
                </div>
                {/* Perk 2 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-[#008080] text-white p-4 rounded-lg">
                        <FaNetworkWired size={20} />
                    </div>
                    <h2 className="text-lg font-semibold text-[#1A202C]">Networking Opportunities</h2>
                    <p className="text-gray-600">
                        Connect with like-minded individuals and expand your network.
                    </p>
                </div>
                {/* Perk 3 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-[#008080] text-white p-4 rounded-lg">
                        <FaAward size={20} />
                    </div>
                    <h2 className="text-lg font-semibold text-[#1A202C]">Community Recognition</h2>
                    <p className="text-gray-600">
                        Be recognized for your contributions and leadership in the community.
                    </p>
                </div>
                {/* Perk 4 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-[#008080] text-white p-4 rounded-lg">
                        <FaBook size={20} />
                    </div>
                    <h2 className="text-lg font-semibold text-[#1A202C]">Resource Library</h2>
                    <p className="text-gray-600">
                        Access a wealth of resources to support your personal and professional growth.
                    </p>
                </div>
            </div>
        </div>
    );
}
