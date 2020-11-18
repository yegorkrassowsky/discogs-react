export type SearchParams = {
  query: string
  type: string
}

export type SearchProps = {
  onTypeChange(type: string): void
  onQueryChange(query: string): void
  onSubmit(): void
  params: SearchParams
}
