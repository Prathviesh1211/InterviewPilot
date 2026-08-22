import Button from "../../ui/Button";
import { HERO } from "../../../constants/hero";
import { Link } from "react-router-dom";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link to="/register">
      <Button size="lg">
        {HERO.primaryButton}
      </Button>
      </Link>

      <Button
        variant="secondary"
        size="lg"
      >
        {HERO.secondaryButton}
      </Button>
    </div>
  );
};

export default HeroButtons;