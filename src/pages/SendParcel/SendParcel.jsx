import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();

  const navigate = useNavigate();
  // console.log(serviceCenters);
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  // console.log(regions);
  const regions = [...new Set(regionsDuplicate)];
  console.log(regions);

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => region == c.region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    let cost = 0;
    const parcelWeight = parseFloat(data.parcelWeight);
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree With  the Cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and continue payment!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
          if (res.data.insertedId) {
            
            navigate('/dashboard/my-parcels');

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "parcel has created please pay",
              showConfirmButton: false,
              timer: 2500,
            });

          }
        });
      }
    });
  };

  return (
    <div>
      <h2>Send A Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* parcel type */}
        <div className="">
          <input
            type="radio"
            {...register("parcelType")}
            value="document"
            className="radio"
            defaultChecked
          />
          <label className="label mr-4">Document</label>

          <input
            type="radio"
            {...register("parcelType")}
            value="non-document"
            className="radio"
            defaultChecked
          />
          <label className="label">Non-Document</label>
        </div>

        {/* parcel info:name,weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              {...register("parcelName")}
              type="text"
              className="input w-full"
              placeholder="parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel weight(Kg)</label>
            <input
              {...register("parcelWeight")}
              type="number"
              className="input w-full"
              placeholder="parcel weight"
            />
          </fieldset>
        </div>
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender details */}
          <fieldset className="fieldset">
            <h4 className="font-semibold text-2xl">Sender Details</h4>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              defaultValue={user?.displayName}
              {...register("senderName")}
              type="text"
              className="input w-full"
              placeholder="sender name"
            />
            {/* sender email */}
            <label className="label">Sender Email</label>
            <input
              defaultValue={user?.email}
              {...register("senderEmail")}
              type="text"
              className="input w-full"
              placeholder="sender email"
            />
            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
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
            {/* sender districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender districts</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(senderRegion).map((r, index) => (
                  <option value={r} key={index}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>

            {/* sender address */}
            <label className="label mt-4">Sender Address</label>
            <input
              {...register("senderAddress")}
              type="text"
              className="input w-full"
              placeholder="sender address"
            />

            {/* sender phone */}
            <label className="label mt-4">Sender Phone</label>
            <input
              {...register("senderPhone")}
              type="text"
              className="input w-full"
              placeholder="sender senderPhone"
            />
          </fieldset>

          {/* receiver details  */}
          <fieldset className="fieldset">
            <h4 className="font-semibold text-2xl">Receiver Details</h4>
            {/* sender name */}
            <label className="label">Receiver Name</label>
            <input
              {...register("receiverName")}
              type="text"
              className="input w-full"
              placeholder="receiver name"
            />

            {/* receiver email */}
            <label className="label">receiver Email</label>
            <input
              {...register("receiverEmail")}
              type="text"
              className="input w-full"
              placeholder="receiver email"
            />
            {/* receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">receiver Regions</legend>
              <select
                {...register("receiverRegion")}
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

            {/* receiver district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">receiver districts</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a region</option>
                {districtsByRegion(receiverRegion).map((r, index) => (
                  <option value={r} key={index}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>

            {/* receiver phone */}
            <label className="label mt-4">Receiver Address</label>
            <input
              {...register("receiverPhone")}
              type="text"
              className="input w-full"
              placeholder="receiver receiverPhone"
            />
          </fieldset>
        </div>
        <button
          className="mt-8 w-full btn btn-primary text-black"
          type="submit"
        >
          Send parcel
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
