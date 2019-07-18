export const fetchData = async (path, options) => {
  const response = await fetch(`${process.env.React_APP_BACKEND_URL}/api/v1${path}`, options)
  if(response.ok) {
    const data = await response.json();
    return data
  } else {
    const error = await response.json();
    throw new Error(error);
  }
}