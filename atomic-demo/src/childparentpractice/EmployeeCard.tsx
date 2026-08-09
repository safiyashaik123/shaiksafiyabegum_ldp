type EmployeeCardProps = {
  name: string;
  department: string;
};

function EmployeeCard({ name, department }: EmployeeCardProps) {
  return (
    <>
      <h2>{name}</h2>

      <p>Department : {department}</p>

      <hr />
    </>
  );
}

export default EmployeeCard;