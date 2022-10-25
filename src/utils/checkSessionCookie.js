const checkSessionCookie = (cookieName) => {
  const name = `${cookieName}=`;
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookies = decodedCookies.split("; ");

  let isCookieMatched = false;

  cookies.forEach((value) => {
    if (value.indexOf(name) === 0) {
      isCookieMatched = true;
    }
  });

  return isCookieMatched;
};

export default checkSessionCookie;
