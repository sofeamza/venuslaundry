import { redirect } from "next/navigation"

export default function LoginPage() {
  // Redirect regular users to home page since they don't need to log in
  redirect("/")
}
