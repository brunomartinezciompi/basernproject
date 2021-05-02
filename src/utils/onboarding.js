export const validateEmail = (email) => {
    return true /* TODO */
};

const validatePassword = (password) => {
    return true /* TODO */
}

export const validatePasswords = (password, confirmPassword) => {
    if (!validatePassword(password)) {
        return { error: "Password is not valid"}
    }

    if (!validatePassword(confirmPassword)) {
        return { error: "Confirm password is not valid"}
    }

    if (password !== confirmPassword) {
        return { error: "Passwords do not match"}
    }

    return { error: null }
};
