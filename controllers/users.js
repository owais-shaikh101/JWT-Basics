import jwt from "jsonwebtoken";
import BadRequestError from "../errors/badRequestError.js";

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please enter username or password!");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User Created!", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

export { login, dashboard };
