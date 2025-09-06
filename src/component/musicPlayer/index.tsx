import { useEffect, useRef, useState } from "react"
import "./index.scss"

// YouTube IFrame Player API 타입 정의
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // YouTube 비디오 ID 추출 (URL에서)
  const YOUTUBE_VIDEO_ID = "xzfDttcH7VY" // https://www.youtube.com/watch?v=xzfDttcH7VY

  useEffect(() => {
    // YouTube IFrame Player API 로드
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = () => {
        if (containerRef.current) {
          playerRef.current = new window.YT.Player(containerRef.current, {
            height: '0',
            width: '0',
            videoId: YOUTUBE_VIDEO_ID,
            playerVars: {
              autoplay: 0, // 자동 재생 비활성화
              controls: 0, // 컨트롤 숨김
              disablekb: 1, // 키보드 컨트롤 비활성화
              enablejsapi: 1, // JavaScript API 활성화
              fs: 0, // 전체화면 버튼 숨김
              iv_load_policy: 3, // 주석 숨김
              modestbranding: 1, // YouTube 로고 최소화
              playsinline: 1, // 인라인 재생
              rel: 0, // 관련 동영상 숨김
              showinfo: 0, // 정보 숨김
              loop: 1, // 반복 재생
              playlist: YOUTUBE_VIDEO_ID // 반복을 위한 플레이리스트
            },
            events: {
              onReady: (event: any) => {
                setIsPlayerReady(true)
              },
              onStateChange: (event: any) => {
                // YT.PlayerState.PLAYING = 1, YT.PlayerState.PAUSED = 2
                if (event.data === 1) {
                  setIsPlaying(true)
                } else if (event.data === 2) {
                  setIsPlaying(false)
                }
              }
            }
          })
        }
      }
    } else {
      // API가 이미 로드된 경우
      window.onYouTubeIframeAPIReady()
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [])

  const togglePlay = () => {
    if (!playerRef.current || !isPlayerReady) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }


  return (
    <div className="music-player">
      {/* YouTube 플레이어 (숨김) */}
      <div 
        ref={containerRef} 
        style={{ display: 'none' }}
        id="youtube-player"
      />
      
      <div className="music-controls">
        <button 
          className={`music-btn play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          disabled={!isPlayerReady}
          aria-label={isPlaying ? "음악 일시정지" : "음악 재생"}
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
      </div>
    </div>
  )
}
