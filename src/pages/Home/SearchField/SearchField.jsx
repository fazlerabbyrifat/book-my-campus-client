const SearchField = () => {
  return (
    <div className="bg-gray-800">
      <div className="relative mx-auto p-5 w-2/3">
      <input
        type="text"
        placeholder="Search for a college name"
        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        className="absolute ml-2 top-1/2 transform -translate-y-1/2 px-4 py-3 text-white bg-primary rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="submit"
        value="Search"
      />
    </div>
    </div>
  );
};

export default SearchField;
