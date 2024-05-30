import React from 'react'

const Createjob = () => {
  return (
    <div>
      
  <div class="p-6 border border-gray-300 sm:rounded-md">
    <form
      method="POST"
      action="https://herotofu.com/start"
      enctype="multipart/form-data"
    >
      <label class="block mb-6">
        <span class="text-gray-700">Job Title</span>
        <input
          required
          name="name"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Software Developer"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Location</span>
        <input
          required
          name="location"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Mohali"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Minimum experience</span>
        <select
          required
          name="experience"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        >
          
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Is Remote Allowed</span>
        <select
          required
          name="Remote allowed"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        >
          
          <option>True</option>
          <option>False</option>
        </select>
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Perks</span>
        <input
          required
          name="perks"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Great Health Benifits"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Time Zone</span>
        <input
          required
          name="Time"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="IST"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Job Type</span>
        <input
          required
          name="jobtype"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Full time / Part TIme"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Salary Budget</span>
        <input
          required
          name="salary"
          type="number"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="500000"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Tell us more about yourself</span>
        <textarea
          name="message"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="What motivates you?"
        ></textarea>
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Your CV</span>
        <input
          required
          name="cv"
          type="file"
          class="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        />
      </label>
      <div class="mb-6">
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                name="remote"
                value="yes"
                type="radio"
                class="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                checked
              />
              <span class="ml-2">You'd like to work remotely</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input
                name="re"
                value="no"
                type="radio"
                class="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
              <span class="ml-2">You'd prefer to work onsite</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Apply
        </button>
      </div>
      <div>
        <div class="mt-2 text-gray-700 text-right text-xs">
          by
          <a href="https://herotofu.com" class="hover:underline" target="_blank"
            >HeroTofu</a
          >
        </div>
      </div>
    </form>
  </div>
</div>

    
  )
}

export default Createjob
