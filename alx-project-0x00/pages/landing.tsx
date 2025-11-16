import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Buttons section */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex gap-4">
          <Button title="Small" size="small" shape="rounded-sm" />
          <Button title="Small" size="small" shape="rounded-md" />
          <Button title="Small" size="small" shape="rounded-full" />
        </div>

        <div className="flex gap-4">
          <Button title="Medium" size="medium" shape="rounded-sm" />
          <Button title="Medium" size="medium" shape="rounded-md" />
          <Button title="Medium" size="medium" shape="rounded-full" />
        </div>

        <div className="flex gap-4">
          <Button title="Large" size="large" shape="rounded-sm" />
          <Button title="Large" size="large" shape="rounded-md" />
          <Button title="Large" size="large" shape="rounded-full" />
        </div>
      </div>

      {/* Card component */}
      <Card />
    </div>
  );
};

export default Landing;
