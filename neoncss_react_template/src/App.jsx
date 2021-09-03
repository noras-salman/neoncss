import { NavBar, NavBrand, NavMenu, NavMenuItem } from "./components/Navbar";
import { SideBar } from "./components/Sidebar";
import { List, ListItem } from "./components/List";
import { Container } from "./components/Container";
import { Section, SectionTitle } from "./components/Section";
import { Row, Column } from "./components/Grid";
import { Card, CardBody, CardCover, CardCoverTitle } from "./components/Card";
import {
  Banner,
  BannerOverlay,
  BannerContent,
  BannerTitle,
} from "./components/Banner";
import {
  ContextSkeleton,
  ContextBackground,
  ContextTitle,
  ContextLine,
} from "./components/Progress";

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavBrand url="/hello">NeonCss</NavBrand>
        <NavMenu>
          <NavMenuItem>Home</NavMenuItem>
        </NavMenu>
      </NavBar>
      <SideBar>
        <List>
          <ListItem>
            <a href="hello">Hello</a>
          </ListItem>
        </List>
      </SideBar>
      <Container>
        <Banner>
          <video autoPlay muted loop>
            <source
              type="video/mp4"
              src="https://player.vimeo.com/external/385147580.sd.mp4?s=e6a0ffe2125b290636bd7a765e492e900b9e4013&profile_id=139&oauth2_token_id=57447761"
            />
          </video>
          <BannerOverlay>
            <BannerContent>
              <BannerTitle>NeonCss</BannerTitle>
            </BannerContent>
          </BannerOverlay>
        </Banner>
        <Section>
          <SectionTitle>This is a section title</SectionTitle>
        </Section>
        <Row>
          <Card isColumn={true}>
            <CardCover>
              <img
                src="https://images.pexels.com/photos/1896755/pexels-photo-1896755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <CardCoverTitle>
                <h3>Title</h3>
                <p>Subtitle</p>
              </CardCoverTitle>
            </CardCover>
            <CardBody>
              <h3>Card with cover</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </CardBody>
          </Card>

          <Card isColumn={true}>
            <ContextSkeleton>
              <ContextBackground></ContextBackground>
              <ContextTitle></ContextTitle>
              <ContextLine></ContextLine>
              <ContextLine></ContextLine>
              <ContextLine size={6}></ContextLine>
            </ContextSkeleton>
          </Card>
          <Column>3</Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
