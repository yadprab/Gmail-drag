const ImageComp = ({ img }: { img: string }) => {
  return (
    <div className="image--wrapper">
      <img src={img} alt="profile" />
    </div>
  );
};
export { ImageComp };
