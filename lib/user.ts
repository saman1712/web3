import type { User } from "./types";

export function splitName(full: string) {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
}

export function fullName(firstName: string, lastName: string) {
  return [firstName, lastName].map((s) => s.trim()).filter(Boolean).join(" ") || "کاربر عزیز";
}

export function buildUser(partial: Partial<User> & { name?: string }): User {
  const fromName = splitName(partial.name || "");
  const firstName = partial.firstName?.trim() || fromName.firstName;
  const lastName = partial.lastName?.trim() || fromName.lastName;
  const name = fullName(firstName, lastName);
  const mobile = (partial.mobile || "").trim();
  return {
    name,
    firstName,
    lastName,
    email: (partial.email || (mobile ? `${mobile}@vision.local` : "")).trim(),
    mobile,
    username: (partial.username || mobile || name).trim(),
    birthDate: partial.birthDate || "",
    gender: partial.gender || "",
  };
}
