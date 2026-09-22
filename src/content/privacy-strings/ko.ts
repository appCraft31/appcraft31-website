import type { PrivacyStrings } from './keys';

/** 한국어 (hangugeo — coréen). */
export const strings: PrivacyStrings = {
  referenceVersion: (url) =>
    `이 문서는 번역본입니다. 내용에 차이가 있을 경우 ${url} 의 프랑스어판이 기준이 됩니다.`,

  responsibleTitle: '책임 주체',
  publishedBy: (app, email) =>
    `${app}은(는) 프랑스 툴루즈에 자리한 독립 스튜디오 AppCraft31이 제공합니다. 이 방침에 관한 문의는 ${email} 로 보내 주세요.`,
  policyScope: (platforms) =>
    `이 방침은 ${platforms}에서 앱이 실제로 데이터를 어떻게 다루는지 설명합니다.`,

  localTitle: '기기에 남는 것',
  localIntro: (app) =>
    `${app}은(는) 다음 항목을 기기 저장소에 보관합니다. 어떤 서버로도 전송되지 않으며, 앱을 삭제하면 함께 사라집니다.`,
  localIntroCloud: (app) =>
    `${app}은(는) 다음 항목을 기기 저장소에 보관합니다. 스튜디오 서버로는 전송되지 않습니다.`,

  adsTitle: '광고',
  adsIntro: (app, network, formats) =>
    `${app}은(는) 무료이며 ${network} SDK를 포함합니다. 형식은 다음과 같습니다: ${formats}. ${network}은(는) 유럽경제지역·영국·스위스 이용자에게는 Google Ireland Limited가, 그 밖의 지역에서는 Google LLC가 제공합니다.`,
  adsProcessing:
    '이 과정에서 Google은 기기의 광고 식별자, 앱과 연결된 식별자, 광고 상호작용 데이터(노출, 클릭)를 처리할 수 있습니다.',
  adsMediation: (partners) =>
    `광고 요청은 AdMob 미디에이션이 조정하며, 앱에 SDK가 포함된 다른 광고 네트워크로 넘어갈 수 있습니다: ${partners}. 광고가 배정되면 해당 네트워크 역시 자체 개인정보 처리방침에 따라 광고 식별자, 앱 관련 식별자, 광고 상호작용 데이터를 처리합니다.`,
  adsMediationConsent:
    '동의 화면에서 하신 선택은 Google과 마찬가지로 이 네트워크들에도 적용되며, 광고 요청마다 함께 전달됩니다.',
  adsAtt:
    'iOS에서는 첫 실행 때 활동 추적을 허용할지 시스템이 묻습니다. 거부하시면 광고 식별자(IDFA)는 공유되지 않고 광고도 맞춤 설정되지 않습니다.',
  adsUmp:
    '유럽경제지역, 영국, 스위스에서는 GDPR을 따르는 동의 화면을 Google User Messaging Platform으로 표시합니다. 광고 목적의 데이터 사용에 대해 동의, 거부 또는 개별 설정을 선택할 수 있습니다.',
  adsUmpNoReopen:
    '이 선택은 Google SDK가 보관합니다. 앱에는 아직 이 양식을 다시 여는 화면이 없습니다. 앱을 삭제한 뒤 다시 설치하면 양식이 다시 표시됩니다.',
  adsUmpReopen: '이 선택은 앱 설정에서 언제든지 바꿀 수 있습니다.',
  adsRemovedBy: (purchase) => `‘${purchase}’을(를) 구매하면 앱에서 광고가 영구히 사라집니다.`,
  adsNone: (app) =>
    `${app}은(는) 어떤 광고도 표시하지 않습니다. 광고 네트워크가 포함되어 있지 않으며, 광고 식별자도 읽지 않습니다.`,

  purchasesTitle: '인앱 구매',
  purchasesSome: (app) =>
    `${app}에는 인앱 구매가 있습니다. 결제는 App Store 또는 Google Play가 처리하며, 카드 번호나 주소, 청구 정보를 저희가 받는 일은 없습니다.`,
  purchasesNone: (app) => `${app}에는 인앱 구매가 없습니다.`,

  analyticsTitle: '이용 통계',
  analyticsPurpose: (app, vendors, purpose) =>
    `${app}은(는) ${purpose} 위해 ${vendors}(으)로 데이터를 보냅니다.`,
  analyticsDefault: (app, vendors) =>
    `${app}은(는) 앱의 결함을 고치려는 목적으로만 ${vendors}(으)로 데이터를 보냅니다.`,
  analyticsOptOut: '이 전송은 앱 설정에서 언제든지 끌 수 있습니다.',
  analyticsAnonymous: '이 데이터로 이용자를 식별할 수는 없습니다.',
  analyticsNone: (app) =>
    `${app}에는 이용 통계, 사용 기록, 오류 보고 도구가 전혀 들어 있지 않습니다.`,

  networkTitle: '네트워크 연결',
  networkPurpose: (purpose) => `앱은 ${purpose} 위해 통신을 사용합니다.`,
  networkOffline: (app, hasAds) =>
    `${app}은(는) 완전히 오프라인으로 동작합니다.${hasAds ? ' 광고를 불러올 때를 빼면' : ''} 이용에 연결이 필요하지 않습니다.`,

  accountsSignInTitle: '계정 로그인',
  accountsServiceTitle: '계정과 게임 서비스',
  accountsNoneTitle: '계정',
  accountsService: (app, service, what) =>
    `${app}은(는) 계정 생성을 요구하지 않습니다. ${service}은(는) ${what}에 쓰이며, 그 범위에서 전송되는 것은 ${service} 닉네임과 점수뿐이고 전송은 Apple의 서비스를 통해 이루어집니다.`,
  accountsNone: (app) =>
    `${app}은(는) 계정 생성을 요구하지 않으며, 어떤 로그인 서비스도 사용하지 않습니다.`,

  childrenTitle: '어린이',
  childrenAimed: (app) =>
    `${app}은(는) 어린이를 위한 앱이며, 각 스토어의 가족 프로그램 규정을 따릅니다.`,
  childrenNotAimed: (app) =>
    `${app}은(는) 만 13세 미만 어린이를 특별히 대상으로 하지 않으며, 어린이의 개인정보를 고의로 수집하지 않습니다.`,
  childrenAds: '노출되는 광고는 가족용 콘텐츠 등급에 맞도록 설정되어 있습니다.',

  rightsTitle: '이용자의 권리',
  rightsUninstall:
    '위에 설명한 데이터는 기기에 남으므로, 지우는 가장 확실한 방법은 앱을 삭제하는 것입니다. 모든 것이 앱과 함께 사라집니다.',
  rightsUninstallCloud:
    '앱을 삭제하면 기기에 저장된 데이터가 지워집니다. iCloud 사본은 기기의 iCloud 설정(저장 공간 관리)에서 삭제할 수 있습니다.',
  rightsGdpr: (email) =>
    `또한 유럽 일반개인정보보호법(GDPR)은 열람, 정정, 삭제, 처리 제한, 반대의 권리를 보장합니다. 행사를 원하시면 ${email} 로 연락해 주세요.`,
  rightsAdNetworks: (networks, inApp) =>
    `광고 네트워크가 처리하는 데이터에 대해서는 각 사업자에게 권리를 행사하게 됩니다: ${networks}. ${inApp ? '광고 관련 선택은 앱 설정과 기기 설정에서 언제든지 바꿀 수 있습니다.' : '광고 관련 선택은 기기 설정에서 언제든지 바꿀 수 있습니다.'}`,

  changesTitle: '변경 사항',
  changes: (date) =>
    `이 방침은 앱과 함께 바뀔 수 있습니다. 변경 사항은 날짜와 함께 이 페이지에 공개합니다. 최종 수정일: ${date}.`,

  contactTitle: '문의',
  contact: (email) =>
    `이 문서에 대한 질문이나 요청, 궁금한 점이 있으면 ${email} 로 보내 주세요. 모든 문의에 답변드립니다.`,

  formats: { banner: '배너', interstitial: '전면 광고', rewarded: '보상형 동영상' },
  kinds: {
    'non-consumable': '영구 구매',
    consumable: '소모성 구매',
    subscription: '구독',
  },

  joinLast: (head, last) => `${head}, ${last}`,
  formatDate: (y, m, d) => `${y}년 ${m}월 ${d}일`,
};
