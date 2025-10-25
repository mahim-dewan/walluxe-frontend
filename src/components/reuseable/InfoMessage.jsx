export default function InfoMessage({ message }) {
  return (
    <h5
      className={`font-normal text-primary min-h-96 flex items-center justify-center text-center`}
    >
      {message}
    </h5>
  );
}
