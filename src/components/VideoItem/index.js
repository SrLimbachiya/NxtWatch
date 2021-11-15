// import {formatDistance} from 'date-fns'
// import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import MainContext from '../../context/MainContext'
import {
  VideoItemMain,
  VideoThumb,
  VideoDetailDiv,
  VideoDetailTextDiv,
  Channelthumb,
  VideoTitle,
  VideoDetailUnderText,
  JustDot,
  VideoViewsAgo,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  //   const publishedAge = formatDistance(new Date(), new Date(details.publishedAt))
  //   console.log(formatDistanceToNow(new Date(2021, 8, 20)))
  function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000)
    let interval = seconds / 31536000
    if (interval > 1) {
      return `${Math.floor(interval)} years ago`
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return `${Math.floor(interval)} months ago`
    }
    interval = seconds / 86400
    if (interval > 1) {
      return `${Math.floor(interval)} days ago`
    }
    interval = seconds / 3600
    if (interval > 1) {
      return `${Math.floor(interval)} hours ago`
    }
    interval = seconds / 60
    if (interval > 1) {
      return `${Math.floor(interval)} minutes ago`
    }
    return `${Math.floor(seconds)} seconds ago`
  }
  //   console.log(
  //     `Date is ${details.publishedAt} and its been ${timeSince(
  //       new Date(details.publishedAt),
  //     )}`,
  //   )
  return (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <VideoItemMain>
            <Link style={{textDecoration: 'none'}} to={`/videos/${details.id}`}>
              <VideoThumb src={details.thumbnailUrl} alt={details.title} />
              <VideoDetailDiv>
                <Channelthumb
                  src={details.channel.profileImageUrl}
                  alt={details.channel.name}
                />
                <VideoDetailTextDiv>
                  <VideoTitle theme={activeTheme}>{details.title}</VideoTitle>
                  <VideoDetailUnderText theme={activeTheme}>
                    {details.channel.name}
                  </VideoDetailUnderText>
                  <VideoViewsAgo>
                    <VideoDetailUnderText
                      theme={activeTheme}
                    >{`${details.viewCount} views`}</VideoDetailUnderText>
                    <JustDot theme={activeTheme}>&bull;</JustDot>
                    <VideoDetailUnderText theme={activeTheme}>
                      {timeSince(new Date(details.publishedAt))}
                    </VideoDetailUnderText>
                  </VideoViewsAgo>
                </VideoDetailTextDiv>
              </VideoDetailDiv>
            </Link>
          </VideoItemMain>
        )
      }}
    </MainContext.Consumer>
  )
}

export default VideoItem
