import type { APIRoute } from "astro";
//import { isLoggedIn } from '~/utils/utils';
import { checkCredentials } from '~/utils/utils';


export const post: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Missing form data", { status: 400 });
  }

  if (checkCredentials(email, password)) {
    return redirect("/page-with-images");
  } else {
    return new Response("Invalid login credentials", { status: 401 });
  }
};