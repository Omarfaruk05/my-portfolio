import React from 'react';
import {DesktopComputerIcon} from '@heroicons/react/outline'
import {ArchiveIcon} from '@heroicons/react/outline'
import {UserGroupIcon} from '@heroicons/react/outline'

const InfoCard = () => {
    return (
        <>
            <div class="card bg-base-100 shadow-xl">
                <figure class="p-2  text-center">
                    <DesktopComputerIcon className='w-12 lg:w-24 text-primary'></DesktopComputerIcon>
                </figure>
                <div class="card-body p-4 items-center text-center">
                    <h2 class="card-title text-2xl">Beautiful Design</h2>
                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="p-2 text-center">
                <ArchiveIcon className='w-12 lg:w-24 text-primary '></ArchiveIcon>
                </figure>
                <div class="card-body p-4 items-center text-center">
                    <h2 class="card-title text-2xl">Unique Features</h2>
                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="p-2  text-center">
                <UserGroupIcon className='w-12 lg:w-24 text-primary '></UserGroupIcon>
                </figure>
                <div class="card-body p-4 items-center text-center">
                    <h2 class="card-title text-2xl">Reliable Support</h2>
                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
                </div>
            </div>
        </>
    );
};

export default InfoCard;