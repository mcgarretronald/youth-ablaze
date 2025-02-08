"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NavBar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <div className="flex justify-center">
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: visible ? 0 : "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-4 transform -translate-x-3/4 bg-white border-[1px]  border-gray-300 w-[90%] max-w-[1500px] py-3 px-12 flex justify-between items-center z-50 transition-all rounded-full "
            >
                {/* Logo */}
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image src="/logo.svg" alt="Youth Ablaze" width={30} height={30} />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 ml-[15%] text-sm">
                    <Link href={"/"}> <li className="hover:text-teal-600 cursor-pointer">Home</li></Link>
                    <Link href={"/aboutus"}><li className="hover:text-teal-600 cursor-pointer">About Us</li></Link>
                    <Link href={"/getinvolved"}><li className="hover:text-teal-600 cursor-pointer">Get Involved</li></Link>
                </ul>

                {/* CTA Buttons (Desktop) */}
                <div className="hidden md:flex gap-4 text-sm">
                    <Link href={'/getinvolved'}>
                        <button className="flex items-center gap-1 group align-middle justify-center rounded-full px-4 py-2 hover:bg-gray-200 transition-all duration-300">
                            Join us
                            <FaArrowRight className="transform transition-transform  duration-300 ease-in-out group-hover:translate-x-1" />
                        </button>
                    </Link>
                    <Link href={'/#contact'}>
                        <button className="flex items-center gap-1 group align-middle justify-center rounded-full px-4 py-2 text-white bg-[#008080] hover:bg-[#0a5f5f] transition-all duration-300">
                            Contact us
                            <FaArrowRight className="transform transition-transform  duration-300 ease-in-out group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={24} color="#0F172A" /> : <FaBars size={24} color="#0F172A" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-14 mt-5 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden rounded-lg">
                        <Link href={"/"} onClick={() => setMenuOpen(false)}> <p className="hover:text-teal-600 text-sm">Home</p></Link>
                        <Link href={"/aboutus"} onClick={() => setMenuOpen(false)}><p className="hover:text-teal-600 text-sm">About Us</p></Link>
                        <Link href={"/getinvolved"} onClick={() => setMenuOpen(false)}><p className="hover:text-teal-600 text-sm">Get Involved</p></Link>
                        <button className="flex items-center gap-1 group align-middle justify-center rounded-full px-4 py-2 hover:bg-gray-200 transition-all duration-300 text-sm">
                            Join us
                            <FaArrowRight className="transform transition-transform mt-1 duration-300 ease-in-out group-hover:translate-x-1" />
                        </button>
                        <button className="flex items-center gap-1 group align-middle justify-center rounded-full px-4 py-2 text-white bg-[#008080] hover:bg-[#0a5f5f] transition-all duration-300 text-sm">
                            Contact us
                            <FaArrowRight className="transform transition-transform mt-1 duration-300 ease-in-out group-hover:translate-x-1" />
                        </button>
                    </div>
                )}
            </motion.nav>
        </div>
    );
}
