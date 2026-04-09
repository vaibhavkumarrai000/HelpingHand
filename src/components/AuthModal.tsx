import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "login" | "signup";
  onModeChange: (mode: "login" | "signup") => void;
}

export const AuthModal = ({ open, onOpenChange, mode, onModeChange }: AuthModalProps) => {
  const [form, setForm] = useState({
    name: "", dob: "", email: "", phone: "", address: "", city: "", pincode: "", state: "", password: "",
  });

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(mode === "login" ? "Logged in successfully!" : "Account created successfully!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{mode === "login" ? "Welcome Back" : "Create Account"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {mode === "signup" && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" required value={form.dob} onChange={(e) => update("dob", e.target.value)} />
              </div>
            </>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required value={form.password} onChange={(e) => update("password", e.target.value)} />
          </div>
          {mode === "signup" && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" required value={form.address} onChange={(e) => update("address", e.target.value)} />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required value={form.city} onChange={(e) => update("city", e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" required value={form.pincode} onChange={(e) => update("pincode", e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" required value={form.state} onChange={(e) => update("state", e.target.value)} />
                </div>
              </div>
            </>
          )}
          <Button type="submit" className="w-full">{mode === "login" ? "Login" : "Sign Up"}</Button>
          <p className="text-center text-sm text-muted-foreground">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="font-medium text-foreground hover:underline"
              onClick={() => onModeChange(mode === "login" ? "signup" : "login")}
            >
              {mode === "login" ? "Sign Up" : "Login"}
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
