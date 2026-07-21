import { candidates } from "../data/candidates";

function useCandidateSearch(search: string) {
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return search.trim()
    ? filteredCandidates
    : filteredCandidates.slice(0, 7);
}

export default useCandidateSearch;