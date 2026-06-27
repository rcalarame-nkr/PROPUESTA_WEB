/**
 * ProposalPage
 * Root page component that:
 *  - Activates scroll-spy (highlights sidebar links as user scrolls)
 *  - Activates animate-on-scroll (fade-up entrance animations)
 *  - Renders all 13 section components in proposal order
 */
import { useScrollSpy }       from '../hooks/useScrollSpy'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'
import { SECTION_IDS }        from '../utils/constants'

import Cover                  from '../components/sections/Cover'
import Presentacion           from '../components/sections/Presentacion'
import DatosCliente           from '../components/sections/DatosCliente'
import Coberturas             from '../components/sections/Coberturas'
import SumaAsegurada          from '../components/sections/SumaAsegurada'
import Deducibles             from '../components/sections/Deducibles'
import CoberturasAdicionales  from '../components/sections/CoberturasAdicionales'
import Exclusiones            from '../components/sections/Exclusiones'
import Aseguradora            from '../components/sections/Aseguradora'
import Prima                  from '../components/sections/Prima'
import FormaPago              from '../components/sections/FormaPago'
import Observaciones          from '../components/sections/Observaciones'
import Contacto               from '../components/sections/Contacto'

export default function ProposalPage() {
  useScrollSpy(SECTION_IDS)
  useAnimateOnScroll()

  return (
    <main>
      <Cover />
      <Presentacion />
      <DatosCliente />
      <Coberturas />
      <SumaAsegurada />
      <Deducibles />
      <CoberturasAdicionales />
      <Exclusiones />
      <Aseguradora />
      <Prima />
      <FormaPago />
      <Observaciones />
      <Contacto />
    </main>
  )
}
