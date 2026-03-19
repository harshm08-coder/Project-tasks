function validateUser(user) {
  // Validate name
  if (!user.name || typeof user.name !== 'string' || user.name.trim() === '') {
    return { valid: false, error: 'Name is required and must be a non-empty string' };
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!user.email || !emailRegex.test(user.email)) {
    return { valid: false, error: 'Email is required and must be a valid email address' };
  }

  // Validate age
  if (typeof user.age !== 'number' || user.age < 0 || user.age > 120 || !Number.isInteger(user.age)) {
    return { valid: false, error: 'Age must be an integer between 0 and 120' };
  }

  return { valid: true };
}

// Example usage:
const testUser1 = { name: 'John Doe', email: 'john@example.com', age: 30 };
console.log(validateUser(testUser1));

const testUser2 = { name: 'Jane Smith', email: 'invalid-email', age: 25 };
console.log(validateUser(testUser2));

const testUser3 = { name: '', email: 'test@example.com', age: 28 };
console.log(validateUser(testUser3));
