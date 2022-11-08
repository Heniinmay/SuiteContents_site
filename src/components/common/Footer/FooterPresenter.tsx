import styled from '@emotion/styled'
import { Button, Input } from '@mui/material'
import { memoryUsage } from 'process'

const footerMenuList = [
  {
    //0
    name: '제품',
    menuList: [
      {
        id: 'p1',
        menu: 'Dig Town',
        Link: '',
      },
      {
        id: 'p2',
        menu: 'Weaken',
        Link: '',
      },
      {
        id: 'p3',
        menu: 'Zomvice',
        Link: '',
      },
    ],
  },
  {
    //1
    name: '스위트게임즈 소개',
    menuList: [
      { id: 'i1', menu: '브랜드 소개', Link: '' },
      { id: 'i2', menu: '참여인력', Link: '' },
      { id: 'i3', menu: '게임 철학', Link: '' },
    ],
  },
  {
    //2
    name: '고객지원',
    menuList: [
      { id: 'c1', menu: '자주 묻는 질문', Link: '' },
      { id: 'c2', menu: '연락처', Link: '' },
    ],
  },
]
const Container = styled.div`
  width: 1200px;
  margin: 100px auto;
  padding: 34px 0;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
`

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 138px;
  justify-content: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: none;
  }
`
const FooterMenu = styled.div``
const MenuUl = styled.ul`
  list-style: none;
  font-size: 16px;
  font-weight: 700;
  padding-top: 30px;
  text-align: center;
`
const MenuList = styled.li`
  margin-top: 13px;
  line-height: 19px;
  color: #21212150;
  font-weight: 400;
`
const SubscribeWrapper = styled.div`
  width: 338px;
  height: 256px;
  background-color: #eff3fd;
  padding: 0px 42px;
  box-sizing: border-box;
`
const SubDesc = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #616161;
`

const Divider = styled.hr`
  margin: 47px auto;
  border: 1px solid #21212106;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: none;
  }
`

const FooterBottom = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  /* gap: 70px; */
  justify-content: space-around;
  align-items: flex-start;

  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    flex-direction: column;
    padding: 0 16px;
    text-align: center;
    gap: 24px;
  }
`
const LogoImg = styled.image`
  width: 253px;
  height: 26px;
  background: url('/assets/LogoDefault.png') no-repeat 0 0 / cover;
  margin-right: 40px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    margin: 0 auto 30px;
  }
`
const InfoWrp = styled.div`
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
  }
`
const InfoTitle = styled.h3`
  list-style: none;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }
`
const InfoContents = styled.ul`
  list-style: none;

  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
  }
`
const InfoText = styled.li`
  margin-top: 13px;
  line-height: 19px;
  color: #21212195;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
`

const ContactWrp = styled.div`
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
  }
`
const Copy = styled.p`
  text-align: center;
  font-size: 14px;
  color: #21212195;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin-top: 24px;
    font-size: 12px;
  }
`

const FooterPresenter = () => {
  return (
    <Container>
      <FooterTop>
        <>
          {footerMenuList.map((menu) => (
            <>
              <MenuUl>
                {menu.name}
                {menu.menuList.map((item) => (
                  <MenuList>{item.menu}</MenuList>
                ))}
              </MenuUl>
            </>
          ))}
        </>
        {/* <SubscribeWrapper>
          <MenuUl>뉴스레터 구독</MenuUl>
          <Input
            placeholder="Email address"
            sx={{
              width: '248px',
              backgroundColor: 'white',
              padding: '15px 16px',
              borderRadius: '6px',
              margin: '18px 0',
            }}
          />

          <SubDesc>
            스위트게임즈의 새로운 소식을 한 발 먼저 확인하고 싶다면, 뉴스레터를
            구독해보세요
          </SubDesc>
        </SubscribeWrapper> */}
      </FooterTop>
      {/* ------------------------------------------ */}
      <Divider />
      <FooterBottom>
        <LogoImg />
        <InfoWrp>
          <InfoTitle>Suite Games co.</InfoTitle>
          <InfoContents>
            <InfoText>주식회사 스위트게임즈</InfoText>
            <InfoText>사업자등록번호 310-86-03121</InfoText>
            <InfoText>대표이사 손영익</InfoText>
          </InfoContents>
        </InfoWrp>
        <ContactWrp>
          <InfoTitle>CONTACT US</InfoTitle>
          <InfoContents>
            <InfoText>주식회사 스위트게임즈</InfoText>
            <InfoText>문의 | contact@suitegames.co.kr</InfoText>
            <InfoText>서울특별시 마포구 서교동 352-17, 255호</InfoText>
          </InfoContents>
        </ContactWrp>
      </FooterBottom>
      <Divider />
      <Copy>Copyright &#169; 2022 Suitegames Corp. All right reserved. </Copy>
    </Container>
  )
}

export default FooterPresenter
