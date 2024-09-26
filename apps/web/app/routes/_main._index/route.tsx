import { useActionData } from '@remix-run/react';
import { action } from './action';
import { Content } from './components/content';
import { loader } from './loader';

export { action, loader };

export default () => {
  const actionData = useActionData<typeof action>();

  return <Content actionData={actionData} />;
};
