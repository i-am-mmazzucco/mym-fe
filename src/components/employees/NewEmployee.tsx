import styles from '@/styles/components/employees/NewEmployee.module.scss';

interface NewEmployeeProps {
	setIsNewEmployeeModalOpen: (isOpen: boolean) => void;
}

const url = process.env.beUrl as string;

export default function NewEmployee({ setIsNewEmployeeModalOpen }: NewEmployeeProps) {

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    const formData = {
			name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
			lastName: (e.currentTarget.elements.namedItem('lastName') as HTMLInputElement).value,
			dni: (e.currentTarget.elements.namedItem('dni') as HTMLInputElement).value,
			phone: (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value,
			address: (e.currentTarget.elements.namedItem('address') as HTMLInputElement).value,
			role: 'CLIENT'
		};

		const response = await fetch(`${url}/employees`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${sessionStorage.getItem('token')}`
			},	
			body: JSON.stringify(formData)
		});

		const data = await response.json();

		if (data.statusCode) {
			alert('Error al crear el empleado');
		} else {
			setIsNewEmployeeModalOpen(false);
		}
	}

  return (
		<div className={styles.newEmployeeContainer}>
			<div className={styles.newEmployeeBox}>
				<button className={styles.closeButton} onClick={() => setIsNewEmployeeModalOpen(false)}>
					<p>X</p>
				</button>
				<h1>Ingresa los datos del nuevo empleado</h1>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Nombre</span>
						<input type="text" name='name' required />
					</label>
					<label>
						<span>Apellido</span>
						<input type="text" name='lastName' required />
					</label>
					<label>
						<span>DNI</span>
						<input type="text" name='dni' required />
					</label>
					<label>
						<span>Teléfono</span>
						<input type="text" name='phone' required />
					</label>
					<label>
						<span>Dirección</span>
						<input type="text" name='address' required />
					</label>
					<button type="submit">Crear empleado</button>
				</form>
			</div>
		</div>
  );
}