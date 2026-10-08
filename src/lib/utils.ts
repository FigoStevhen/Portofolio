/**
 * Gabungkan string className menjadi satu, buang yang kosong/false.
 * contoh: cn("p-2", isActive && "bg-red", className)
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
