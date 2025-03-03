
import styles from '@/styles/components/Container.module.scss';

export default function Container({
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