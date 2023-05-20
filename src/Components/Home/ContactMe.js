import React, { useRef } from 'react';
import { LocationMarkerIcon, ChatAltIcon, PhoneIcon } from '@heroicons/react/outline';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dd971fa', 'template_0m8qleg', e.target, 'LLQ5Ttfe2pOrCmnTp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <div className='mt-8 py-8 px-4 pd:mx-12 lg:px-32 bg-base-200'>
            <h1 className='text-4xl font-semibold text-center text-primary my-4'>About Me</h1>
            <div className='grid grid-cols-1
            md:grid-cols-2 justify-between'>
                <div className='mt-4'>
                    <div>
                        <div className='md:flex justify-start items-center text-center md:text-start border p-2 rounded-md border-primary bg-white'>
                            <div>
                                <LocationMarkerIcon className='w-12 text-primary mx-auto'></LocationMarkerIcon>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold'>Address</h1>
                                <p>Sreepur, Gazipur, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='md:flex justify-start items-center text-center md:text-start my-4 border p-2 rounded-md border-primary bg-white'>
                            <div>
                                <ChatAltIcon className='w-12 text-primary mx-auto'></ChatAltIcon>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold'>Email</h1>
                                <p>mdomarfaruk149518@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='md:flex justify-start items-center text-center md:text-start border p-2 rounded-md border-primary bg-white'>
                            <div>
                                <PhoneIcon className='w-12 text-primary mx-auto'></PhoneIcon>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold'>Phone</h1>
                                <p>+8801567900262, +8811941221528</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 md:mt-0  mx-4 '>
                    <h3 className='text-xl text-primary text-center mb-2 font-semibold'>Send Message</h3>
                    <form  ref={form} onSubmit={sendEmail}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <input type="text" name='name' placeholder="Name" reqiired class="input input-bordered input-gray w-full max-w-screen mb-2" />
                            <input type="email" name='email' placeholder="Email" required class="input  input-gray input-bordered bg-gray w-full max-w-screen mb-2"/>
                            <input type="text" name='subject' placeholder="subject" required class="input input-bordered input-gray bg-gray w-full max-w-screen  mb-2" />
                            <input type="number" name='phone' placeholder="number" class="input input-bordered input-gray bg-gray w-full max-w-screen  mb-2" />
                        </div>
                        <div>
                            <textarea name='message' class="textarea textarea-bordered textarea-gray bg-gray w-full max-w-screen mt-4" required placeholder="Your Message"></textarea>
                        </div>
                        <div className='text-end'>
                        <input type="submit" className='btn btn-primary px-8' value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
};

export default ContactMe;