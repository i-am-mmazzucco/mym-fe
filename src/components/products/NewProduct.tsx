import styles from '@/styles/components/products/NewProduct.module.scss';

interface NewProductProps {
	setIsNewProductModalOpen: (isOpen: boolean) => void;
}

const url = process.env.beUrl as string;

export default function NewProduct({ setIsNewProductModalOpen }: NewProductProps) {

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    const formData = {
			name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
			price: +(e.currentTarget.elements.namedItem('price') as HTMLInputElement).value,
			description: (e.currentTarget.elements.namedItem('description') as HTMLInputElement).value,
			category: (e.currentTarget.elements.namedItem('category') as HTMLInputElement).value,
			lot: {
				unitOfMeasure: (e.currentTarget.elements.namedItem('unitOfMeasure') as HTMLInputElement).value,
				quantity: +(e.currentTarget.elements.namedItem('quantity') as HTMLInputElement).value
			}
		};

		const response = await fetch(`${url}/products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${sessionStorage.getItem('token')}`
			},	
			body: JSON.stringify(formData)
		});

		const data = await response.json();

		if (data.statusCode) {	
			alert('Error al crear el producto');
		} else {
			setIsNewProductModalOpen(false);
		}
	}

  return (
		<div className={styles.newProductContainer}>
			<div className={styles.newProductBox}>
				<button className={styles.closeButton} onClick={() => setIsNewProductModalOpen(false)}>
					<p>X</p>
				</button>
				<h1>Ingresa los datos del nuevo producto</h1>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Nombre</span>
						<input type="text" name='name' required />
					</label>
					<label>
						<span>Precio</span>
						<input type="number" name='price' required />
					</label>
					<label>
						<span>Descripción</span>
						<input type="text" name='description' required />
					</label>
					<label>
						<span>Categoría</span>
						<input type="text" name='category' required />
					</label>
					<div>
						<span>Lote</span>
						<div>
							<label>
								<span>Unidad de medida</span>
								<select name="unitOfMeasure" required id="unitOfMeasure" defaultValue={'kg'}>
									<option value={'kg'}>KG</option>
									<option value={'g'}>G</option>
									<option value={'ml'}>ML</option>
									<option value={'l'}>L</option>
									<option value={'un'}>UN</option>
								</select>
							</label>
							<label>
								<span>Cantidad</span>
								<input type="number" name='quantity' required />
							</label>
						</div>
					</div>
					<button type="submit">Crear producto</button>
				</form>
			</div>
		</div>
  );
}