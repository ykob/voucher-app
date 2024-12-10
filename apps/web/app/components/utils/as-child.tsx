import {
  Children,
  HTMLAttributes,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';

export type AsChildProps<T> =
  | ({
      asChild?: false;
    } & T)
  | {
      asChild: true;
      children: ReactNode;
    };

export function Slot({
  children,
  ...props
}: HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
}) {
  if (isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ...children.props,
    });
  }
  if (Children.count(children) > 1) {
    Children.only(null);
  }
  return null;
}
