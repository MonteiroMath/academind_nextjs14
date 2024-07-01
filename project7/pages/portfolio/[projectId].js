import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  const { projectId } = router.query;

  return (
    <div>
      <h1>Portfolio Project Page {projectId}</h1>
    </div>
  );
}

export default PortfolioProjectPage;
