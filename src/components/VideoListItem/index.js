// import {formatDistance} from 'date-fns'
import {Link} from 'react-router-dom'
import MainContext from '../../context/MainContext'
import {
  VideoItemMain,
  VideoThumb,
  VideoDetailDiv,
  VideoDetailTextDiv,
  VideoTitle,
  VideoDetailUnderText,
  JustDot,
  VideoViewsAgo,
} from './styledComponent'

const VideoListItem = props => {
  const {details} = props
  //   const publishedAge = formatDistance(new Date(), new Date(details.publishedAt))
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
          <Link style={{textDecoration: 'none'}} to={`/videos/${details.id}`}>
            <VideoItemMain>
              <VideoThumb src={details.thumbnailUrl} alt={details.title} />
              <VideoDetailDiv>
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
            </VideoItemMain>
          </Link>
        )
      }}
    </MainContext.Consumer>
  )
}

export default VideoListItem
