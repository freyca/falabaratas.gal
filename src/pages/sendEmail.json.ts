import type { APIRoute } from "astro";
import { validateForm } from "../actions/validateForm";
import { sendEmail } from "../actions/sendEmail";

export const POST: APIRoute = async ({ request }) => {
    let redirectDestination = "/contacto?success=false";

    if (request.headers.get("Content-Type") === "application/x-www-form-urlencoded") {
        const formData = await request.formData();
        const username = formData.get('username');
        const email = formData.get('email');
        const message = formData.get('message');

        try {
            validateForm(username, email, message);
            const emailStatus = await sendEmail(username, email, message);

            console.log(emailStatus);

            if (emailStatus) {
                redirectDestination = "contacto?success=true";
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Redirect to the given destination
    return new Response(null, {
        status: 303, // POST -> GET redirect
        headers: {
            Location: redirectDestination,
        },
    });
};
