import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 bg-background p-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">ascle</h1>
        <p className="text-muted-foreground">
          Next.js 16 &middot; Tailwind CSS v4 &middot; shadcn/ui
        </p>
      </div>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Everything is wired up</CardTitle>
          <CardDescription>
            If this card has a border and the buttons below are styled, the
            Tailwind and shadcn setup is working.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Type something..." />
        </CardContent>
        <CardFooter className="gap-2">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
