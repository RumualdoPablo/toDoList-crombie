
import { signIn } from "@/auth"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github", { redirectTo: "/tasks" })
            }}
        >
            <button type="submit" className="w-full bg-purple-600 dark:bg-purple-700 px-3 text-white py-2 rounded-md text-center hover:bg-purple-700 dark:hover:bg-purple-800">
                Signin with GitHub
            </button>
        </form>
    )
} 