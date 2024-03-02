import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <Card className="sm:max-w-md max-w-none w-full bg-primary text-white lg:py-14 py-10 lg:px-16 md:px-12 px-4">
      <CardContent>
        <form className="text-base">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                className="w-full bg-white"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea rows={5} id="message" placeholder="Your Message" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          variant="secondary"
          className="h-14 rounded font-bold"
        >
          Book A Schedule
        </Button>
      </CardFooter>
    </Card>
  );
}
