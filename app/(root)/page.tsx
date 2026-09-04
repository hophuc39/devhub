import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import auth from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <h1>This is Home Page</h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await auth.api.signOut({
            headers: await headers(),
          });
          redirect(ROUTES.SIGN_IN);
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
