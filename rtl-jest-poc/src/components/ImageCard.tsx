type ImageCardProps = {
  src: string;
};

function ImageCard({ src }: ImageCardProps) {
  return (
    <img
      src={src}
      alt="Employee Profile"
      title="Profile Image"
      data-testid="profile-image"
      className="profile"
      style={{ width: "200px" }}
    />
  );
}

export default ImageCard;