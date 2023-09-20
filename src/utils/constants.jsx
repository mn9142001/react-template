const AUTH_HEADER = "Bearer"
const HOST = "http://localhost:8000";
const LOGIN = new URL("/user/auth/login/", HOST );
const getLectureUrl = id => new URL(`/lecture/${id}/`, HOST)

export {HOST, LOGIN, AUTH_HEADER, getLectureUrl}