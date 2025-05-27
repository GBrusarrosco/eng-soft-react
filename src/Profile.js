export default function Profile({ name, imageUrl, profession }) {
  return (
    <div className="profile">
      <img
        src={imageUrl}
        alt={name}
        className="avatar"
        style={{ width: 100, borderRadius: '50%' }}
      />
      <h4>{name}</h4>
      <p>{profession}</p>
    </div>
  );
}
