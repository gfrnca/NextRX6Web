/* General */
import { useRouter } from 'next/router'

/* CSS */
import { Container } from "../../../styles/global"
import InstitutionalSidebar from "../../organisms/Institutional/InstitutionalSidebar/InstitutionalSidebar"
import PrivacyPolicy from '../../organisms/Institutional/PrivacyPolicy/PrivacyPolicy'
import SupportPolicy from '../../organisms/Institutional/SupportPolicy/SupportPolicy'
import TermsOfService from '../../organisms/Institutional/TermsOfService/TermosOfService'
import { InstitutionalContent, InstitutionalPageStyles } from "./InstitutionalPage.styled"

const InstitutionalPage = () => {
  const router = useRouter();

  return (
    <InstitutionalPageStyles>
      <Container className="container"> 
        <InstitutionalSidebar />

        <InstitutionalContent>
          { router.pathname === "/institucional/politicas-de-privacidade" && <PrivacyPolicy />}
          { router.pathname === "/institucional/termos-de-servico" && <TermsOfService />}
          { router.pathname === "/institucional/atendimento" && <SupportPolicy />}
        </InstitutionalContent>
      </Container>
    </InstitutionalPageStyles>
  )
}

export default InstitutionalPage