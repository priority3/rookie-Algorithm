function reverseLeftWords(s: string, n: number): string {
  const temp = s.slice(0, n)
  return s.slice(n) + temp
}
