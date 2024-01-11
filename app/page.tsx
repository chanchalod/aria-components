import Link from "next/link";
import Button from "../src/components/Button";

export default function Page() {
  return (
    <div className="p-3">
      <div className="flex flex-col gap-2">
        <h1>button basic state</h1>
        <div className="flex gap-2">
          <Button variant="primary" onPress={()=>alert('Primary button pressed!')}>Primary</Button>
          <Button variant="secondary">Secondary </Button>
          <Button variant="success">Success</Button>
          <Button variant="link">
            <Link href="/">Link</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1>button sizes</h1>
        <div className="flex gap-2">
          <Button variant="secondary">Small</Button>
          <Button variant="secondary" size="medium">
            Medium
          </Button>
          <Button variant="secondary" size="large">
            Large
          </Button>
        </div>
      </div>
    </div>
  );
}
