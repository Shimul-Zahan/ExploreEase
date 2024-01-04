import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TeamMember = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5'>
            <img src="https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?t=st=1704386457~exp=1704387057~hmac=9848b189f93a993da9abdd8257f597417a5ab0a05d68caa7678cac42a8f3ea52" alt="" className='h-[250px] w-[250px] rounded-lg' />
            <h1>CEO & FOUNDER</h1>
            <div className='flex justify-center items-center gap-3'>
                <FaFacebookF />
                <FaInstagram />
                <FaXTwitter />
            </div>
        </div>
    )
}

export default TeamMember