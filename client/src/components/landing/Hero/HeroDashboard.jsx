import Card from "../../ui/Card";
import { HERO_DASHBOARD } from "../../../constants/heroDashboard";
import { CheckCircle2, Circle } from "lucide-react";
import Progress from "../../ui/Progress";

const HeroDashboard = () => {
  return (
    <Card className="w-full max-w-md space-y-5">

      {/* Readiness */}

      <div>
        <p className="text-sm text-zinc-400">
          Interview Readiness
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          {HERO_DASHBOARD.readiness}
          <span className="text-zinc-500 text-2xl">
            /100
          </span>
        </h2>
      </div>

      {/* Scores */}

      <div className="space-y-3">

        <Progress
          title="Resume"
          value={HERO_DASHBOARD.resume}
        />

        <Progress
          title="React"
          value={HERO_DASHBOARD.react}
        />

        <Progress
          title="Backend"
          value={HERO_DASHBOARD.backend}
        />

        <Progress
          title="DSA"
          value={HERO_DASHBOARD.dsa}
        />

      </div>

      {/* Roadmap */}

      <div>

        <p className="mb-3 text-sm text-zinc-400">
          This Week
        </p>

        {HERO_DASHBOARD.roadmap.map((item) => (

          <div
            key={item.title}
            className="mb-2 flex items-center gap-3"
          >

            {item.completed ? (
              <CheckCircle2
                className="text-green-500"
                size={18}
              />
            ) : (
              <Circle
                className="text-zinc-500"
                size={18}
              />
            )}

            <span>{item.title}</span>

          </div>

        ))}

      </div>

    </Card>
  );
};

export default HeroDashboard;