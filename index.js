// Tải các thư viện cần thiết
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Sử dụng file db.json
const middlewares = jsonServer.defaults();

// Render sẽ tự động cung cấp một biến PORT
// Nếu không có, chúng ta dùng cổng 10000
const port = process.env.PORT || 10000;

// Cài đặt các middleware mặc định (như log, cors...)
server.use(middlewares);

// Sử dụng router của json-server
server.use(router);

// Khởi động server
server.listen(port, () => {
  console.log(`JSON Server đang chạy trên cổng ${port}`);
});
