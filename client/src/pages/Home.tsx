import styled from 'styled-components';
// import { Header, AllInvoices, SidebarNew } from '../components/HomeInvoicePage';

export default function HomeInvoicePage() {
  return (
    <Wrapper>
      <div className='container'>
        {/* <Header /> */}
        {/* <AllInvoices /> */}
        {/* <SidebarNew /> */}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: calc(100% - 48px);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: calc(100% - 96px);
  }

  @media (min-width: 1440px) {
    width: 100%;
    padding-left: 103px;
    display: grid;
    justify-items: center;

    .container {
      width: 100%;
      max-width: 1220px;
    }
  }
`;
