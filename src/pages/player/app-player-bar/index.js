import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { Slider, Tooltip, message } from 'antd';
import { DownloadOutlined, UndoOutlined } from '@ant-design/icons'

import {  getSizeImage, getPlayUrl, formatMinuteSecond } from '@/utils/format-utils';
import { 
  getSongDetailAction, 
  changeCurrentLyricIndexAction,
  changePlaySequenceAction,
  changePlaySongAction 
} from '../store/actionCreators';

//import HYAppPlayPanel from '../app-play-panel'
import { NavLink } from 'react-router-dom';
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function WlAppPlaybar() {
  // props and state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // redux hooks
  const {
    currentSong,
    currentLyrics,
    currentLyricIndex,
    playList,
    playSequence
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    currentLyrics: state.getIn(["player", "currentLyrics"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    playList: state.getIn(["player", "playList"]),
    playSequence: state.getIn(["player", "playSequence"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
    setDuration(currentSong.dt);
  }, [currentSong]);

  // 其他业务
  const picUrl = currentSong.al && currentSong.al.picUrl // 图片url
  const songUrl = getPlayUrl(currentSong.id) // 歌曲URL
  const play = useCallback(() => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(err => {
      setIsPlaying(false);
    });
  }, [isPlaying]);

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime);
      setProgress((currentTime * 1000) / duration * 100);
    }

    let lrcLength = currentLyrics.length;
    let i = 0;
    for (; i < lrcLength; i++) {
      const lrcTime = currentLyrics[i].time;
      if (currentTime * 1000 < lrcTime) {
        break
      }
    }
    const finalIndex = i - 1;
    if (finalIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex));
      message.open({
        content: currentLyrics[finalIndex].content,
        key: "lyric",
        duration: 0,
        className: 'lyric-message',
      })
    }
  }

  const timeEnded = () => {
    if (playSequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changePlaySongAction(1));
    }
  }

  const sliderChange = useCallback((value) => {
    setProgress(value);
    const time = value / 100.0 * duration / 1000;
    setCurrentTime(time);
    setIsChanging(true);
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const time = value / 100.0 * duration / 1000;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
    setIsChanging(false);

    if (!isPlaying) {
      play();
    }
  }, [duration, isPlaying, play]);

  // 重新播放音乐
  const refreshMusic = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar btn prev" 
                  onClick={e => dispatch(changePlaySongAction(-1))}></button>
          <button className="sprite_playbar btn play" onClick={e => play()}></button>
          <button className="sprite_playbar btn next" 
                  onClick={e => dispatch(changePlaySongAction(1))}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime * 1000)}</span>
                <span className="divider">/</span>
                <span className="total-time">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence}>
          <div className="left">
            <Tooltip title="下载音乐">
              <a
                download={currentSong && currentSong.name}
                target="_blank"
                rel="noopener noreferrer"
                href={songUrl}
              >
                <DownloadOutlined />
              </a>
            </Tooltip>
            <Tooltip title="重新播放">
              <UndoOutlined className="refresh" onClick={refreshMusic} />
            </Tooltip>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <Tooltip
              title={[
                '顺序播放',
                '随机播放',
                '单曲循环',
              ].filter((item, index) =>
                index === playSequence ? item : undefined
              )}
            >
            <button className="sprite_playbar btn loop" 
                    onClick={e => dispatch(changePlaySequenceAction(playSequence+1))}></button>
            </Tooltip>
            
            <button className="sprite_playbar btn playlist" 
                    onClick={e => setShowPanel(!showPanel)}>
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded}/>
      {/* {showPanel && <HYAppPlayPanel />} */}
    </PlaybarWrapper>
  )
})