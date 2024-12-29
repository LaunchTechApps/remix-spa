export const FormError = ({ errors }: { errors: string[] | undefined }) => {
   if (!errors) return <></>;
   return (
      <div className="text-red-500 mt-1 text-sm left-0">
         {errors.map((error, index) => (
            <div key={index + error}>{error}</div>
         ))}
      </div>
   );
};
