const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [
  { email: "admin@example.com", password: "admin1234", name: "Admin" },
];

app.get("/api/backend-status", (req, res) => {
  res.json({ message: "Server is Running." });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({
      success: true,
      message: "เข้าสู่ระบบสำเร็จ!",
      user: { name: user.name, email: user.email },
    });
  } else {
    res.status(401).json({
      success: false,
      message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Mock backend running on port ${PORT}`));
