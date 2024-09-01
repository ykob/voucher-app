import { css } from 'styled-system/css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>Voucher App</h1>
        {children}
      </div>
    </div>
  );
}

const styles = {
  container: css({
    containerName: 'layout',
    containerType: 'inline-size',
    maxW: '800px',
    mx: 'auto',
  }),
  innerContainer: css({
    px: 5,
    py: 10,
    '@container layout (width > 640px)': {
      px: 10,
      py: 12,
    },
  }),
  heading: css({
    fontSize: '3xl',
    mb: 4,
  }),
};
