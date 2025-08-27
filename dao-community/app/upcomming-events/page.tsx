import { redirect } from "next/navigation";

export default function UpcommingEventsPage() {
  // Redirect to the correct path
  redirect("/events/upcomming-events");
}
