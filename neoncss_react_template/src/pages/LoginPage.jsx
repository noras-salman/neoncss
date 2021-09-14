import { Container } from "../components/Container";
import {
  InputBox,
  Input,
  TextArea,
  Select,
  SelectOption,
  Chip,
  InputGroup,
  InputWrapper,
  RadioButton,
  CheckBox,
} from "../components/Input";
import { Section, SectionTitle } from "../components/Section";
import { Button } from "../components/Button";
import { InLineDivider } from "../components/Divider";
export function LoginPage(props) {
  return (
    <Container>
      <Section>
        <InputBox>
          <SectionTitle>Login</SectionTitle>

          <Input type="text" label="Username" effect={true}></Input>
          <Input type="password" label="Password" effect={true}></Input>

          <Button>Login</Button>

          <InLineDivider>OR</InLineDivider>

          <Button className="btn-flat black-bg white">
            Login with google
            <img
              src="/assets/google.svg"
              alt=""
              style={{
                display: "inline-block",
                width: 32,
                height: 32,
                float: "left",
                marginTop: 8,
              }}
            />
          </Button>
          <br />

          <Button className="btn-flat black-bg white">
            Login with twitter
            <img
              src="/assets/twitter.svg"
              alt=""
              style={{
                display: "inline-block",
                width: 32,
                height: 32,
                float: "left",
                marginTop: 8,
              }}
            />
          </Button>
          <br />
          <Button className="btn-flat black-bg white">
            Login with github
            <img
              src="/assets/github.svg"
              alt=""
              style={{
                display: "inline-block",
                width: 32,
                height: 32,
                float: "left",
                marginTop: 8,
              }}
            />
          </Button>
          <br />
          <Button className="btn-flat black-bg white">
            Login with facebook
            <img
              src="/assets/facebook.svg"
              alt=""
              style={{
                display: "inline-block",
                width: 32,
                height: 32,
                float: "left",
                marginTop: 8,
              }}
            />
          </Button>
        </InputBox>
      </Section>
    </Container>
  );
}
