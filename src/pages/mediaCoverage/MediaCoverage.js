import React from 'react'
import Media from '../../components/media/Media'
import Channels from '../../components/channels/Channels'
import RecentPost from '../../components/recentPost/RecentPost'
import Calendar from '../../components/calendar/Calendar'

const MediaCoverage = () => {
  return (
    <div className='awards container lg:w-3/5 md:w-full lg:p-5 md:p-2 px-8 m-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
        <div className='award-certification lg:col-span-2 md:col-span-3 sm:col-span-auto'>
            <div className='certificate'>
                <Media/>
            </div>
            <div className='award-cards'>
                <Channels/>
            </div>
        </div>
        <div className='post-calendar flex flex-col items-center px-3 w-4/5 md:w-full lg:ml-auto ml-0'>
            <div>
                <RecentPost/>
            </div>
            <div>
                <Calendar/>
            </div>
        </div>
    </div>
  )
}

export default MediaCoverage