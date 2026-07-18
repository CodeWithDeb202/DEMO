import "./ExperienceSection.css";
import { useFieldArray } from "react-hook-form";

const ExperienceSection = ({
  control,
  register,
}) => {

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "experience",
  });

  return (
    <div className="experience-section">

      <div className="section-header">

        <h2>Experience</h2>

        <button
          type="button"
          className="add-btn"
          onClick={() =>
            append({
              company: "",
              role: "",
              employmentType: "",
              location: "",
              startDate: "",
              endDate: "",
              currentlyWorking: false,
              description: "",
            })
          }
        >
          + Add Experience
        </button>

      </div>

      {fields.map((item, index) => (

        <div
          className="experience-card"
          key={item.id}
        >

          <div className="grid-2">

            {/* Company */}

            <div className="form-group">

              <label>Company</label>

              <input
                placeholder="Google"
                {...register(
                  `experience.${index}.company`
                )}
              />

            </div>

            {/* Role */}

            <div className="form-group">

              <label>Role</label>

              <input
                placeholder="Frontend Developer Intern"
                {...register(
                  `experience.${index}.role`
                )}
              />

            </div>

            {/* Employment Type */}

            <div className="form-group">

              <label>Employment Type</label>

              <select
                {...register(
                  `experience.${index}.employmentType`
                )}
              >
                <option value="">
                  Select
                </option>

                <option value="Internship">
                  Internship
                </option>

                <option value="Full Time">
                  Full Time
                </option>

                <option value="Part Time">
                  Part Time
                </option>

                <option value="Freelance">
                  Freelance
                </option>

                <option value="Contract">
                  Contract
                </option>

              </select>

            </div>

            {/* Location */}

            <div className="form-group">

              <label>Location</label>

              <input
                placeholder="Bhubaneswar"
                {...register(
                  `experience.${index}.location`
                )}
              />

            </div>

            {/* Start */}

            <div className="form-group">

              <label>Start Date</label>

              <input
                type="date"
                {...register(
                  `experience.${index}.startDate`
                )}
              />

            </div>

            {/* End */}

            <div className="form-group">

              <label>End Date</label>

              <input
                type="date"
                {...register(
                  `experience.${index}.endDate`
                )}
              />

            </div>

          </div>

          {/* Current Working */}

          <div className="checkbox-group">

            <input
              type="checkbox"
              {...register(
                `experience.${index}.currentlyWorking`
              )}
            />

            <label>
              I am currently working here
            </label>

          </div>

          {/* Description */}

          <div className="form-group">

            <label>Description</label>

            <textarea
              rows={5}
              placeholder="Describe your responsibilities..."
              {...register(
                `experience.${index}.description`
              )}
            />

          </div>

          <button
            type="button"
            className="remove-btn"
            onClick={() => remove(index)}
          >
            Remove Experience
          </button>

        </div>

      ))}

    </div>
  );
};

export default ExperienceSection;