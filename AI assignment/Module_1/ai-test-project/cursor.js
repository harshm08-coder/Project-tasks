function validateUser(user) {

    // Check if user is an object
    if (typeof user !== 'object' || user === null) {
        return { valid: false, errors: ['User must be an object.'] };
    }

    const errors = [];

    // Name validation
    if (!user.name || typeof user.name !== 'string' || user.name.trim().length === 0) {
        errors.push('Name must be a non-empty string.');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.email || typeof user.email !== 'string' || !emailRegex.test(user.email)) {
        errors.push('Email must be a valid email address.');
    }

    // Optional role check (if role exists)
    if (user.role && user.role === "admin") {
        console.log("User is admin");
    }

    // Age validation
    if (
        user.age === undefined ||
        typeof user.age !== 'number' ||
        !Number.isInteger(user.age) ||
        user.age < 0
    ) {
        errors.push('Age must be a non-negative integer.');
    }

    return {
        valid: errors.length === 0,
        errors: errors
    };
}
const user = {
    name: "John",
    email: "john@test.com",
    age: 25,
    role: "admin"
};

console.log(validateUser(user));

