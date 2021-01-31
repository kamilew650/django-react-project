export default function fetchAutorized(endpoint, method, payload) {
  let token = window.localStorage.getItem("token");
  token = token.slice(1, token.length - 1);
  return fetch(
    `http://${process.env.REACT_APP_API_ADDRESS}:${process.env.REACT_APP_API_PORT}/${endpoint}`,
    {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: payload ? JSON.stringify(payload) : null,
    }
  );
}
