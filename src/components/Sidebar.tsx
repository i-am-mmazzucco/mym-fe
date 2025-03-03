import styles from '@/styles/components/Sidebar.module.scss';
import Link from 'next/link';

const SvgSelector = (props: { href: string }) => {
	switch (props.href) {
		case 'clients':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<g clip-path="url(#clip0_756_78)">
						<path d="M16.25 8.75H15V10H16.25C16.7471 10.0005 17.2237 10.1983 17.5752 10.5498C17.9267 10.9013 18.1245 11.3779 18.125 11.875V14.375H19.375V11.875C19.374 11.0465 19.0445 10.2522 18.4586 9.66635C17.8728 9.08051 17.0785 8.75096 16.25 8.75Z" fill="black"/>
						<path d="M15 2.5C15.3708 2.5 15.7334 2.60997 16.0417 2.81599C16.35 3.02202 16.5904 3.31486 16.7323 3.65747C16.8742 4.00008 16.9113 4.37708 16.839 4.74079C16.7666 5.10451 16.5881 5.4386 16.3258 5.70083C16.0636 5.96305 15.7295 6.14163 15.3658 6.21397C15.0021 6.28632 14.6251 6.24919 14.2825 6.10727C13.9399 5.96536 13.647 5.72504 13.441 5.41669C13.235 5.10835 13.125 4.74584 13.125 4.375C13.125 3.87772 13.3225 3.40081 13.6742 3.04917C14.0258 2.69754 14.5027 2.5 15 2.5ZM15 1.25C14.3819 1.25 13.7777 1.43328 13.2638 1.77666C12.7499 2.12004 12.3494 2.6081 12.1129 3.17911C11.8764 3.75013 11.8145 4.37847 11.935 4.98466C12.0556 5.59085 12.3533 6.14767 12.7903 6.58471C13.2273 7.02175 13.7842 7.31938 14.3903 7.43995C14.9965 7.56053 15.6249 7.49865 16.1959 7.26212C16.7669 7.0256 17.255 6.62506 17.5983 6.11116C17.9417 5.59725 18.125 4.99307 18.125 4.375C18.125 3.5462 17.7958 2.75134 17.2097 2.16529C16.6237 1.57924 15.8288 1.25 15 1.25Z" fill="black"/>
						<path d="M14.375 18.75H13.125V17.5C13.1245 17.0029 12.9267 16.5263 12.5752 16.1748C12.2237 15.8233 11.7471 15.6255 11.25 15.625H8.75C8.25289 15.6255 7.77629 15.8233 7.42478 16.1748C7.07327 16.5263 6.87555 17.0029 6.875 17.5V18.75H5.625V17.5C5.62598 16.6715 5.95553 15.8772 6.54137 15.2914C7.12721 14.7055 7.9215 14.376 8.75 14.375H11.25C12.0785 14.376 12.8728 14.7055 13.4586 15.2914C14.0445 15.8772 14.374 16.6715 14.375 17.5V18.75Z" fill="black"/>
						<path d="M10 8.125C10.3708 8.125 10.7334 8.23497 11.0417 8.44099C11.35 8.64702 11.5904 8.93986 11.7323 9.28247C11.8742 9.62508 11.9113 10.0021 11.839 10.3658C11.7666 10.7295 11.5881 11.0636 11.3258 11.3258C11.0636 11.588 10.7295 11.7666 10.3658 11.839C10.0021 11.9113 9.62508 11.8742 9.28247 11.7323C8.93986 11.5904 8.64702 11.35 8.441 11.0417C8.23497 10.7334 8.125 10.3708 8.125 10C8.125 9.50272 8.32255 9.02581 8.67418 8.67417C9.02581 8.32254 9.50272 8.125 10 8.125ZM10 6.875C9.38194 6.875 8.77775 7.05828 8.26384 7.40166C7.74994 7.74504 7.3494 8.2331 7.11288 8.80411C6.87635 9.37513 6.81447 10.0035 6.93505 10.6097C7.05563 11.2158 7.35325 11.7727 7.79029 12.2097C8.22733 12.6467 8.78415 12.9444 9.39034 13.065C9.99654 13.1855 10.6249 13.1236 11.1959 12.8871C11.7669 12.6506 12.255 12.2501 12.5983 11.7362C12.9417 11.2223 13.125 10.6181 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875Z" fill="black"/>
						<path d="M5 8.75H3.75C2.9215 8.75098 2.12721 9.08053 1.54137 9.66637C0.955529 10.2522 0.625976 11.0465 0.625 11.875V14.375H1.875V11.875C1.87555 11.3779 2.07327 10.9013 2.42478 10.5498C2.77629 10.1983 3.25289 10.0005 3.75 10H5V8.75Z" fill="black"/>
						<path d="M5 2.5C5.37084 2.5 5.73335 2.60997 6.0417 2.81599C6.35004 3.02202 6.59036 3.31486 6.73228 3.65747C6.87419 4.00008 6.91132 4.37708 6.83897 4.74079C6.76663 5.10451 6.58805 5.4386 6.32583 5.70083C6.0636 5.96305 5.72951 6.14163 5.3658 6.21397C5.00208 6.28632 4.62508 6.24919 4.28247 6.10727C3.93986 5.96536 3.64702 5.72504 3.441 5.41669C3.23497 5.10835 3.125 4.74584 3.125 4.375C3.125 3.87772 3.32255 3.40081 3.67418 3.04917C4.02581 2.69754 4.50272 2.5 5 2.5ZM5 1.25C4.38193 1.25 3.77775 1.43328 3.26384 1.77666C2.74994 2.12004 2.3494 2.6081 2.11288 3.17911C1.87635 3.75013 1.81447 4.37847 1.93505 4.98466C2.05563 5.59085 2.35325 6.14767 2.79029 6.58471C3.22733 7.02175 3.78415 7.31938 4.39034 7.43995C4.99654 7.56053 5.62487 7.49865 6.19589 7.26212C6.76691 7.0256 7.25496 6.62506 7.59834 6.11116C7.94172 5.59725 8.125 4.99307 8.125 4.375C8.125 3.5462 7.79576 2.75134 7.20971 2.16529C6.62366 1.57924 5.8288 1.25 5 1.25Z" fill="black"/>
					</g>
					<defs>
						<clipPath id="clip0_756_78">
							<rect width="20" height="20" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			)
		case 'employees':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<g clip-path="url(#clip0_756_88)">
						<path d="M17.5 3.75V16.25H2.5V3.75H17.5ZM17.5 2.5H2.5C2.16848 2.5 1.85054 2.6317 1.61612 2.86612C1.3817 3.10054 1.25 3.41848 1.25 3.75V16.25C1.25 16.5815 1.3817 16.8995 1.61612 17.1339C1.85054 17.3683 2.16848 17.5 2.5 17.5H17.5C17.8315 17.5 18.1495 17.3683 18.3839 17.1339C18.6183 16.8995 18.75 16.5815 18.75 16.25V3.75C18.75 3.41848 18.6183 3.10054 18.3839 2.86612C18.1495 2.6317 17.8315 2.5 17.5 2.5Z" fill="black"/>
						<path d="M8.125 6.25H3.75V7.5H8.125V6.25Z" fill="black"/>
						<path d="M6.25 8.75H3.75V10H6.25V8.75Z" fill="black"/>
						<path d="M14.375 11.25H10.625C10.1277 11.25 9.65081 11.4475 9.29917 11.7992C8.94754 12.1508 8.75 12.6277 8.75 13.125V14.375H10V13.125C10 12.9592 10.0658 12.8003 10.1831 12.6831C10.3003 12.5658 10.4592 12.5 10.625 12.5H14.375C14.5408 12.5 14.6997 12.5658 14.8169 12.6831C14.9342 12.8003 15 12.9592 15 13.125V14.375H16.25V13.125C16.25 12.6277 16.0525 12.1508 15.7008 11.7992C15.3492 11.4475 14.8723 11.25 14.375 11.25Z" fill="black"/>
						<path d="M12.5 10.625C12.9945 10.625 13.4778 10.4784 13.8889 10.2037C14.3 9.92897 14.6205 9.53853 14.8097 9.08171C14.9989 8.6249 15.0484 8.12223 14.952 7.63728C14.8555 7.15232 14.6174 6.70687 14.2678 6.35723C13.9181 6.0076 13.4727 5.7695 12.9877 5.67304C12.5028 5.57657 12.0001 5.62608 11.5433 5.8153C11.0865 6.00452 10.696 6.32495 10.4213 6.73608C10.1466 7.1472 10 7.63055 10 8.125C10 8.78804 10.2634 9.42393 10.7322 9.89277C11.2011 10.3616 11.837 10.625 12.5 10.625ZM12.5 6.875C12.7472 6.875 12.9889 6.94831 13.1945 7.08566C13.4 7.22302 13.5602 7.41824 13.6548 7.64665C13.7495 7.87505 13.7742 8.12639 13.726 8.36886C13.6778 8.61134 13.5587 8.83407 13.3839 9.00888C13.2091 9.1837 12.9863 9.30275 12.7439 9.35098C12.5014 9.39921 12.2501 9.37446 12.0216 9.27985C11.7932 9.18524 11.598 9.02503 11.4607 8.81946C11.3233 8.6139 11.25 8.37223 11.25 8.125C11.25 7.79348 11.3817 7.47554 11.6161 7.24112C11.8505 7.0067 12.1685 6.875 12.5 6.875Z" fill="black"/>
					</g>
					<defs>
						<clipPath id="clip0_756_88">
							<rect width="20" height="20" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			)
		case 'products':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<g clip-path="url(#clip0_756_97)">
						<path d="M12.5 13.125H7.5C7.16848 13.125 6.85054 12.9933 6.61612 12.7589C6.3817 12.5245 6.25 12.2065 6.25 11.875V10.625C6.25 10.2935 6.3817 9.97554 6.61612 9.74112C6.85054 9.5067 7.16848 9.375 7.5 9.375H12.5C12.8315 9.375 13.1495 9.5067 13.3839 9.74112C13.6183 9.97554 13.75 10.2935 13.75 10.625V11.875C13.75 12.2065 13.6183 12.5245 13.3839 12.7589C13.1495 12.9933 12.8315 13.125 12.5 13.125ZM7.5 10.625V11.875H12.5V10.625H7.5Z" fill="black"/>
						<path d="M17.5 2.5H2.5C2.16848 2.5 1.85054 2.6317 1.61612 2.86612C1.3817 3.10054 1.25 3.41848 1.25 3.75V6.25C1.25 6.58152 1.3817 6.89946 1.61612 7.13388C1.85054 7.3683 2.16848 7.5 2.5 7.5V17.5C2.5 17.8315 2.6317 18.1495 2.86612 18.3839C3.10054 18.6183 3.41848 18.75 3.75 18.75H16.25C16.5815 18.75 16.8995 18.6183 17.1339 18.3839C17.3683 18.1495 17.5 17.8315 17.5 17.5V7.5C17.8315 7.5 18.1495 7.3683 18.3839 7.13388C18.6183 6.89946 18.75 6.58152 18.75 6.25V3.75C18.75 3.41848 18.6183 3.10054 18.3839 2.86612C18.1495 2.6317 17.8315 2.5 17.5 2.5ZM16.25 17.5H3.75V7.5H16.25V17.5ZM17.5 6.25H2.5V3.75H17.5V6.25Z" fill="black"/>
					</g>
					<defs>
						<clipPath id="clip0_756_97">
							<rect width="20" height="20" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			)
		case '':
		case 'home':
		default:
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<g clip-path="url(#clip0_756_73)">
						<path d="M10.3827 1.38365C10.2717 1.29708 10.1351 1.25006 9.99434 1.25006C9.85362 1.25006 9.71694 1.29708 9.606 1.38365L0.625 8.38715L1.40169 9.36946L2.5 8.51309V16.25C2.50068 16.5813 2.63259 16.8989 2.86686 17.1332C3.10114 17.3674 3.41869 17.4993 3.75 17.5H16.25C16.5813 17.4994 16.8989 17.3675 17.1332 17.1332C17.3675 16.8989 17.4994 16.5814 17.5 16.25V8.51878L18.5983 9.37503L19.375 8.39265L10.3827 1.38365ZM11.25 16.25H8.75V11.25H11.25V16.25ZM12.5 16.25V11.25C12.4996 10.9186 12.3678 10.6009 12.1335 10.3666C11.8991 10.1322 11.5814 10.0004 11.25 10H8.75C8.41858 10.0004 8.10083 10.1322 7.86648 10.3665C7.63213 10.6009 7.50033 10.9186 7.5 11.25V16.25H3.75V7.53846L10 2.66971L16.25 7.54503V16.25H12.5Z" fill="black"/>
					</g>
					<defs>
						<clipPath id="clip0_756_73">
							<rect width="20" height="20" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			)
	}
}

const LiButton = (props: { href: string, name: string }) => (
	<li>
		<SvgSelector href={props.href} />
		<Link href={`/${props.href}`}>{props.name}</Link>
	</li>
)

const Sidebar = () => {
	return (
		<aside className={styles.sideBar}>
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
					<g clip-path="url(#clip0_147_116)">
						<path d="M24.5 5.25H3.5V7H24.5V5.25Z" fill="black"/>
						<path d="M24.5 21H3.5V22.75H24.5V21Z" fill="black"/>
						<path d="M24.5 10.5H3.5V12.25H24.5V10.5Z" fill="black"/>
						<path d="M24.5 15.75H3.5V17.5H24.5V15.75Z" fill="black"/>
					</g>
					<defs>
						<clipPath id="clip0_147_116">
							<rect width="28" height="28" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			</div>
			<nav>
				<ul>
					<LiButton href="" name="Inicio" />
					<LiButton href="clients" name="Clientes" />
					<LiButton href="employees" name="Empleados" />
					<LiButton href="products" name="Productos" />
				</ul>
			</nav>
		</aside>
	)
};

export default Sidebar;
