import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { request } from '../../services/request';
import avatar from "../../assets/images/profileavatar.png"
const Profile = () => {
  const { data } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const data = await request.get("/users/me");
      return data?.data;
    },
  });

  const { register, handleSubmit } = useForm({
  defaultValues:useMemo(() => {
    return {
      full_name: data?.data?.full_name,
        phone_number:  data?.data?.phone_number,
        address:  data?.data?.address,
    }
  },[data]),
  mode:"onChange"
  });

 

  const { mutate } = useMutation({
    mutationKey: ['userDataUpdate'],
    mutationFn: async (submitData) => {
      return await request.put(`/users/${data?.data?.user_id}`, submitData);
    },
  });

  const onSubmit = (submitData) => {
    mutate(submitData);
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="flex flex-col px-4 py-8 max-w-7xl mx-auto w-full m-10 xl:mt-20">
        {/* Profile / Courses buttons */}
        <div className="flex flex-wrap justify-start gap-4 mb-8">
          <button className="bg-[#009688] text-white font-medium rounded-md h-[43px] w-full md:w-[157px]">
            Profile
          </button>
          <button className="border border-[#686868] font-medium rounded-md h-[43px] w-full md:w-[157px]">
            Courses
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-[2px_2px_40px_0px_rgba(0,0,0,0.1)] p-6 md:p-8 rounded-lg w-full">
          {/* Top content for desktop */}
          <div className="hidden md:flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img
                src={avatar}
                alt="Profile"
                className="w-14 h-14 rounded-full mr-4"
              />
              <h2 className="text-2xl font-semibold">Alexa Rawles</h2>
            </div>
            <button
              type="submit"
              form="profileForm"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-medium"
            >
              Save
            </button>
          </div>

          {/* Top content for mobile */}
          <div className="flex flex-col items-start gap-4 mb-6 md:hidden">
            <div className="flex items-center">
              <img
                src={avatar}
                alt="Profile"
                className="w-14 h-14 rounded-full mr-4"
              />
              <h2 className="text-2xl font-semibold">Alexa Rawles</h2>
            </div>
          </div>

          {/* Form */}
          <form id="profileForm" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  {...register("full_name")}
                  className="w-full p-3 border border-gray-300 rounded-md text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address")}
                  className="w-full p-3 border border-gray-300 rounded-md text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Nomer
                </label>
                <input
                  type="text"
                  {...register("phone_number")}
                  className="w-full p-3 border border-gray-300 rounded-md text-lg"
                />
              </div>
            </div>

            {/* Save button for mobile */}
            <div className="md:hidden">
              <button
                type="submit"
                className="bg-green-600 text-white w-full py-3 rounded-md font-medium"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
