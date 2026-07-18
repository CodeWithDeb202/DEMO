import "./SocialLinksSection.css";

const SocialLinksSection = ({
  register,
  errors,
}) => {

  return (

    <div className="social-links-section">

      <h2 className="section-title">

        Social Links

      </h2>

      <div className="grid-2">

        {/* LinkedIn */}

        <div className="form-group">

          <label>

            LinkedIn

          </label>

          <input

            type="url"

            placeholder="https://linkedin.com/in/username"

            {...register("socialLinks.linkedin")}

          />

          {errors?.socialLinks?.linkedin && (

            <small className="error">

              {errors.socialLinks.linkedin.message}

            </small>

          )}

        </div>

        {/* GitHub */}

        <div className="form-group">

          <label>

            GitHub

          </label>

          <input

            type="url"

            placeholder="https://github.com/username"

            {...register("socialLinks.github")}

          />

        </div>

        {/* Portfolio */}

        <div className="form-group">

          <label>

            Portfolio Website

          </label>

          <input

            type="url"

            placeholder="https://portfolio.com"

            {...register("socialLinks.portfolio")}

          />

        </div>

        {/* LeetCode */}

        <div className="form-group">

          <label>

            LeetCode

          </label>

          <input

            type="url"

            placeholder="https://leetcode.com/username"

            {...register("socialLinks.leetcode")}

          />

        </div>

        {/* HackerRank */}

        <div className="form-group">

          <label>

            HackerRank

          </label>

          <input

            type="url"

            placeholder="https://hackerrank.com/username"

            {...register("socialLinks.hackerrank")}

          />

        </div>

        {/* CodeChef */}

        <div className="form-group">

          <label>

            CodeChef

          </label>

          <input

            type="url"

            placeholder="https://codechef.com/users/username"

            {...register("socialLinks.codechef")}

          />

        </div>

        {/* Codeforces */}

        <div className="form-group">

          <label>

            Codeforces

          </label>

          <input

            type="url"

            placeholder="https://codeforces.com/profile/username"

            {...register("socialLinks.codeforces")}

          />

        </div>

        {/* Behance */}

        <div className="form-group">

          <label>

            Behance

          </label>

          <input

            type="url"

            placeholder="https://behance.net/username"

            {...register("socialLinks.behance")}

          />

        </div>

        {/* Dribbble */}

        <div className="form-group">

          <label>

            Dribbble

          </label>

          <input

            type="url"

            placeholder="https://dribbble.com/username"

            {...register("socialLinks.dribbble")}

          />

        </div>

        {/* Twitter */}

        <div className="form-group">

          <label>

            Twitter / X

          </label>

          <input

            type="url"

            placeholder="https://x.com/username"

            {...register("socialLinks.twitter")}

          />

        </div>

        {/* Instagram */}

        <div className="form-group">

          <label>

            Instagram

          </label>

          <input

            type="url"

            placeholder="https://instagram.com/username"

            {...register("socialLinks.instagram")}

          />

        </div>

        {/* YouTube */}

        <div className="form-group">

          <label>

            YouTube

          </label>

          <input

            type="url"

            placeholder="https://youtube.com/@username"

            {...register("socialLinks.youtube")}

          />

        </div>

      </div>

    </div>

  );

};

export default SocialLinksSection;