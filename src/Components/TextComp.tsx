const TextComp = ({ name, body }: { name: string; body: string }) => {
  return (
    <div className="text--wrapper">
      <h3>{name}</h3>
      <p>{body}</p>
    </div>
  );
};
export { TextComp };
