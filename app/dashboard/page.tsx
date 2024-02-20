import { db } from "@/lib/db";

async function getUserDetails() {
  return await db.employees.findFirst({
    where: { isAdmin: true, isActive: true },
  });
}
const Page = async () => {
  let user = await getUserDetails();
  return (
    <div>
      {user?.id} - {user?.name} | {user?.email} | {user?.role}
    </div>
  );
};

export default Page;
