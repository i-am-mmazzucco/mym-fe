
import styles from '@/styles/components/LoginContainer.module.scss';

export default function LoginContainer({
  children,
}: {
  children: React.ReactNode;
}) {
	return (
		<main className={styles.container}>
			{children}
		</main>
	)
}