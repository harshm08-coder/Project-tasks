function validateUser(user) {
  if (!user) return false;

  // Check name
  if (typeof user.name !== "string" || user.name.trim() === "") {
    return false;
  }

  // Check email using simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof user.email !== "string" || !emailRegex.test(user.email)) {
    return false;
  }

  // Check age
  if (typeof user.age !== "number" || user.age < 18) {
    return false;
  }

  return true;
}
const user = {
  name: "Harsh",
  email: "harsh@gmail.com",
  age: 21
};

console.log(validateUser(user));