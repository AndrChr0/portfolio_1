function Project(
  header,
  text,
  mainImg,
  mainImgAlt,
  live,
  gitHub,
  process,
  icons
) {
  return (
    <div>
      <h2>{header}</h2>
      <p>{text}</p>
      <img src={mainImg} alt={mainImgAlt} />
      <div>
        <a href={live}>Live</a>
        <a href={gitHub}>GitHub</a>
        <a href={process}>Process</a>
      </div>
      <div>
        {icons.map((icon, index) => (
          <div key={index}>
            <img src={icon.src} alt={icon.alt} />
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
