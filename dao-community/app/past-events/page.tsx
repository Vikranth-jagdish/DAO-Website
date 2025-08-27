import { redirect } from "next/navigation";

export default function PastEventsPage() {
  // Redirect to the correct path
  redirect("/events/past-events");
}
