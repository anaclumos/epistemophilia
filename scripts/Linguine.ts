export const LinguineProvider = {
  BING: 'BING',
  GOOGLE: 'GOOGLE',
  DEEPL: 'DEEPL',
} as const

export const LinguineConfig = {
  af: { name: 'Afrikaans', provider: LinguineProvider.BING },
  ak: { name: 'Twi (Akan)', provider: LinguineProvider.GOOGLE },
  am: { name: 'Amharic', provider: LinguineProvider.BING },
  ar: { name: 'Arabic', provider: LinguineProvider.BING },
  as: { name: 'Assamese', provider: LinguineProvider.BING },
  ay: { name: 'Aymara', provider: LinguineProvider.GOOGLE },
  az: { name: 'Azerbaijani', provider: LinguineProvider.BING },
  ba: { name: 'Bashkir', provider: LinguineProvider.BING },
  be: { name: 'Belarusian', provider: LinguineProvider.GOOGLE },
  bg: { name: 'Bulgarian', provider: LinguineProvider.DEEPL },
  bho: { name: 'Bhojpuri', provider: LinguineProvider.GOOGLE },
  bm: { name: 'Bambara', provider: LinguineProvider.GOOGLE },
  bn: { name: 'Bengali', provider: LinguineProvider.BING },
  bo: { name: 'Tibetan', provider: LinguineProvider.BING },
  bs: { name: 'Bosnian', provider: LinguineProvider.BING },
  ca: { name: 'Catalan', provider: LinguineProvider.BING },
  ceb: { name: 'Cebuano', provider: LinguineProvider.GOOGLE },
  ckb: { name: 'Kurdish (Sorani)', provider: LinguineProvider.GOOGLE },
  co: { name: 'Corsican', provider: LinguineProvider.GOOGLE },
  cs: { name: 'Czech', provider: LinguineProvider.DEEPL },
  cy: { name: 'Welsh', provider: LinguineProvider.BING },
  da: { name: 'Danish', provider: LinguineProvider.DEEPL },
  de: { name: 'German', provider: LinguineProvider.DEEPL },
  doi: { name: 'Dogri', provider: LinguineProvider.GOOGLE },
  dv: { name: 'Dhivehi', provider: LinguineProvider.BING },
  ee: { name: 'Ewe', provider: LinguineProvider.GOOGLE },
  el: { name: 'Greek', provider: LinguineProvider.DEEPL },
  en: { name: 'English', provider: LinguineProvider.DEEPL },
  eo: { name: 'Esperanto', provider: LinguineProvider.GOOGLE },
  es: { name: 'Spanish', provider: LinguineProvider.DEEPL },
  et: { name: 'Estonian', provider: LinguineProvider.DEEPL },
  eu: { name: 'Basque', provider: LinguineProvider.BING },
  fa: { name: 'Persian', provider: LinguineProvider.BING },
  fi: { name: 'Finnish', provider: LinguineProvider.DEEPL },
  fil: { name: 'Filipino (Tagalog)', provider: LinguineProvider.BING },
  fj: { name: 'Fijian', provider: LinguineProvider.BING },
  fo: { name: 'Faroese', provider: LinguineProvider.BING },
  fr: { name: 'French', provider: LinguineProvider.DEEPL },
  fy: { name: 'Frisian', provider: LinguineProvider.GOOGLE },
  ga: { name: 'Irish', provider: LinguineProvider.BING },
  gd: { name: 'Scots Gaelic', provider: LinguineProvider.GOOGLE },
  gl: { name: 'Galician', provider: LinguineProvider.BING },
  gn: { name: 'Guarani', provider: LinguineProvider.GOOGLE },
  gom: { name: 'Konkani', provider: LinguineProvider.GOOGLE },
  gu: { name: 'Gujarati', provider: LinguineProvider.BING },
  ha: { name: 'Hausa', provider: LinguineProvider.GOOGLE },
  haw: { name: 'Hawaiian', provider: LinguineProvider.GOOGLE },
  he: { name: 'Hebrew', provider: LinguineProvider.BING },
  hi: { name: 'Hindi', provider: LinguineProvider.BING },
  hmn: { name: 'Hmong', provider: LinguineProvider.GOOGLE },
  hr: { name: 'Croatian', provider: LinguineProvider.BING },
  hsb: { name: 'Upper Sorbian', provider: LinguineProvider.BING },
  ht: { name: 'Haitian Creole', provider: LinguineProvider.BING },
  hu: { name: 'Hungarian', provider: LinguineProvider.DEEPL },
  hy: { name: 'Armenian', provider: LinguineProvider.BING },
  id: { name: 'Indonesian', provider: LinguineProvider.DEEPL },
  ig: { name: 'Igbo', provider: LinguineProvider.GOOGLE },
  ikt: { name: 'Inuinnaqtun', provider: LinguineProvider.BING },
  ilo: { name: 'Ilocano', provider: LinguineProvider.GOOGLE },
  is: { name: 'Icelandic', provider: LinguineProvider.BING },
  it: { name: 'Italian', provider: LinguineProvider.DEEPL },
  iu: { name: 'Inuktitut', provider: LinguineProvider.BING },
  ja: { name: 'Japanese', provider: LinguineProvider.DEEPL },
  jv: { name: 'Javanese', provider: LinguineProvider.GOOGLE },
  ka: { name: 'Georgian', provider: LinguineProvider.GOOGLE },
  kk: { name: 'Kazakh', provider: LinguineProvider.BING },
  km: { name: 'Khmer', provider: LinguineProvider.BING },
  kmr: { name: 'Kurdish (Northern)', provider: LinguineProvider.BING },
  kn: { name: 'Kannada', provider: LinguineProvider.BING },
  ko: { name: 'Korean', provider: LinguineProvider.DEEPL },
  kri: { name: 'Krio', provider: LinguineProvider.GOOGLE },
  ku: { name: 'Kurdish', provider: LinguineProvider.BING },
  ky: { name: 'Kyrgyz', provider: LinguineProvider.BING },
  la: { name: 'Latin', provider: LinguineProvider.GOOGLE },
  lb: { name: 'Luxembourgish', provider: LinguineProvider.GOOGLE },
  lg: { name: 'Luganda', provider: LinguineProvider.GOOGLE },
  ln: { name: 'Lingala', provider: LinguineProvider.GOOGLE },
  lo: { name: 'Lao', provider: LinguineProvider.BING },
  lt: { name: 'Lithuanian', provider: LinguineProvider.DEEPL },
  lus: { name: 'Mizo', provider: LinguineProvider.GOOGLE },
  lv: { name: 'Latvian', provider: LinguineProvider.DEEPL },
  mai: { name: 'Maithili', provider: LinguineProvider.GOOGLE },
  mg: { name: 'Malagasy', provider: LinguineProvider.BING },
  mi: { name: 'Maori', provider: LinguineProvider.BING },
  mk: { name: 'Macedonian', provider: LinguineProvider.BING },
  ml: { name: 'Malayalam', provider: LinguineProvider.BING },
  mn: { name: 'Mongolian', provider: LinguineProvider.BING },
  mni: { name: 'Meiteilon (Manipuri)', provider: LinguineProvider.GOOGLE },
  mr: { name: 'Marathi', provider: LinguineProvider.BING },
  ms: { name: 'Malay', provider: LinguineProvider.BING },
  mt: { name: 'Maltese', provider: LinguineProvider.BING },
  mww: { name: 'Hmong Daw', provider: LinguineProvider.BING },
  my: { name: 'Myanmar (Burmese)', provider: LinguineProvider.BING },
  ne: { name: 'Nepali', provider: LinguineProvider.BING },
  nl: { name: 'Dutch', provider: LinguineProvider.DEEPL },
  nb: { name: 'Norwegian', provider: LinguineProvider.DEEPL },
  nso: { name: 'Sepedi', provider: LinguineProvider.GOOGLE },
  ny: { name: 'Nyanja (Chichewa)', provider: LinguineProvider.GOOGLE },
  om: { name: 'Oromo', provider: LinguineProvider.GOOGLE },
  or: { name: 'Odia (Oriya)', provider: LinguineProvider.BING },
  otq: { name: 'Queretaro Otomi', provider: LinguineProvider.BING },
  pa: { name: 'Punjabi', provider: LinguineProvider.BING },
  pl: { name: 'Polish', provider: LinguineProvider.DEEPL },
  prs: { name: 'Dari', provider: LinguineProvider.BING },
  ps: { name: 'Pashto', provider: LinguineProvider.BING },
  pt: {
    name: 'Portuguese (Portugal, Brazil)',
    provider: LinguineProvider.DEEPL,
  },
  qu: { name: 'Quechua', provider: LinguineProvider.GOOGLE },
  ro: { name: 'Romanian', provider: LinguineProvider.DEEPL },
  ru: { name: 'Russian', provider: LinguineProvider.DEEPL },
  rw: { name: 'Kinyarwanda', provider: LinguineProvider.GOOGLE },
  sa: { name: 'Sanskrit', provider: LinguineProvider.GOOGLE },
  sd: { name: 'Sindhi', provider: LinguineProvider.GOOGLE },
  si: { name: 'Sinhala (Sinhalese)', provider: LinguineProvider.GOOGLE },
  sk: { name: 'Slovak', provider: LinguineProvider.DEEPL },
  sl: { name: 'Slovenian', provider: LinguineProvider.DEEPL },
  sm: { name: 'Samoan', provider: LinguineProvider.BING },
  sn: { name: 'Shona', provider: LinguineProvider.GOOGLE },
  so: { name: 'Somali', provider: LinguineProvider.BING },
  sq: { name: 'Albanian', provider: LinguineProvider.BING },
  sr: { name: 'Serbian', provider: LinguineProvider.BING },
  st: { name: 'Sesotho', provider: LinguineProvider.GOOGLE },
  su: { name: 'Sundanese', provider: LinguineProvider.GOOGLE },
  sv: { name: 'Swedish', provider: LinguineProvider.DEEPL },
  sw: { name: 'Swahili', provider: LinguineProvider.BING },
  ta: { name: 'Tamil', provider: LinguineProvider.BING },
  te: { name: 'Telugu', provider: LinguineProvider.BING },
  tg: { name: 'Tajik', provider: LinguineProvider.GOOGLE },
  th: { name: 'Thai', provider: LinguineProvider.BING },
  ti: { name: 'Tigrinya', provider: LinguineProvider.BING },
  tk: { name: 'Turkmen', provider: LinguineProvider.BING },
  tl: { name: 'Tagalog (Filipino)', provider: LinguineProvider.GOOGLE },
  to: { name: 'Tongan', provider: LinguineProvider.BING },
  tr: { name: 'Turkish', provider: LinguineProvider.DEEPL },
  ts: { name: 'Tsonga', provider: LinguineProvider.GOOGLE },
  tt: { name: 'Tatar', provider: LinguineProvider.BING },
  ty: { name: 'Tahitian', provider: LinguineProvider.BING },
  ug: { name: 'Uyghur', provider: LinguineProvider.BING },
  uk: { name: 'Ukrainian', provider: LinguineProvider.DEEPL },
  ur: { name: 'Urdu', provider: LinguineProvider.BING },
  uz: { name: 'Uzbek', provider: LinguineProvider.BING },
  vi: { name: 'Vietnamese', provider: LinguineProvider.BING },
  xh: { name: 'Xhosa', provider: LinguineProvider.GOOGLE },
  yi: { name: 'Yiddish', provider: LinguineProvider.GOOGLE },
  yo: { name: 'Yoruba', provider: LinguineProvider.GOOGLE },
  yua: { name: 'Yucatec Maya', provider: LinguineProvider.BING },
  yue: { name: 'Cantonese (Traditional)', provider: LinguineProvider.BING },
  'zh-CN': { name: 'Chinese (Simplified)', provider: LinguineProvider.DEEPL },
  'zh-TW': { name: 'Chinese (Traditional)', provider: LinguineProvider.BING },
  zu: { name: 'Zulu', provider: LinguineProvider.BING },
}

// export const LinguineList = Object.keys(LinguineConfig)
export const LinguineList = ['ko']