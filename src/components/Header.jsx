import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
    return (
        <StyledHeader bg="red">
            <Container>
                <Nav>
                    <Logo src="src/assets/images/logo.svg" alt="Logo" />
                    <Button>Try for Free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h2>Build The Community Your Fans Will Love</h2>

                        <p>
                            Huddle re-imagines the way we build communities. You
                            have a voice, but so does your audience. Create
                            connections with your users as you engage in genuine
                            discussion.
                        </p>

                        <Button bg="#ff0099" color="#fff">
                            Get Started For Free
                        </Button>
                    </div>

                    <Image
                        src="src/assets/images/illustration-mockups.svg"
                        alt=""
                    />
                </Flex>
            </Container>
        </StyledHeader>
    );
};
export default Header;
