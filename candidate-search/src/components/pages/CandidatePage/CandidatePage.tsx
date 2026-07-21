import { useState } from "react";

import useCandidateSearch from "../../../hooks/useCandidateSearch";

import CandidateHeader from "../../organisms/CandidateHeader/CandidateHeader";
import CandidateTable from "../../organisms/CandidateTable/CandidateTable";
import CandidateTemplate from "../../templates/CandidateTemplate";

function CandidatePage() {
  const [search, setSearch] = useState("");

  const candidates = useCandidateSearch(search);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value);
  };

  return (
    <CandidateTemplate>
      <CandidateHeader />

      <CandidateTable
        candidates={candidates}
        search={search}
        onSearchChange={handleSearchChange}
      />
    </CandidateTemplate>
  );
}

export default CandidatePage;