export const Modal_mostrarAfecciones = ({info=''}) => {
    
    return (
      <div className="modal fade" id="idModalMostrarAfecciones" aria-hidden="true" aria-labelledby="idModalDeleteAllLabel2" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title modal_size" id="idModalDeleteAllLabel2">Informacion</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <h4 className="modal_size" style={{ color: 'red', fontWeight: '900' }}> {info} </h4>
              </div>
              {/* <div className="modal-footer">
                  <button onClick={console.log('click')} className="btn btn-danger" >Aceptar</button>
              </div> */}
          </div>
      </div>
  </div>
    )
  }