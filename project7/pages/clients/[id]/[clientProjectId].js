import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  const { id, clientProjectId } = router.query;
  return (
    <div>
      <h1>Client {id} Project Page {clientProjectId}</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
