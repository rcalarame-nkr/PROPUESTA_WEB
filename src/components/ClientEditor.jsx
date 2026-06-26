import { useForm } from 'react-hook-form';
import { FiCheckCircle } from 'react-icons/fi';
import { useProposal } from '../context/ProposalContext.jsx';

export default function ClientEditor() {
  const { proposal, updateClient } = useProposal();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: proposal.client });

  return (
    <form className="client-editor" onSubmit={handleSubmit(updateClient)}>
      <div>
        <label htmlFor="client-name">Cliente</label>
        <input
          id="client-name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          {...register('name', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="client-cuit">CUIT</label>
        <input
          id="client-cuit"
          className={`form-control ${errors.cuit ? 'is-invalid' : ''}`}
          {...register('cuit', { required: true })}
        />
      </div>
      <div className="editor-wide">
        <label htmlFor="insured-group">Asegurable</label>
        <textarea
          id="insured-group"
          className="form-control"
          rows="3"
          {...register('insuredGroup')}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        <FiCheckCircle aria-hidden="true" />
        Actualizar propuesta
      </button>
      {isSubmitSuccessful && <span className="save-state">Datos sincronizados</span>}
    </form>
  );
}
