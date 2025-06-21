import { Map } from "./map"
import { ReactComponent as CarIcon } from "../../image/car-icon.svg"
import { ReactComponent as BusIcon } from "../../image/bus-icon.svg"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
           <div className="content">
            * KTX/SRT/고속·시외버스 이용시 
             <br />
             동대구역/버스터미널 하차 <b>택시로 15분</b>
           </div>
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 1호선 <b>해안역 3번출구</b> (도보 5분)
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 퀸벨호텔 앞/퀸벨호텔 건너 하차(도보2분)
            <br />
            - 618, 719, 805, 818, 836, 980, 동구1, 동구1-1, 동구2, 동구 3
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>퀸벨호텔</b> 검색
            <br />
            - 주차장이 협소하여 자리가 없을 경우 아래 주차장 이용
          </div>
          <div />
          <div className="content">
              1) 동촌중학교 운동장 주차(도보 2분)
            <br/>
              2) 홈플러스 동촌점 주차(왕복 셔틀버스 5분마다 운행)
            <br/>
              3) 강변 공용 주차장(왕복 셔틀버스 5분마다 운행)
            <br/> 
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
