const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #06050b;
gap: 2rem;
padding: 3rem 1rem;
`;

const aboutTitle = { text: "About Us" };

const lolPlayerImg =
  "https://aquamarine-official-jay-421.mypinata.cloud/ipfs/QmULvhbPXzRW9kmpPqvHM4bphDy7RkmDcMyX3fcCBXrCdX";

const TitleImage = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 10px;    /* Example border radius */
  box-shadow: 5px 5px 10px black; /* Example box-shadow */
`;

const AboutHero = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    color: white;
`;

return (
  <Main>
    <AboutHero>
      <div>
        <Widget
          src="vex-hackathon.testnet/widget/VexTitle"
          props={aboutTitle}
        />

        <p>
          VEX is in development stage. We are currently looking for investors
          and contributors.
        </p>
        <p>
          You can email us at <b>info@vexesports.com</b> and{" "}
          <a href="https://1drv.ms/w/s!AsaNw5zTGRR3gjBDxK3SGS6syFd2?e=g4iBlJ">
            check our business plan
          </a>
          .
        </p>

        <a href="https://twitter.com/betvex" className="btn bg-dark text-light">
          <i class="ph-fill ph-twitter-logo"></i>
          Twitter
        </a>
      </div>

      <TitleImage src={lolPlayerImg} />
    </AboutHero>
  </Main>
);
