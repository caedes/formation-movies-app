const apiUrl = "//localhost:3000";

/**
 * moviesFecth to enhance all the Movies product request
 * @param {string} route
 * @returns Promise
 */
export default function moviesFetch(route, options = {}) {
  return fetch(`${apiUrl}${route}`, {
    ...options,
    headers: { ...options.headers, "x-session": "formation" },
  });
}
