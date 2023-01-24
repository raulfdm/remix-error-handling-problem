import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

export function loader({ params }: LoaderArgs) {
  invariant(params.id, 'id is required');

  return json({
    id: params.id,
  });
}
export default function ProjectRoute() {
  const { id } = useLoaderData<typeof loader>();
  return (
    <div>
      <Link to="/">Home</Link>

      <h1>Project {id}</h1>
    </div>
  );
}
