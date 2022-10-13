import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from 'mjml-react';
import {
  leadingRelaxed,
  leadingTight,
  textBase,
  textLg,
} from './components/theme';

import Footer from './components/Footer';
import Head from './components/Head';
import Header from './components/Header';
/* eslint-disable sort-imports */
import { ReactElement } from 'react';

type NewSignInProps = {
  name: string;
  headline: string;
  body: ReactElement;
  bulletedList: ReactElement;
};

const NewSignIn: React.FC<NewSignInProps> = ({
  name,
  headline,
  body,
  bulletedList,
}) => {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={400}>
        <Header />
        <MjmlSection padding="0 24px" cssClass="smooth">
          <MjmlColumn>
            <MjmlDivider
              borderColor="#666"
              borderStyle="dotted"
              borderWidth="1px"
              padding="8px 0"
            ></MjmlDivider>
            <MjmlText
              padding="24px 0 8px"
              fontSize={textLg}
              lineHeight={leadingTight}
              cssClass="paragraph"
            >
              {headline}
            </MjmlText>
            <MjmlText
              padding="16px 0"
              fontSize={textBase}
              lineHeight={leadingRelaxed}
              cssClass="paragraph"
            >
              Hello {name},
            </MjmlText>
            <MjmlText
              cssClass="paragraph"
              padding="0"
              fontSize={textBase}
              lineHeight={leadingRelaxed}
            >
              <>{body}</>
            </MjmlText>
            <MjmlSpacer height="16px" />
            {bulletedList}
            <MjmlText
              padding="16px 0"
              fontSize={textBase}
              lineHeight={leadingRelaxed}
              cssClass="paragraph"
            >
              ♥,
              <br />
              The BookBook Team
            </MjmlText>
            <MjmlDivider
              borderColor="#666"
              borderStyle="dotted"
              borderWidth="1px"
              padding="20px 0 8px"
            ></MjmlDivider>
          </MjmlColumn>
        </MjmlSection>
        <Footer />
      </MjmlBody>
    </Mjml>
  );
};

export default NewSignIn;
