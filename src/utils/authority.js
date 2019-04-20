
import s from 'store2'

// 由于app中的webView不支持window.localStorage (getItem/setItem) 所以使用store2对本地存储做了兼容处理


// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('antd-mobile-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? s('antd-mobile-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || ['admin'];
}

export function setAuthority(authority) {
  const Authority = typeof authority === 'string' ? [authority] : authority;
  return s('antd-mobile-authority', JSON.stringify(Authority));
}
