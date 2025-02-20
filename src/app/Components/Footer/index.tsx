"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'; // Import social icons from react-icons

export default function Footer() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className='pt-10'
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className='bg-[#004B57] text-white py-10 md:py-20'>
                <div className='flex items-center justify-center'>
                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex gap-20 text-sm">
                        <Link href={"/aboutus"}>
                            <li className="hover:text-teal-600 cursor-pointer">Our Mission</li>
                        </Link>
                        <Link href={"/getinvolved"}>
                            <li className="hover:text-teal-600 cursor-pointer">Get Involved</li>
                        </Link>
                        <Link href={"/#contact"}>
                            <li className="hover:text-teal-600 cursor-pointer">Contact us</li>
                        </Link>
                    </ul>
                </div>

                {/* Divider */}
                <hr className='w-3/4 mx-auto my-10 border-gray-500 ' />

                <div className="flex flex-col md:flex-row justify-between items-center mx-10">
                    {/* Social Icons Section */}
                    <section className="flex gap-6 mb-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-600"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400"
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href="https://tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black"
                        >
                            <FaTiktok size={18} />
                        </a>
                    </section>

                    {/* Footer Text */}
                    <section>
                        <p className="text-center text-sm text-gray-500">
                            © Youth Ablaze 2023, Empowering the Leaders of Tomorrow
                        </p>
                    </section>
                </div>
            </div>
        </motion.section>
    );
}
