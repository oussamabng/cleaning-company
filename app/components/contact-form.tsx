"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    userFirstname: "",
    userEmail: "",
    userMessage: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      alert(result.message || "Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    } finally {
      setFormData({ userEmail: "", userFirstname: "", userMessage: "" });
      setLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className="sm:max-w-md max-w-none w-full">
      <Card className="w-full bg-primary text-white lg:py-14 py-10 lg:px-16 md:px-12 px-4">
        <CardContent>
          <div className="text-base text-black">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nom</Label>
                <Input
                  required
                  id="name"
                  placeholder="Votre Nom"
                  className="w-full bg-white"
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      userFirstname: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  required
                  id="email"
                  placeholder="Votre Email"
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      userEmail: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  required
                  rows={5}
                  id="message"
                  placeholder="Votre Message"
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      userMessage: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            size="lg"
            variant="secondary"
            className="h-14 rounded font-bold"
          >
            {loading ? "Loading.." : "Réservez un horaire"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}