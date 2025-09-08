import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Auth() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = new URLSearchParams(location.search).get("signup") === "1";

  const submit = () => {
    signIn(email, name);
    navigate("/");
  };

  return (
    <Layout>
      <section className="container py-16 max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tight">{isSignup ? "Create account" : "Sign in"}</h1>
        <p className="text-muted-foreground mt-1">Use your email to continue. This demo stores auth locally; for production connect Supabase.</p>
        <div className="mt-6 space-y-4">
          {isSignup && (
            <label className="block text-sm">
              <div className="text-muted-foreground mb-1">Name</div>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border px-3 py-2" placeholder="Jane Doe" />
            </label>
          )}
          <label className="block text-sm">
            <div className="text-muted-foreground mb-1">Email</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border px-3 py-2" placeholder="you@example.com" type="email" />
          </label>
          <Button className="w-full" onClick={submit}>{isSignup ? "Create account" : "Sign in"}</Button>
        </div>
      </section>
    </Layout>
  );
}
