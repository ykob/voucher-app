import { css } from 'styled-system/css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className={css({ textStyle: 'heading.lg' })}>Voucher App</h1>
      {children}
    </div>
  );
}
