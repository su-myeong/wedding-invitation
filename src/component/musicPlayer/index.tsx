import { useEffect, useRef, useState } from "react"
import "./index.scss"

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setIsPlaying(false)
    }

    const handleLoadStart = () => {
      // 음악이 로드되기 시작할 때
    }

    const handleCanPlay = () => {
      // 음악이 재생 준비가 되었을 때
    }

    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("loadstart", handleLoadStart)
    audio.addEventListener("canplay", handleCanPlay)

    return () => {
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("loadstart", handleLoadStart)
      audio.removeEventListener("canplay", handleCanPlay)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().catch((error) => {
        console.log("음악 재생 실패:", error)
        // 음악 파일이 없거나 로드에 실패한 경우
        if (error.name === 'NotSupportedError' || error.name === 'NotAllowedError') {
          alert("음악 파일을 찾을 수 없습니다. public 폴더에 'wedding-music.mp3' 파일을 추가해주세요.")
        }
      })
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !audio.muted
    setIsMuted(audio.muted)
  }

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        src="/wedding-music.mp3"
      />
      <div className="music-controls">
        <button 
          className="music-btn play-btn" 
          onClick={togglePlay}
          aria-label={isPlaying ? "음악 일시정지" : "음악 재생"}
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button 
          className="music-btn mute-btn" 
          onClick={toggleMute}
          aria-label={isMuted ? "음소거 해제" : "음소거"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  )
}
