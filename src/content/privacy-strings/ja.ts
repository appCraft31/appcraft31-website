import type { PrivacyStrings } from './keys';

/**
 * 日本語 (nihongo — japonais).
 *
 * L'énumération japonaise ne se termine pas par un mot : « a、b、c » suffit,
 * d'où un `joinLast` qui pose une virgule idéographique et non un « et ».
 */
export const strings: PrivacyStrings = {
  referenceVersion: (url) =>
    `本文書は翻訳です。内容に相違がある場合は、${url} のフランス語版を正文とします。`,

  responsibleTitle: '管理者について',
  publishedBy: (app, email) =>
    `${app}は、フランス・トゥールーズを拠点とする独立系スタジオ AppCraft31 が提供しています。本ポリシーに関するお問い合わせは ${email} までご連絡ください。`,
  policyScope: (platforms) =>
    `本ポリシーは、${platforms}において、アプリが実際にデータをどう扱うかを説明するものです。`,

  localTitle: '端末内に残るもの',
  localIntro: (app) =>
    `${app}は次の項目を端末内のストレージに保存します。これらはいかなるサーバーにも送信されず、アプリを削除すると消えます。`,

  adsTitle: '広告',
  adsIntro: (app, network, formats) =>
    `${app}は無料であり、${network} の SDK を組み込んでいます。掲載形式は次のとおりです：${formats}。${network} は、欧州経済領域・英国・スイスの利用者に対しては Google Ireland Limited が、それ以外の地域では Google LLC が提供します。`,
  adsProcessing:
    'この過程で Google は、端末の広告識別子、アプリに紐づく識別子、および広告との接触に関するデータ（表示、クリック）を処理する場合があります。',
  adsMediation: (partners) =>
    `広告リクエストは AdMob メディエーションによって振り分けられ、アプリに SDK が組み込まれた他の広告ネットワークに委ねられることがあります：${partners}。配信が割り当てられた場合、これらのネットワークもまた、それぞれのプライバシーポリシーに従い、広告識別子、アプリに紐づく識別子、広告との接触データを処理します。`,
  adsMediationConsent:
    '同意画面でのあなたの選択は、Google と同様にこれらのネットワークにも適用され、広告リクエストのたびに伝えられます。',
  adsAtt:
    'iOS では、初回起動時にアクティビティのトラッキングを許可するかどうかをシステムが確認します。許可しない場合、広告識別子（IDFA）は共有されず、広告はパーソナライズされません。',
  adsUmp:
    '欧州経済領域、英国、スイスでは、GDPR に準拠した同意画面を Google User Messaging Platform を通じて表示します。広告目的でのデータ利用について、同意・拒否・個別設定を選べます。',
  adsUmpNoReopen:
    'この選択は Google の SDK が保持します。本アプリにはこのフォームを開き直す画面がまだありません。アプリを削除して再インストールすると、再び表示されます。',
  adsUmpReopen: 'この選択は、アプリの設定からいつでも変更できます。',
  adsRemovedBy: (purchase) => `「${purchase}」を購入すると、アプリから広告が完全になくなります。`,
  adsNone: (app) =>
    `${app}は広告を一切表示しません。広告ネットワークは組み込まれておらず、広告識別子も読み取りません。`,

  purchasesTitle: 'アプリ内課金',
  purchasesSome: (app) =>
    `${app}にはアプリ内課金があります。決済は App Store または Google Play が処理します。カード番号、住所、請求に関する情報を当スタジオが受け取ることはありません。`,
  purchasesNone: (app) => `${app}にアプリ内課金はありません。`,

  analyticsTitle: '利用状況の計測',
  analyticsPurpose: (app, vendors, purpose) =>
    `${app}は${purpose}ために、${vendors}へデータを送信します。`,
  analyticsDefault: (app, vendors) =>
    `${app}は、アプリの不具合を修正する目的にかぎり、${vendors}へデータを送信します。`,
  analyticsOptOut: 'この送信は、アプリの設定からいつでも停止できます。',
  analyticsAnonymous: 'これらのデータから個人を特定することはできません。',
  analyticsNone: (app) =>
    `${app}には、利用状況の計測、統計、クラッシュレポートのいずれのツールも含まれていません。`,

  networkTitle: 'ネットワーク接続',
  networkPurpose: (purpose) => `本アプリは、${purpose}ために通信を利用します。`,
  networkOffline: (app, hasAds) =>
    `${app}は完全にオフラインで動作します。${hasAds ? '広告の読み込みを除き、' : ''}利用にあたって通信は必要ありません。`,

  accountsSignInTitle: 'アカウントへのログイン',
  accountsServiceTitle: 'アカウントとゲームサービス',
  accountsNoneTitle: 'アカウント',
  accountsService: (app, service, what) =>
    `${app}がアカウントの作成を求めることはありません。${service}は${what}のために使われます。その範囲で送信されるのは、${service}のニックネームとスコアだけであり、送信は Apple のサービスを通じて行われます。`,
  accountsNone: (app) =>
    `${app}がアカウントの作成を求めることはなく、ログインサービスも一切使用しません。`,

  childrenTitle: 'お子さまについて',
  childrenAimed: (app) =>
    `${app}はお子さま向けのアプリであり、各ストアのファミリー向けプログラムの規定に従っています。`,
  childrenNotAimed: (app) =>
    `${app}は13歳未満のお子さまを特に対象としたものではなく、お子さまの個人データを故意に収集することはありません。`,
  childrenAds: '配信される広告は、ファミリー向けコンテンツの区分に沿うよう設定されています。',

  rightsTitle: 'あなたの権利',
  rightsUninstall:
    '上記のデータは端末内に留まるため、消去のもっとも直接的な方法はアプリを削除することです。すべてがアプリとともに消えます。',
  rightsGdpr: (email) =>
    `さらに EU 一般データ保護規則（GDPR）により、アクセス、訂正、消去、処理の制限、異議申立ての権利が認められています。行使をご希望の場合は ${email} までご連絡ください。`,
  rightsAdNetworks: (networks) =>
    `広告ネットワークが処理するデータについては、それぞれの事業者に対して権利を行使することになります：${networks}。なお広告に関する選択は、アプリの設定および端末の設定からいつでも変更できます。`,

  changesTitle: '変更について',
  changes: (date) =>
    `本ポリシーはアプリの更新に合わせて変わることがあります。変更はその日付とともに、このページで公開します。最終更新日：${date}。`,

  contactTitle: 'お問い合わせ',
  contact: (email) =>
    `本文書についてご質問やご要望、ご不明な点があれば ${email} までお寄せください。すべてのお問い合わせにお返事します。`,

  formats: { banner: 'バナー', interstitial: 'インタースティシャル', rewarded: 'リワード動画' },
  kinds: {
    'non-consumable': '買い切り',
    consumable: '消費型アイテム',
    subscription: '定期購読',
  },

  joinLast: (head, last) => `${head}、${last}`,
  formatDate: (y, m, d) => `${y}年${m}月${d}日`,
};
