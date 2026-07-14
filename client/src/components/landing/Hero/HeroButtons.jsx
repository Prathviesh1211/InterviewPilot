import Button from "../../ui/Button";
import { HERO } from "../../../constants/hero";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button size="lg">
        {HERO.primaryButton}
      </Button>

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