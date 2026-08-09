export function increment(value: number): number {
  return value + 1;
}

export function decrement(value: number): number {
  if (value > 0) {
    return value - 1;
  }

  return 0;
}