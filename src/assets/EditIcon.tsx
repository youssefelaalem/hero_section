function EditIcon({
  onClick,
  isEditMode,
}: {
  onClick: () => void;
  isEditMode: boolean;
}) {
  return (
    <svg
      onClick={onClick}
      aria-label={isEditMode ? "Disable Edit Icon" : "Edit Icon"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 w-5 cursor-pointer"
    >
      {isEditMode ? (
        // Icon for "disable edit" (e.g., a lock or cancel icon)
        <path d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3.75 3.75 0 0 0-3.75 3.75v6.75a3.75 3.75 0 0 0 3.75 3.75h10.5a3.75 3.75 0 0 0 3.75-3.75v-6.75a3.75 3.75 0 0 0-3.75-3.75v-3a5.25 5.25 0 0 0-5.25-5.25Zm-1.5 8.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-3Z" />
      ) : (
        // Icon for "edit" (the original pencil icon)
        <>
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
        </>
      )}
    </svg>
  );
}

export default EditIcon;
