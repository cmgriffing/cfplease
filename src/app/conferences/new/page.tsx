"use client";

import { z } from "zod";
import { Card } from "@/components/ui/card";
import { conferenceSchema, GAAD } from "@/utils/gaad";
import { useGHaaD } from "@oh-my-ghaad/react";
import { useRouter } from "next/navigation";
import { ConferenceDetailsForm } from "@/components/ConferenceDetailsForm";

export default function NewConference() {
  const router = useRouter();
  const { engine } = useGHaaD(GAAD);

  function onSubmit(values: z.infer<typeof conferenceSchema>) {
    engine.addToCollection("conferences", values).then(() => {
      router.push("/conferences");
    });
  }

  return (
    <div>
      <Card className="max-w-[640px] mx-auto">
        <ConferenceDetailsForm
          onSubmit={onSubmit}
          onCancel={() => {
            router.back();
          }}
        />
      </Card>
    </div>
  );
}
