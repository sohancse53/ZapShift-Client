import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import riderImg from '../../assets/agent-pending.png'
const Rider = () => {
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const serviceCenters = useLoaderData();

  // console.log(serviceCenters);
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  // console.log(regions);
  const regions = [...new Set(regionsDuplicate)];
  console.log(regions);

  const riderRegion = useWatch({ control, name: "region" });
  // const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has been submitted we will reach out in 145 days",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => region == c.region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mt-10">Be a Rider</h2>
      <p className="mb-10">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
      <form
        onSubmit={handleSubmit(handleSubmit(handleRiderApplication))}
        className="mt-12 p-4 text-black"
      >
        {/* two column */}
        <div className="flex flex-col-reverse md:flex-row gap-12">
       <div className="flex-1">
           {/* Rider details */}
          <fieldset className="fieldset">
            <h4 className="font-semibold text-2xl">Details</h4>
            {/* Rider name */}
            <label className="label">Rider Name</label>
            <input
              defaultValue={user?.displayName}
              {...register("name")}
              type="text"
              className="input w-full"
              placeholder="Rider name"
            />
            {/*Rider  email */}
            <label className="label">Rider Email</label>
            <input
              defaultValue={user?.email}
              {...register("email")}
              type="text"
              className="input w-full"
              placeholder="Rider email"
            />
            {/* Riders region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Rider Regions</legend>
              <select
                {...register("region")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, index) => (
                  <option value={r} key={index}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>
            {/* rider districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Districts</legend>
              <select
                {...register("district")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(riderRegion).map((r, index) => (
                  <option value={r} key={index}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Your address */}
            <label className="label mt-4">Your Address</label>
            <input
              {...register("address")}
              type="text"
              className="input w-full"
              placeholder="address"
            />
          </fieldset>

          {/* More details  */}
          <fieldset className="fieldset">
            <h4 className="font-semibold text-2xl">More details</h4>
            {/* Driving license */}
            <label className="label">Driving license </label>
            <input
              {...register("license")}
              type="text"
              className="input w-full"
              placeholder="Driving license"
            />

            {/* Rider NID */}
            <label className="label">NID </label>
            <input
              {...register("nid")}
              type="text"
              className="input w-full"
              placeholder="NID"
            />

            {/* bike info */}
            <label className="label mt-4">Bike Information</label>
            <input
              {...register("bike")}
              type="text"
              className="input w-full"
              placeholder="Bike information"
            />
          </fieldset>
       </div>

       <div className="flex-1">
        {/* image here */}
                <img className="w-full" src={riderImg} alt="" />
       </div>


        </div>
        <button
          className="mt-8 w-full btn btn-primary text-black"
          type="submit"
        >
          Apply as a Rider
        </button>
      </form>
    </div>
  );
};

export default Rider;
