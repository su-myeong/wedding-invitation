import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"
import image1 from "./image/image1.png"
import image2 from "./image/image2.png"
import image3 from "./image/image3.png"
import image4 from "./image/image4.png"
import image5 from "./image/image5.png"
import image6 from "./image/image6.png"
import image7 from "./image/image7.png"
import image8 from "./image/image8.png"
import image9 from "./image/image9.png"
import image10 from "./image/image10.png"
import image11 from "./image/image11.png"
import image12 from "./image/image12.png"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2025-11-16 14:20", "Asia/Seoul")
export const HOLIDAYS = [15]

export const LOCATION = "퀸벨호텔 9층 퀸즈가든홀"
export const LOCATION_ADDRESS = "대구시 동구 동촌로 200, 퀸벨호텔 9층"

export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

export const WEDDING_HALL_POSITION = [126.9594982, 37.4657134]

export const NMAP_PLACE_ID = 13321741
export const KMAP_PLACE_ID = 8634826

export const BRIDE_FULLNAME = "손경원"
export const BRIDE_FIRSTNAME = "경원"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "장인어른 성함"
export const BRIDE_MOTHER = "장모님 성함"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-7522-6011",
    account: "대구은행 0000000000000",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-0000-0000",
    account: "00은행 00000000000",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-0000-0000",
    account: "00은행 00000000000000",
  },
]

export const GROOM_FULLNAME = "김수명"
export const GROOM_FIRSTNAME = "수명"
export const GROOM_TITLE = "장남"
export const GROOM_FATHER = "故김청봉"
export const GROOM_MOTHER = "곽은정"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-6236-0460",
    account: "하나은행 50191059047407",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-3670-0460",
    account: "농협은행 35212872322763",
  },
]

export const GALLERY_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
]
