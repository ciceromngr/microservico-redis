import http from "./http";
const port = process.env.SERVER_PORT || 8585
http.listen(port, () => console.log(`Microservice redis running at port: ${port}`))