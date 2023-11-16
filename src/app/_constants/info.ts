export const DEPARTMENT_LIST = [
  '경영학전공',
  '글로벌경영학전공',
  '회계세무학전공',
  '금융수학전공',
  '빅데이터경영전공',
  '미디어커뮤니케이션학과',
  '관광경영학과',
  '경제학과',
  '의료산업경영학과',
  '응용통계학과',
  '사회복지학과',
  '유아교육학과',
  '심리학과',
  '패션산업학과',
  '한국어문학과',
  '영미어문학과',
  '유럽어문학과',
  '법학과',
  '경찰행정학과',
  '행정학과',
  '도시계획학전공',
  '조경학전공',
  '실내건축학전공',
  '건축학전공',
  '건축공학전공',
  '설비소방공학과',
  '화공생명공학전공',
  '배터리공학전공',
  '기계공학전공',
  '산업공학전공',
  '스마트팩토리전공',
  '토목환경공학과',
  '신소재공학과',
  '미래자동차학과',
  '식품생명공학과',
  '식품영양학과',
  '바이오나노학과',
  '생명과학과',
  '물리학과',
  '화학과',
  '전자공학전공',
  '반도체공학전공',
  '차세대반도체설계전공',
  '반도체-디스플레이학과',
  '반도체설계학과',
  '클라우드공학과',
  '소프트웨어전공',
  '인공지능전공',
  '컴퓨터공학전공',
  '스마트보안전공',
  '전기공학과',
  '스마트시티학과',
  '의공학과',
  '바이오의료기기학과',
  '게임·영상학과학과',
  '한의예과',
  '회화·조소전공',
  '디자인전공',
  '성악전공',
  '기악전공',
  '작곡전공',
  '체육전공',
  '태권도전공',
  '연기예술학과',
  '운동재활학과',
  '자유전공',
  '의예과',
  '약학과',
  '바이오로직스학과',
  '간호학과',
  '치위생학과',
  '방사선학과',
  '물리치료학과',
  '응급구조학과',
]

export const MOODE_LIST = ['']

export const NICK_NAME_PAGE = {
  GREETINGS: '가입을 축하드려요!\n어떻게 불러드리면 될까요?',
  WRNING: '닉네임은 한번 정하면 수정할 수 없어요!',
  INPUTBOX: '닉네임을 입력하세요.',
  GUID: '5글자 이내로 입력해주세요.',
} as const

export const GENDER_PAGE = {
  GREETINGS: '안녕하세요!\n무디에게 성별을 알려주세요.',
  MALE: '남자 무디',
  FEMALE: '여자 무디',
} as const

export const MY_AGE_PAGE = {
  GREETINGS: '무디가 당신의 나이를 궁금해해요!',
  WRININGS: '출생년도를 기준으로 골라주세요.',
  MAX: '94',
  MIN: '04',
  AVG: '99',
} as const

export const MY_DEPARTMENT_PAGE = {
  GREETINGS: '무디에게 학과를 알려주세요!',
  GUIDE: '학과를 선택하세요.',
  DEPARTMENT_LIST,
} as const

export const MY_KEYWORD_PAGE = {
  GREETINGS: '무디에게 여러분을 소개해주세요!',
  GUIDE: '여러분을 나타내는 키워드를 3개 선택해주세요.',
  KEYWORD_LIST: [
    '인기짱',
    '고양이',
    '강아지',
    '혼자가 좋아',
    '감성충만',
    '상상력왕',
    '방콕러',
    '반려인',
    '귀요미',
    '쩝쩝박사',
    '몸짱',
    '얼굴천재',
    '패셔니스타',
    '장난꾸러기',
    '트렌드세터',
    '섹시도발',
    '마이웨이',
  ],
} as const

export const MOODIE_AGE_PAGE = {
  GREETINGS: '무디의 나이를 설정해주세요!',
  WRININGS: '출생년도를 기준으로 골라주세요.',
  MAX: '94',
  MIN: '04',
  AVG: '99',
} as const

export const MATCHING_DEPARTMENT_PAGE = {
  GREETINGS: '어떤 것을 선호하시나요?',
  SAME_DEPT: '같은 학과도 좋아요!',
  DIFF_DEPT: '다른 학과가 좋아요!',
} as const

export const DATE_MOODE_PAGE = {
  GREETING: '무디와 어떤 데이트를 하고 싶나요?',
  MOODE_LIST,
} as const
