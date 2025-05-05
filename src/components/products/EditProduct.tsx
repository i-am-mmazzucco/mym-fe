import { IProduct } from '@/interfaces/products.interface';
import styles from '@/styles/components/products/NewProduct.module.scss';

interface EditProductProps {
	setIsEditProductModalOpen: (isOpen: boolean) => void;
	product: IProduct | null;
}

const url = process.env.beUrl as string;

export default function EditProduct({ setIsEditProductModalOpen, product }: EditProductProps) {

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    const formData = {
			price: +(e.currentTarget.elements.namedItem('price') as HTMLInputElement).value,
			description: (e.currentTarget.elements.namedItem('description') as HTMLInputElement).value,
			category: (e.currentTarget.elements.namedItem('category') as HTMLInputElement).value,
			quantity: +(e.currentTarget.elements.namedItem('quantity') as HTMLInputElement).value
		};

		const response = await fetch(`${url}/products/${product?.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},	
			body: JSON.stringify(formData)
		});

		const data = await response.json();

		if (data.statusCode) {	
			alert('Error al editar el producto');
		} else {
			setIsEditProductModalOpen(false);
		}
	}

  return (
		<div className={styles.newProductContainer}>
			<div className={styles.newProductBox}>
				<button className={styles.closeButton} onClick={() => setIsEditProductModalOpen(false)}>
					<p>X</p>
				</button>
				<h1>Edita el producto</h1>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Precio</span>
						<input type="number" name='price' />
					</label>
					<label>
						<span>Descripción</span>
						<input type="text" name='description' />
					</label>
					<label>
						<span>Categoría</span>
						<input type="text" name='category' />
					</label>
					<label>
						<span>Cantidad</span>
						<input type="number" name='quantity' />
					</label>
					<button type="submit">Editar producto</button>
				</form>
			</div>
		</div>
  );
}