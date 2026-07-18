import "./SkillsSection.css"

import TagInput from "../TagInput";
import MultiSelect from "../MultiSelect";

const skillLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
];

const SkillsSection = ({
  control,
  watch,
  setValue,
  register,
}) => {

  return (

    <div className="skills-section">

      <h2 className="section-title">

        Skills

      </h2>

      {/* Technical Skills */}

      <div className="form-group">

        <label>

          Technical Skills

        </label>

        <TagInput

          value={watch("skills") || []}

          onChange={(value) =>

            setValue("skills", value)

          }

          placeholder="React, Node, MongoDB..."

        />

      </div>

      {/* Preferred Technologies */}

      <div className="form-group">

        <label>

          Preferred Technologies

        </label>

        <MultiSelect

          control={control}

          name="preferredTechnologies"

          options={[

            "React",

            "Next.js",

            "Vue",

            "Angular",

            "Node.js",

            "Express",

            "MongoDB",

            "MySQL",

            "PostgreSQL",

            "Firebase",

            "AWS",

            "Docker",

            "Git",

            "Tailwind CSS",

            "Bootstrap",

            "Python",

            "Java",

            "C",

            "C++",

          ]}

        />

      </div>

      {/* Skill Level */}

      <div className="form-group">

        <label>

          Overall Skill Level

        </label>

        <select

          {...register("skillLevel")}

        >

          <option value="">

            Select Skill Level

          </option>

          {

            skillLevels.map((item) => (

              <option

                key={item}

                value={item}

              >

                {item}

              </option>

            ))

          }

        </select>

      </div>

      {/* Languages */}

      <div className="form-group">

        <label>

          Languages Known

        </label>

        <TagInput

          value={watch("languages") || []}

          onChange={(value)=>

            setValue("languages", value)

          }

          placeholder="English, Hindi, Odia..."

        />

      </div>

    </div>

  );

};

export default SkillsSection;