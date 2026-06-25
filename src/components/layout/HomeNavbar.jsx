import Container from "../common/Container";
import logo from "../../assets/icons/icon-green.png";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <header className="bg-background">
      <Container>
        <div className="flex h-20 items-center justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-3"
            aria-label="Greenate Home"
            >
            <img
              src={logo}
              alt="Greenate Logo"
              className="h-10 w-8"
            />

            <span className="font-baloo text-xl font-normal text-primary">
              Greenate
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default HomeNavbar;