const getParams = () => {
  const findParams = window.location.href.split('?');
  return findParams[1]
}

export default getParams;
