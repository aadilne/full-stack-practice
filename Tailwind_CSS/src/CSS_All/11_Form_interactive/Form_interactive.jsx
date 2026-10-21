
function   Form_Interactive(){


    return (
        <div className="mx-20 ">

            <div className="min-h-screen bg-slate-100 p-6">
      <form
        className="mx-auto max-w-lg space-y-5 rounded-xl bg-white p-6 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted successfully!");
        }}
      >
        <h1 className="text-2xl font-bold text-slate-800 text-center">
          Registration Form
        </h1>

        {/* 1. Form Elements Styling */}

        {/* 2. Input Fields */}
        <div className="space-y-1">
          <label htmlFor="p12-name" className="block font-medium">
            Full Name
          </label>
          <input
            id="p12-name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full rounded-lg border border-gray-300 p-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* 8. Placeholder Styling */}
        <div className="space-y-1">
          <label htmlFor="p12-email" className="block font-medium">
            Email
          </label>

          {/* 9. Focus States */}
          <div className="rounded-lg border border-gray-300 p-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
            <input
              id="p12-email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full p-1 outline-none placeholder:italic placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* 11. Disabled State */}
        <div className="space-y-1">
          <label htmlFor="p12-disabled" className="block font-medium">
            Disabled Field
          </label>
          <input
            id="p12-disabled"
            type="text"
            value="Not editable"
            disabled
            className="w-full rounded-lg border p-3 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
          />
        </div>

        {/* 11. Read-only State */}
        <div className="space-y-1">
          <label htmlFor="p12-id" className="block font-medium">
            User ID
          </label>
          <input
            id="p12-id"
            type="text"
            value="USER-1024"
            readOnly
            className="w-full rounded-lg border p-3 read-only:bg-gray-100"
          />
        </div>

        {/* 3. Textarea Styling */}
        <div className="space-y-1">
          <label htmlFor="p12-message" className="block font-medium">
            Message
          </label>
          <textarea
            id="p12-message"
            rows={3}
            placeholder="Write your message"
            className="w-full rounded-lg border border-gray-300 p-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* 4. Select Dropdown */}
        <div className="space-y-1">
          <label htmlFor="p12-city" className="block font-medium">
            Select City
          </label>
          <select
            id="p12-city"
            required
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="" disabled>Select your city</option>
            <option value="ara">Ara</option>
            <option value="patna">Patna</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>

        {/* 5. Checkbox Styling */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            required
            className="size-4 accent-blue-600"
          />
          <span>I agree to the terms</span>
        </label>

        {/* 6. Radio Button Styling */}
        <fieldset className="space-y-2">
          <legend className="font-medium">Choose Course</legend>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="p12-course"
              value="react"
              required
              className="size-4 accent-blue-600"
            />
            React JS
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="p12-course"
              value="node"
              className="size-4 accent-blue-600"
            />
            Node JS
          </label>
        </fieldset>

        {/* 7. File Input Styling */}
        <div className="space-y-1">
          <label htmlFor="p12-file" className="block font-medium">
            Upload Photo
          </label>
          <input
            id="p12-file"
            type="file"
            accept="image/*"
            className="w-full text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
          />
        </div>

        {/* 12. Validation States */}
        <input
          type="text"
          required
          minLength={3}
          placeholder="Username (minimum 3 characters)"
          className="w-full rounded-lg border border-gray-300 p-3 placeholder:text-gray-400 required:border-orange-300 invalid:border-red-500 invalid:bg-red-50"
        />

        {/* 1. Form Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Submit Form
        </button>
      </form>
    </div>

        </div>
    )
}


export   default  Form_Interactive