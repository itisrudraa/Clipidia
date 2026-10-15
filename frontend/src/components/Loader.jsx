function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-6">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500" />

      <p className="text-sm text-gray-400">
        Inspecting your video...
      </p>
    </div>
  );
}

export default Loader;