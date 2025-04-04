import styles from '@/styles/pages/login/Login.module.scss';

export default function Login() {
  return (
    <div className={styles.container}>
			<div className={styles.topBar}>
				<div>
					<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_84_5)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M1.62262 9.10975V22.7637C1.62262 23.2437 2.0072 23.6325 2.48201 23.6325C2.59788 23.6325 2.71244 23.6088 2.81922 23.5627L7.6533 21.4775L1.75893 9.07827C1.7549 9.06973 1.74921 9.06208 1.74221 9.05575C1.7352 9.04943 1.72701 9.04455 1.7181 9.04142C1.7092 9.03828 1.69976 9.03693 1.69033 9.03747C1.68091 9.038 1.67168 9.0404 1.66319 9.04452C1.65103 9.05046 1.64079 9.0597 1.63362 9.07117C1.62645 9.08264 1.62264 9.0959 1.62262 9.10943V9.10975Z" fill="black" stroke="black" stroke-width="2.73234" stroke-linecap="square"/>
							<path d="M1.72651 9.75655L7.01399 20.8793C7.10782 21.0792 7.27528 21.235 7.48136 21.3143C7.68743 21.3935 7.91616 21.39 8.11971 21.3045L23.5735 14.7811C24.0117 14.5965 24.2181 14.0876 24.0354 13.6449C24.0288 13.629 24.0218 13.6133 24.0143 13.5979L18.6009 2.40984C18.5057 2.21068 18.3372 2.05602 18.1307 1.97818C17.9241 1.90034 17.6955 1.90534 17.4926 1.99215L2.16465 8.5804C2.05729 8.62723 1.96046 8.6952 1.87993 8.78026C1.79941 8.86532 1.73683 8.96572 1.69595 9.07548C1.65506 9.18524 1.63669 9.30211 1.64194 9.41913C1.6472 9.53614 1.67596 9.65089 1.72651 9.75655ZM15.8731 18.9963V32.2102C15.8731 32.6902 16.2577 33.079 16.7325 33.079C16.8467 33.079 16.9597 33.0559 17.0651 33.0111L32.0766 26.6403C32.2856 26.5508 32.4637 26.4017 32.5886 26.2116C32.7135 26.0216 32.7797 25.799 32.7789 25.5716V12.2766C32.7789 11.7966 32.394 11.4078 31.9195 11.4078C31.804 11.4078 31.6898 11.4312 31.5833 11.477L16.5705 17.9302C16.3628 18.0203 16.1859 18.1693 16.0619 18.3587C15.9379 18.5482 15.8725 18.7699 15.8731 18.9963Z" stroke="black" stroke-width="2.73234" stroke-linecap="square"/>
						</g>
						<defs>
							<clipPath id="clip0_84_5">
								<rect width="34.4017" height="34.4017" fill="white" transform="translate(0 0.299133)"/>
							</clipPath>
						</defs>
					</svg>
					<p>M&M</p>
				</div>
				<div>
					<button>Registrarse</button>
					<button>Contacto</button>
				</div>
			</div>
      <div className={styles.containerLogin}>
				<div className={styles.loginBox}>
					<div className={styles.topDescription}>
						<h1>Bienvenido</h1>
						<p>Para comenzar, inicia sesión.</p>
					</div>
					<form className={styles.middleForm}>
						<input
							type="email"
							placeholder="mateomazuco@gmail.com"
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="****************"
							className={styles.input}
						/>
						<button>
							Iniciar sesión
						</button>
					</form>
					<div className={styles.divider}>
						<div />
						<div>o</div>
						<div />
					</div>
					<button className={styles.googleContainer}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
							<path d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z" fill="#FF3D00"/>
							<path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5719 17.5745 13.3038 18.0014 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z" fill="#4CAF50"/>
							<path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
						</svg>
						<p>
							Continuar con Google
						</p>
					</button>
				</div>
      </div>
			<footer className={styles.footerBar}>
				<p>
					¿No tenés una cuenta?
				</p>
				<a href="/register">
					Registrate
				</a>
			</footer>
    </div>
  );
}