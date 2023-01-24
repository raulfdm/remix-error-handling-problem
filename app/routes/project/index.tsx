import { redirect } from '@remix-run/node';

export async function loader() {
  try {
    const latestProjectId = await getNewestProjectId();

    return redirect(`/project/${latestProjectId}`);
  } catch (error) {
    console.log('Something went wrong :(');
    throw error;
  }
}

const projectIds = [1, 2, 3, 4, 5];

async function getNewestProjectId() {
  const latestProjectId = projectIds[projectIds.length - 1];
  throw new Error('Something went wrong :(');
  return latestProjectId;
}

export function ErrorBoundary() {
  return <h1>on no Error on "app/routes/project/index.tsx"</h1>;
}

export function CatchBoundary() {
  // const caught = useCatch()
  return <h1>oh no Catch</h1>;
}
