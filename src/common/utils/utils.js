export function getSysLanguage (defaultValue) {
  let supportedLangs = ['en', 'zh']
  let lang = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language).substr(0, 2)
  if (lang && supportedLangs.indexOf(lang) >= 0) {
    return lang
  } else {
    return defaultValue
  }
}
