import BottomNavigation from "./BottomNavigation";
import { BottomLink as Link } from "./Link";

const QueryNavigation = () => (
  <BottomNavigation>
    <Link href="/query?name=data">What is Data?</Link>
    <Link
      href={{
        pathname: "/query",
        query: { name: "fabric" }
      }}
    >
      What is Fabric?
    </Link>
    <Link href="/query?name=sense" as="/what-is-sense">
      What is Sense?
    </Link>
    <Link href="/query" as="/what-is-code">
      What is Code?
    </Link>
  </BottomNavigation>
);

export default QueryNavigation;
