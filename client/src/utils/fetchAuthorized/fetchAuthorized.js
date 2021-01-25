export default function fetchAutorized(endpoint, method, payload) {
  return fetch(
    `http://${process.env.REACT_APP_API_ADDRESS}:${process.env.REACT_APP_API_PORT}/${endpoint}`,
    {
      method: method,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: payload ? JSON.stringify(payload) : null,
    }
  );
}
