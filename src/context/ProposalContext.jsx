import { createContext, useContext, useMemo, useState } from 'react';
import { proposalData } from '../utils/proposalData.js';

const ProposalContext = createContext(null);

export function ProposalProvider({ children }) {
  const [proposal, setProposal] = useState(proposalData);

  const value = useMemo(
    () => ({
      proposal,
      updateClient: (client) =>
        setProposal((current) => ({ ...current, client: { ...current.client, ...client } })),
    }),
    [proposal],
  );

  return <ProposalContext.Provider value={value}>{children}</ProposalContext.Provider>;
}

export function useProposal() {
  const context = useContext(ProposalContext);
  if (!context) {
    throw new Error('useProposal must be used inside ProposalProvider');
  }
  return context;
}
