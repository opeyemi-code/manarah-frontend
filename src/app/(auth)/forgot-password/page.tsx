import { Button, ButtonLink, Card, CardDescription, CardHeader, Input } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <section className="sm:max-w-2xl lg:max-w-xl mx-auto mt-8">
      <h1 className="mb-5 text-primary text-center font-semibold text-2xl sm:text-2xl sm:text-[2rem]">
        MANARAH
      </h1>
      <Card className="my-5 lg:max-w-2xl">
        <CardHeader className="text-[1.75rem] font-bold">Forgot Password?</CardHeader>
        <CardDescription className="text-base sm:text-[1.125rem]">
          Enter the email address associated with your account and we'll send you a password reset
          link.
        </CardDescription>
        <form className="my-5">
          <label className="my-3 block" htmlFor="email">
            <Input
              className="border-2 h-14 tex-sm font-semibold caret-primary"
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
            />
          </label>
          <ButtonLink
            href="/forgot-password/confirmation"
            className="w-full h-14 my-3 text-white text-sm font-semibold"
          >
            Send Reset Link
          </ButtonLink>
        </form>
        <ButtonLink
          className="text-sm bg-transparent w-full font-semibold text-primary hover:bg-transparent"
          href="/login"
        >
          <ArrowLeft className="mr-1" size={16} aria-hidden="false" />
          Back to Login
        </ButtonLink>
      </Card>
    </section>
  );
}
