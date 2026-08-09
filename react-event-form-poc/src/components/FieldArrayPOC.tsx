import { useForm, useFieldArray } from "react-hook-form";

type FormData = {
  skills: {
    skill: string;
  }[];
};

const FieldArrayPOC = () => {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      skills: [{ skill: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Submitted Successfully");
  };

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <h2>useFieldArray POC</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: "10px" }}>
            <input
              placeholder={`Skill ${index + 1}`}
              {...register(`skills.${index}.skill`)}
            />

            <button
              type="button"
              onClick={() => remove(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ skill: "" })}
        >
          Add Skill
        </button>

        <br />
        <br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FieldArrayPOC;