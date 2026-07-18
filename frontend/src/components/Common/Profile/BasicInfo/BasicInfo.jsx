import "./BasicInfo.css";
import { Controller } from "react-hook-form";

const BasicInfo = ({
  control,
  register,
  errors,
}) => {
  return (
    <div className="basic-info">

      <h2 className="section-title">
        Basic Information
      </h2>

      <div className="grid-2">

        {/* First Name */}
        <div className="form-group">
          <label>First Name *</label>

          <input
            type="text"
            placeholder="Enter first name"
            {...register("firstName")}
          />

          {errors.firstName && (
            <small className="error">
              {errors.firstName.message}
            </small>
          )}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name *</label>

          <input
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
          />

          {errors.lastName && (
            <small className="error">
              {errors.lastName.message}
            </small>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            disabled
            {...register("email")}
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone *</label>

          <input
            type="text"
            placeholder="Enter phone"
            {...register("phone")}
          />

          {errors.phone && (
            <small className="error">
              {errors.phone.message}
            </small>
          )}
        </div>

        {/* Gender */}
        <div className="form-group">

          <label>Gender</label>

          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <select {...field}>

                <option value="">
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>

              </select>
            )}
          />

        </div>

        {/* DOB */}
        <div className="form-group">

          <label>Date of Birth</label>

          <input
            type="date"
            {...register("dateOfBirth")}
          />

        </div>

      </div>

      {/* Address */}

      <div className="form-group">

        <label>Address</label>

        <textarea
          rows="3"
          placeholder="Enter address"
          {...register("address")}
        />

      </div>

      {/* Bio */}

      <div className="form-group">

        <label>Bio</label>

        <textarea
          rows="5"
          placeholder="Tell us about yourself..."
          {...register("bio")}
        />

      </div>

    </div>
  );
};

export default BasicInfo;