const makeDelaySearch = (delay = 200) => {
  let timeout = null;

  return (callback) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      callback();
    }, delay);
  };
};

const delaySearch = makeDelaySearch(200)

export { makeDelaySearch, delaySearch };