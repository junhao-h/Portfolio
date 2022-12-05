const ProjectVideo = ({ singleProjectData }) => {
  //const { singleProjectData } = useContext(SingleProjectContext);
  if (!singleProjectData.ProjectVideo) {
    return <></>;
  }
  return (
    <video preload="auto" controls>
      <source src={singleProjectData?.ProjectVideo} type="video/mp4"></source>
      Your browser does not support HTML5 video.
    </video>
  );
};

export default ProjectVideo;
