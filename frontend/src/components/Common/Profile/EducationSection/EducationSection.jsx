import "./EducationSection.css";
import { useFieldArray } from "react-hook-form";

const EducationSection = ({
  control,
  register,
}) => {

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <div className="education-section">

      <div className="section-header">

        <h2>Education</h2>

        <button
          type="button"
          className="add-btn"
          onClick={() =>
            append({
              degree: "",
              institute: "",
              fieldOfStudy: "",
              startYear: "",
              endYear: "",
              percentage: "",
            })
          }
        >
          + Add Education
        </button>

      </div>

      {fields.map((item, index) => (

        <div
          className="education-card"
          key={item.id}
        >

          <div className="grid-2">

            <div className="form-group">

              <label>Degree</label>

              <input
                placeholder="B.Tech"
                {...register(
                  `education.${index}.degree`
                )}
              />

            </div>

            <div className="form-group">

              <label>Institute</label>

              <input
                placeholder="College Name"
                {...register(
                  `education.${index}.institute`
                )}
              />

            </div>

            <div className="form-group">

              <label>Field Of Study</label>

              <input
                placeholder="Computer Science"
                {...register(
                  `education.${index}.fieldOfStudy`
                )}
              />

            </div>

            <div className="form-group">

              <label>Percentage / CGPA</label>

              <input
                placeholder="8.45 CGPA"
                {...register(
                  `education.${index}.percentage`
                )}
              />

            </div>

            <div className="form-group">

              <label>Start Year</label>

              <input
                type="number"
                {...register(
                  `education.${index}.startYear`
                )}
              />

            </div>

            <div className="form-group">

              <label>End Year</label>

              <input
                type="number"
                {...register(
                  `education.${index}.endYear`
                )}
              />

            </div>

          </div>

          <button
            type="button"
            className="remove-btn"
            onClick={() => remove(index)}
          >
            Remove
          </button>

        </div>

      ))}

    </div>
  );
};

export default EducationSection;