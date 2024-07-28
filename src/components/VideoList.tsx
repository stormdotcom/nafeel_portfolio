import React from 'react'
import { Video } from './Video'

const VideoList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <Video videoId="KcIKtce2EDM" />
            <Video videoId="8I--RjVCSd4" />
            <Video videoId="MJ5rT5x6eLU" />
        </div>
    )
}

export default VideoList