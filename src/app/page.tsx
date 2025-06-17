"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center flex flex-col my-24">
        <h1 className="font-bold text-4xl">
          Track Your CFPs with Ease with CFPlease
        </h1>

        <p>
          They&apos;re your CFPs and you want &apos;em now. Never miss a CFP
          deadline again.
        </p>

        <div className="mt-8">
          <Button asChild>
            <Link href={"/login"} className="text-black">
              Get Started
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:px-24">
        <Card className={"lg:w-1/3! p-4 gap-4 flex flex-col"}>
          <h3 className="font-bold">Track Upcoming Conferences</h3>
          <p>
            It can be easy to forget the CFP dates and schedules for each
            conference. Keep track of them all in one place.
          </p>
        </Card>

        <Card className={"lg:w-1/3! p-4 gap-4 flex flex-col"}>
          <h3 className="font-bold">Track the Talks You Could Give</h3>
          <p>
            You have talks that could be used at a bunch of different
            conferences. Keep their titles and descriptions in one place. Reduce
            the repetition.
          </p>
        </Card>

        <Card className={"lg:w-1/3! p-4 gap-4 flex flex-col"}>
          <h3 className="font-bold">Track Which Talks You Proposed</h3>
          <p>
            You have talks you&apos;ve proposed to conferences. Keep track of
            which talks you proposed and which talks you didn&apos;t.
          </p>
        </Card>
      </div>
      <div className="flex flex-col gap-4 w-full lg:px-24 items-center mt-20">
        <h2 className="font-bold text-xl">How does it work?</h2>

        <ol className="list-decimal list-inside flex flex-col gap-2">
          <li>
            Create an empty repository on GitHub (other providers coming soon)
          </li>
          <li>Go to the Settings page and &quot;Login with GitHub&quot;.</li>
          <li>
            You&apos;ll be redirected to GitHub to authorize CFPlease to access
            your repositories.
          </li>
          <li>Once authorized, select the repository you created.</li>
          <li>Start tracking your conferences and talks!</li>
        </ol>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="font-bold text-xl mb-4">Built with Oh-My-GHaaD</h2>
        <p className="max-w-lg">
          CFPlease is built with{" "}
          <a
            className="text-blue-500 underline"
            href="https://github.com/cmgriffing/oh-my-ghaad"
            target="_blank"
            rel="noreferrer"
          >
            Oh-My-GHaaD
          </a>
          . Oh-My-GHaaD is a library to help you build apps that treat a git
          repository as a database. The providers, like GitHub, handle the Auth,
          Permissions, and more. You just need to provide the repository name
          and the collections you want to use.
        </p>
      </div>
      <footer className="text-center mt-20 text-xs">
        &copy;{new Date().getFullYear()} Chris Griffing. All rights reserved.
      </footer>
    </>
  );
}
