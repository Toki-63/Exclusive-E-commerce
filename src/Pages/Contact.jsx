import React from 'react'
import Container from '../Components/Container'
import BreadCrumb from '../Components/BreadCrumb'
import { IoCallOutline } from 'react-icons/io5'
import { SlEnvolopeLetter } from "react-icons/sl";
import Button from '../Components/Button';

const Contact = () => {
  return (
    <>
      <Container>
        <div className="my-20">
          <BreadCrumb />
        </div>
        <div className="flex flex-row gap-10 font-Poppins">
          <div className="shadow p-10 rounded-sm w-85 mx-auto">
            <span className="flex items-center gap-3 text-2xl font-medium mb-6">
              <div className="text-white p-2.5 bg-prime rounded-full flex justify-center items-center">
                <IoCallOutline />
              </div>
              <h2>Call To Us</h2>
            </span>
            <p className="py-4 text-sm">We are available 24/7, 7 days a week.</p>
            <h2 className="text-sm">Phone: +8801611112222</h2>
            <div className="border-b-2 border-secondary my-8"></div>

            <span className="flex items-center gap-3 text-2xl font-medium mb-6">
              <div className="text-white p-2.5 bg-prime rounded-full flex justify-center items-center">
                <SlEnvolopeLetter/>
              </div>
              <h2>Write To US</h2>
            </span>
            <p className="py-4 text-sm">Fill out our form and we will contact you within 24 hours.</p>
            <h2 className="pb-4 text-sm">Emails: customer@exclusive.com</h2>
            <h2 className="text-sm">Emails: support@exclusive.com</h2>
          </div>

          <div className="shadow px-7.75 py-10 w-200 mx-auto rounded-sm">
            <div className="flex flex-row gap-4">
              <div>
                <input type="text"
                  placeholder="Your Name *"
                  className="bg-[#f5f5f5] py-3.25 px-4 w-full rounded-sm outline-0" required />
              </div>
              <div>
                <input type="text"
                  placeholder="Your Email *"
                  className="bg-[#f5f5f5] py-3.25 px-4 w-full rounded-sm outline-0" required />
              </div>
              <div>
                <input type="text"
                  placeholder="Your Phone *"
                  className="bg-[#f5f5f5] py-3.25 px-4 w-full rounded-sm outline-0" required />
              </div>
            </div>
            <div className="pt-10.25">
              <input type="text"
                placeholder="Your Massage"
                className="bg-[#f5f5f5] h-51.75 w-full px-4 rounded-sm outline-0" />
            </div>
            <div className="flex justify-end">
              <Button className='py-4 px-12 mt-8 bg-prime hover:bg-[#a90808] rounded-sm'>Send Massage</Button>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Contact
