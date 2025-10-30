const login = (req, res) => {
  const { email, password } = req.body;

  // Simple dummy check (replace with DB check later)
  if (email === 'test@example.com' && password === '123456') {
    return res.json({ success: true, message: 'Login successful!' });
  }

  res.status(401).json({ success: false, message: 'Invalid credentials' });
};

module.exports = { login };
