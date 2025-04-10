import { add } from "../../testing-submodule-feature-1/add";
import { subtract } from "../../testing-submodule-feature-2/subtract";

export default function Home() {
  return (
    <>
      <div>{add(1, 2)}</div>
      <div>{subtract(5, 1)}</div>
    </>
  );
}
