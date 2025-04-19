import { redirect } from "next/navigation"

export default function RegisterPage() {
  // Redirect regular users to home page since they don't need to register
  redirect("/")
}
