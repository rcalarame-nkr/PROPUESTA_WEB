import Cover from '../components/sections/Cover.jsx';
import ProposalSections from '../components/sections/ProposalSections.jsx';
import { useProposal } from '../context/ProposalContext.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import PrintableProposal from '../pdf/PrintableProposal.jsx';

export default function ProposalPage() {
  const { proposal } = useProposal();

  return (
    <>
      <DashboardLayout proposal={proposal}>
        <Cover proposal={proposal} />
        <ProposalSections proposal={proposal} />
      </DashboardLayout>
      <PrintableProposal proposal={proposal} />
    </>
  );
}
