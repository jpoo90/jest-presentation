// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Table,
  TableRow,
  TableItem,
  Text,
  Image
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  jestLogo: require('../assets/jestLogo.svg'),
  twitterLogo: require('../assets/twitterLogo.svg'),
  githubLogo: require('../assets/githubLogo.svg'),
  logo: require('../assets/formidable-logo.svg'),
  basicTest: require('../assets/basicTestOutput.png'),
  arrayAndObject: require('../assets/arrayAndObject.png'),
  addFiveFailing: require('../assets/addFiveFailing.png'),
  promiseOutput: require('../assets/promiseOutput.png'),
  snapshotReference: require('../assets/snapshotReference.png'),
  failingSnapshot: require('../assets/failingSnapshot.png'),
  coverageReport: require('../assets/coverageReport.png'),
  coverageReportHTML: require('../assets/coverageReportHTML.png'),
  squarespaceLogo: require('../assets/squarespaceLogo.svg')
};

const video = require('file-loader!../assets/JestCodemods.mp4');
const watchingVideo = require('file-loader!../assets/Watching.mov');

preloader(images);

const theme = createTheme(
  {
    primary: '#FFF',
    secondary: '#1F2022',
    tertiary: '#006fa7',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        // transition={['zoom', 'slide']}
        transitionDuration={300}
        theme={theme}
        bgColor="primary"
      >
        <Slide transition={['zoom']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Test with Jest
          </Heading>
          <Heading size={3} textColor="tertiary">
            testing the fun way 🃏
          </Heading>
          <Layout style={{ marginTop: 100, justifyContent: 'space-between' }}>
            <Fill>
              <Text textColor="accent" style={{ textAlign: 'center' }}>
                Juan P. Osorio
              </Text>
              <Text style={{ textAlign: 'center' }}>
                <Link href="https://twitter.com/jpoo90" target="_blank">
                  <Image
                    src={images.twitterLogo}
                    style={{ height: 25, margin: '0 0 15 0' }}
                  />
                </Link>
                <Link href="https://github.com/jpoo90" target="_blank">
                  <Image
                    src={images.githubLogo}
                    style={{ height: 25, margin: '0 0 10 0' }}
                  />
                </Link>

              </Text>
              <Text size={3}>
                @jpoo90
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transition={['fade']}
          transitionDuration={1}
          textColor="secondary"
        >
          <Heading size={1} textColor="tertiary">
            <Image
              src={images.jestLogo}
              height={100}
              style={{ margin: '0 20px 0 0' }}
            />
            Features
          </Heading>
          <List>
            <Appear>
              <ListItem>Great tool out of the box. No setup 👌</ListItem>
            </Appear>
            <Appear><ListItem>Tests run in parallel 🎰 </ListItem></Appear>
            <Appear><ListItem>Fake DOM 📝 </ListItem></Appear>
            <Appear><ListItem>Fast watch mode 👀 </ListItem></Appear>
          </List>
        </Slide>

        <Slide
          transition={['zoom']}
          transitionDuration={0}
          textColor="secondary"
        >
          <Heading size={1} textColor="tertiary">
            <Image
              src={images.jestLogo}
              height={100}
              style={{ margin: '0 20px 0 0' }}
            />
            Features
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Integrates with Babel, ES2016 ⏩
              </ListItem>
            </Appear>
            <Appear><ListItem>Snapshot testing 📷</ListItem></Appear>
            <Appear><ListItem>Mocking tools 🔨 </ListItem></Appear>
            <Appear><ListItem>Seamless coverage ✅ </ListItem></Appear>
          </List>
        </Slide>

        <Slide
          transition={['fade']}
          transitionDuration={300}
          textColor="secondary"
          notes="npm > 3 recommended"
        >
          <Heading>
            Get Started
          </Heading>

          <List>
            <Appear>
              <ListItem margin="30px 0">
                yarn
                <Code margin={20}>yarn add jest --dev</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                npm
                <Code margin={20}>npm install jest --save-dev</Code>
              </ListItem>
            </Appear>
          </List>
          {/* babel presets, react, react native, typescript, need extra packages. */}
        </Slide>

        <Slide transition={['zoom']} transitionDuration={300}>
          <Heading>
            Basic tests
          </Heading>
        </Slide>

        <Slide transition={['fade']} transitionDuration={300}>
          <Layout>
            <Fill>
              <CodePane
                lang="js"
                source={require('raw-loader!../code/101.test.example')}
                margin="10px 10px 10px 0"
                align="center"
                textSize={17}
              />
              <Appear><Image src={images.basicTest} /></Appear>

            </Fill>
            <Fill>
              <CodePane
                lang="json"
                source={require('raw-loader!../code/basicPackageJson.json')}
                margin="10px 0 0 10px"
                textSize={17}
              />
              <Appear>
                <Text textSize={20} bold margin="40px 0 0 0">
                  * You can use
                  {' '}
                  <Link
                    href="http://facebook.github.io/jest/docs/cli.html#content"
                    target="_blank"
                  >
                    jest-cli
                  </Link>
                  {' '}
                  to run the tests too.
                </Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} transitionDuration={300}>
          <Layout>
            <Fill>
              <CodePane
                lang="js"
                source={require('raw-loader!../code/basicArray.test.example')}
                margin="0 0 10px -50px"
                textSize={14}
              />

              <CodePane
                lang="js"
                source={require('raw-loader!../code/basicObject.test.example')}
                textSize={14}
                margin="0 0 0 -50px"
              />
            </Fill>

            <Fill>
              <Appear>
                <Image
                  src={images.arrayAndObject}
                  margin="0 0 0 10px"
                  width="45vw"
                />
              </Appear>

              <Appear>
                <Table>
                  <TableRow>
                    <TableItem>
                      <Text textSize={20} bold margin="80px 0 20px 0">
                        * Find more matchers in <Link
                          href="http://facebook.github.io/jest/docs/expect.html"
                          target="_blank"
                        >
                          Jest's documentation.
                        </Link>
                      </Text>
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize={20}>.toBeTruthy()</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize={20}>.toThrow(error)</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize={20}>.toHaveBeenCalled()</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize={20}>
                      .toBeCloseTo(number, numDigits)
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize={20}>
                      ...{' '}
                    </TableItem>
                  </TableRow>
                </Table>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['zoom']} transitionDuration={300}>
          <Heading>
            Testing modules
          </Heading>
        </Slide>

        <Slide transition={['fade']} transitionDuration={300}>
          <Layout>
            <Fill>
              <CodePane
                lang="json"
                source={require('raw-loader!../code/basicModuleTree.json')}
                margin="0 0 10px -40px"
                textSize={15}
              />

              <CodePane
                lang="js"
                source={require('raw-loader!../code/addFive.example')}
                margin="0 0 10px -40px"
                textSize={15}
              />

              <CodePane
                lang="js"
                source={require('raw-loader!../code/addFive.test.example')}
                textSize={15}
                margin="0 0 0 -40px"
              />
            </Fill>
            <Fill>
              <Appear>
                <CodePane
                  lang="js"
                  source="yarn add babel-preset-es2015 babel-jest -D"
                  margin="0 0 0 10px"
                  textSize={17}
                />
              </Appear>

              <Appear>
                <Image
                  src={images.addFiveFailing}
                  margin="20px 0 0 10px"
                  width="48vw"
                />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['zoom']} transitionDuration={300}>
          <Heading>
            Async tests
          </Heading>
        </Slide>

        <Slide transition={['fade']} transitionDuration={300}>
          <Layout>
            <Fit>
              <CodePane
                lang="js"
                source={require('raw-loader!../code/promise.example')}
                margin="0 20px 0 -70px"
                textSize={13}
                fit
              />
              <Appear>
                <Image
                  fit
                  src={images.promiseOutput}
                  margin="10px 20px 0 -70px"
                  width="40vw"
                />
              </Appear>
            </Fit>

            <Fill>
              <CodePane
                lang="js"
                source={require('raw-loader!../code/promise.test.example')}
                textSize={13}
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['zoom']} transitionDuration={300}>
          <Heading>
            Snapshot tests
          </Heading>
        </Slide>

        <Slide
          transition={['fade']}
          transitionDuration={300}
          align="flex-start flex-start"
        >
          <Layout>
            <Fit>
              <Image
                src={images.snapshotReference}
                margin="50px 20px 0 -8vw"
                height="70vh"
              />
            </Fit>
            <Fit>
              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/snapshotReact.example')}
                  textSize={7}
                  margin="0 15px 0 0"
                />
              </Appear>
            </Fit>
            <Fit align="flex-start center">
              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/seasonsActivitiesTest.example')}
                  margin="0 0 0 15px"
                  textSize={10}
                />
              </Appear>
              <Appear>

                <CodePane
                  lang="json"
                  source={require('raw-loader!../code/snapshotTree.json')}
                  margin="10px 0 0 15px"
                  textSize={10}
                />
              </Appear><Appear>
                <CodePane
                  lang="json"
                  source={require('raw-loader!../code/seasonsActivities.js.snap')}
                  margin="10px 0 0 15px"
                  textSize={9}
                />
              </Appear>
            </Fit>
          </Layout>
        </Slide>

        <Slide
          transition={['fade']}
          transitionDuration={300}
          align="flex-start flex-start"
        >
          <Layout>
            <Fit>
              <Image
                src={images.snapshotReference}
                margin="80px 20px 0 -8vw"
                height="70vh"
              />
            </Fit>
            <Fit>
              <CodePane
                lang="js"
                source={require('raw-loader!../code/snapshotReact1.example')}
                textSize={13}
                margin="60px 15px 0 0"
              />
            </Fit>
            <Fit>
              <Appear>
                <Image
                  margin="60px 0 0 10px"
                  width="40vw"
                  src={images.failingSnapshot}
                />
              </Appear>
            </Fit>
          </Layout>
        </Slide>

        <Slide transition={['zoom']} transitionDuration={300}>
          <Heading>
            Code coverage
          </Heading>
        </Slide>

        <Slide transition={['fade']} transitionDuration={300}>
          <Layout>
            <Fit>
              <CodePane
                lang="js"
                source={require('raw-loader!../code/phoneBook.example')}
                textSize={15}
                margin="0 15px 0 0"
                style={{ paddingBottom: '21px' }}
              />
            </Fit>
            <Fit align="flex-start center">
              <CodePane
                lang="js"
                source={require('raw-loader!../code/phoneBookTest.example')}
                margin="0 0 0 15px"
                textSize={14}
              />
              <Appear>
                <CodePane
                  lang="json"
                  source={require('raw-loader!../code/coveragePackageJson.json')}
                  margin="10px 0 0 15px"
                  textSize={14}
                />
              </Appear>

            </Fit>
          </Layout>
        </Slide>

        <Slide transition={['fade']} transitionDuration={300}>
          <Layout>
            <Fill>
              <CodePane
                source="npm run coverage"
                textSize={17}
                textAlign="center"
                margin="0 0 20px 0"
              />
            </Fill>
          </Layout>

          <Layout>
            <Fit>
              <Image
                src={images.coverageReport}
                width={600}
                margin="0 0 0 -115px"
              />
              <Text textSize={25} textAlign="left" margin="20px 0 0 -50px">
                * Reporters are
                {' '}
                <Link
                  href="http://facebook.github.io/jest/docs/configuration.html#coveragereporters-array-string"
                  target="_blank"
                >
                  configurable
                </Link>
              </Text>
              <Text textSize={25} textAlign="left" margin="20px 0 0 -50px">
                * Default ["json", "lcov", "text"]
              </Text>
              <Text textSize={25} textAlign="left" margin="20px 0 0 -50px">
                * {`<root>/coverage to see your results.`}
              </Text>
            </Fit>

            <Fill>
              <Appear>
                <Image src={images.coverageReportHTML} width={600} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['zoom']} transitionDuration={300}>
          <Heading>
            Watching{' '}
          </Heading>
        </Slide>

        <Slide
          transition={['fade']}
          transitionDuration={300}
          textColor="secondary"
          align="flex-start flex-start"
        >
          {' '}
          <video
            src={watchingVideo}
            controls
            style={{ height: '85vh', margin: '0 0 0 -3vw' }}
          />
        </Slide>

        <Slide transition={['zoom']} transitionDuration={300}>
          <Heading>
            Mocking resources
          </Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          align="flex-start flex-start"
          lang="js"
          code={require('raw-loader!../code/mockTests.example')}
          ranges={[{ loc: [0, 6] }, { loc: [7, 18] }, { loc: [19, 32] }]}
          height="90vh"
        />

        <Slide transition={['fade']} transitionDuration={300}>
          <Layout>
            <Fit>
              <CodePane
                lang="js"
                source={require('raw-loader!../code/mocksTree.json')}
                textSize={15}
                margin="0 0 0 -150px"
              />
            </Fit>
            <Fit>
              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/mockBananaModule.example')}
                  textSize={15}
                  margin="0 0 15px 15px"
                />
              </Appear>
              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/mockBananaModuleTest.example')}
                  textSize={15}
                  margin="0 0 0 15px"
                />
              </Appear>
            </Fit>
            <Fit>
              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/mockDateModule.example')}
                  textSize={15}
                  margin="0 0 15px 30px"
                />
              </Appear>

              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/mockDateModuleTest.example')}
                  textSize={15}
                  margin="0 0 15px 30px"
                />
              </Appear>

              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/mockDateModuleMock.example')}
                  textSize={15}
                  margin="0 0 15px 30px"
                />
              </Appear>
            </Fit>
          </Layout>
        </Slide>

        <Slide
          transition={['fade']}
          transitionDuration={300}
          align="flex-start flex-start"
        >
          <Layout>
            <Fit>
              <CodePane
                lang="js"
                source={require('raw-loader!../code/notificator.example')}
                textSize={16}
                margin="20vh 0 0 -100px"
              />
            </Fit>

            <Fit>
              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/notificatorTest.example')}
                  textSize={12}
                  margin="0 0 0 30px"
                />
              </Appear>

              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/notificatorTest1.example')}
                  textSize={12}
                  margin="0 0 0 30px"
                />
              </Appear>

              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/notificatorTest2.example')}
                  textSize={12}
                  margin="0 0 0 30px"
                />
              </Appear>

              <Appear>
                <CodePane
                  lang="js"
                  source={require('raw-loader!../code/notificatorTest3.example')}
                  textSize={12}
                  margin="0 0 15px 30px"
                />
              </Appear>
            </Fit>
          </Layout>
        </Slide>

        <Slide
          transition={['fade']}
          transitionDuration={300}
          textColor="secondary"
        >
          <Heading size={1} textColor="tertiary">References</Heading>
          <Layout style={{ margin: 50 }}>
            <List>
              <ListItem>
                <Link href="https://facebook.github.io/jest/">
                  Jest documentation
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50">
                  Unlocking test performance migrating from Mocha to Jest
                </Link>
              </ListItem>
              <ListItem>
                <Link href="http://andrew.codes/jest-vs-mocha-why-jest-wins/">
                  Jest vs. Mocha: Why Jest wins?
                </Link>
              </ListItem>
            </List>
          </Layout>
        </Slide>
        <Slide
          transition={['fade']}
          transitionDuration={300}
          textColor="secondary"
        >
          <Heading size={3} textColor="tertiary">
            Can I use Jest at
            <Image
              src={images.squarespaceLogo}
              height={175}
              style={{ margin: '0 0 -60px 0' }}
            />
            ?
          </Heading>

          <Layout style={{ margin: '50px 0 0 0'}}>
            <Fill>
              <Appear>
                <div>
                  In the monolithic app, squarespace-v6, <strong>not yet</strong>. ☹️
                  <List margin="0 0 0 100px" textSize="2rem">
                    <ListItem textSize="2rem">Configuration + regression tests.</ListItem>
                    <ListItem textSize="2rem"><Code>jest</Code> will probably replace <Code>mocha</Code>.</ListItem>
                    <ListItem textSize="2rem">≠ <Code>karma</Code> tests (*.spec.js, Browser)</ListItem>
                  </List>
                </div>
              </Appear>
            </Fill>
          </Layout>
          <Layout style={{ margin: '50px 0 0 0'}}>
            <Fill>
              <Appear>
                <div>
                  In your new apps and external modules, <strong>hell ya!</strong>. 🙌
                  <List margin="0 0 0 100px">
                    <ListItem textSize="2rem">
                      The <Link
                        href="https://stash.nyc.squarespace.net/projects/WEBM/repos/sqs-i18n"
                      >
                        @sqs/i18n
                      </Link> mono-repo and some of its packages already use it.
                    </ListItem>
                  </List>
                </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transition={['fade']}
          transitionDuration={300}
          textColor="secondary"
        >
          <Heading size={1} textColor="tertiary">
            Migrating to
            <Image
              src={images.jestLogo}
              height={100}
              style={{ margin: '0 0 0 20px' }}
            />
          </Heading>

          <Layout style={{ margin: 50 }}>
            <Fill>
              <Appear>
                <Code>
                  yarn global add jest-codemods
                </Code>
              </Appear>
            </Fill>
          </Layout>
          <Appear>
            <video src={video} autoPlay loop style={{ margin: '20px 0 0 0' }} />
          </Appear>
        </Slide>
        <Slide
          transition={['zoom', 'spin']}
          transitionDuration={800}
          textColor="secondary"
        >
          <Heading>
            Thank you !{' '}
          </Heading>
          <Heading size={3}>
            😬
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
