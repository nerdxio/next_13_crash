import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
import Link from "next/link";
import { Suspense } from "react";

export default function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repos
      </Link>
      
      <Suspense fallback={<div> Loading repo ...</div>}>
        <Repo name={name} />
      </Suspense>
      
      <Suspense fallback={<div> Loading repo ...</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
}
