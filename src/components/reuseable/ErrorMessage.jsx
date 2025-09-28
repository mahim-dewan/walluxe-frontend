
export default function ErrorMessage({ label, message }) {
  return (
    <h5 className="font-normal text-primary min-h-96 flex items-center justify-center">
      Failed to load {label}: {message}
    </h5>
  );
}