import { useEffect, useState } from "react";

function LoadingEmployees() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await Promise.resolve();

      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <p>Safiya</p>
      <p>Rahul</p>
    </div>
  );
}

export default LoadingEmployees;