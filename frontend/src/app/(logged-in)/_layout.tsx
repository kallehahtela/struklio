import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    const isAuthenticated  = true/* check for valid auth token/session */

    if (!isAuthenticated) {
        return <Redirect href={"/login"} />
    }

    return <Stack />;
}