export const validateEmail = (email) => {
    return { error: email === "" } /* TODO */
};

const validatePassword = (password) => {
    return { error: password === "" } /* TODO */
}

export const validatePasswords = (password, confirmPassword = password) => {
    if (validatePassword(password).error) {
        return { error: "Password is not valid"}
    }

    if (validatePassword(confirmPassword).error) {
        return { error: "Confirm password is not valid"}
    }

    if (password !== confirmPassword) {
        return { error: "Passwords do not match"}
    }

    return { error: null }
};
