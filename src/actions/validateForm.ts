export function validateForm(
    name: any,
    userEmail: any,
    text: any,
): true {
    const errors = { name: "", userEmail: "", text: "" };

    if (typeof name !== "string" || name.length < 3) {
        errors.name += "Please enter a username. ";
    }
    if (typeof userEmail !== "string" || userEmail.length < 6) {
        errors.userEmail += "Email is not valid. ";
    }

    if (typeof text !== "string" || text.length < 15) {
        errors.text += "Message too short. ";
    }

    const hasErrors = Object.values(errors).some((msg) => msg);

    if (hasErrors) {
        throw new Error("Form validation failed");
    }

    return true;
}