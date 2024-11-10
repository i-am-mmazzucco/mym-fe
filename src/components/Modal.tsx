const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button">X</button>
        <h2>Ingresa los datos del nuevo cliente</h2>
        <form>
          <label>Nombre del cliente</label>
          <input type="text" name="name" />

          <label>Dirección</label>
          <input type="text" name="address" />

          <label>Teléfono</label>
          <input type="text" name="phone" />

          <button type="submit">Agregar cliente</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
