export function formatDate(date: string, withYear: boolean = false): string {
  return new Date(date).toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: withYear ? "numeric" : undefined,
  });
}
