import type { Metadata } from "next";
import WaitlistClient from "./waitlist-client";

export const metadata: Metadata = {
  title: "Ascle — Home Healthcare, Reimagined | Join the Waitlist",
  description:
    "Ascle connects you with verified doctors, certified nurses, and accredited labs — at home. Launching August–October 2026. Join the founding waitlist.",
  openGraph: {
    title: "Ascle — Home Healthcare, Reimagined",
    description:
      "Teleconsultation. Home nursing. Lab tests at your door. Launching 2026. Join the waitlist.",
  },
};

export default function WaitlistPage() {
  return <WaitlistClient />;
}
